import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import type { BattleData, AppState } from './types';
import { fetchBattleData } from './api';
import ArenaHeader from '../components/ArenaHeader';
import IdleStage from '../components/IdleStage';
import LoadingStage from '../components/LoadingStage';
import ResultStage from '../components/ResultStage';

const LOADING_MESSAGES = [
  "⚔️  Deploying Model Alpha...",
  "🔥  Model Beta is charging up...",
  "🤖  Agents entering the arena...",
  "💥  Battle commencing...",
  "⚖️  Judge calculating verdict...",
];

export default function App() {
  const [appState, setAppState] = useState<AppState>('idle');
  const [problem, setProblem] = useState('');
  const [battleData, setBattleData] = useState<BattleData | null>(null);
  const [loadingMsg, setLoadingMsg] = useState(LOADING_MESSAGES[0]);
  const [animatedScores, setAnimatedScores] = useState({ p1: 0, p2: 0 });
  const loadingInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleFight = async () => {
    if (!problem.trim()) return;
    setAppState('loading');
    setAnimatedScores({ p1: 0, p2: 0 });

    let idx = 0;
    loadingInterval.current = setInterval(() => {
      idx = (idx + 1) % LOADING_MESSAGES.length;
      setLoadingMsg(LOADING_MESSAGES[idx]);
    }, 700);

    try {
      const data = await fetchBattleData(problem);
      
      
      setBattleData(data);
      setAppState('result');
      setTimeout(() => {
        setAnimatedScores({
          p1: data.judge.solution_1_score,
          p2: data.judge.solution_2_score,
        });
      }, 600);
    } catch (e) {
      console.error(e);
      setAppState('idle');
    } finally {
      if (loadingInterval.current) clearInterval(loadingInterval.current);
    }
  };

  const handleReset = () => {
    setAppState('idle');
    setBattleData(null);
    setProblem('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleFight();
    }
  };

  // Cleanup on unmount
  useEffect(() => () => {
    if (loadingInterval.current) clearInterval(loadingInterval.current);
  }, []);
  

  const winner: 1 | 2 | null = battleData
    ? battleData.judge.solution_1_score >= battleData.judge.solution_2_score ? 1 : 2
    : null;

  return (
    <div className="arena-wrapper">
      {/* Scanline overlay */}
      <div className="scanlines" />

      <ArenaHeader />

      {appState === 'idle' && (
        <IdleStage
          question={problem}
          onChange={setProblem}
          onFight={handleFight}
          onKeyDown={handleKeyDown}
        />
      )}

      {appState === 'loading' && (
        <LoadingStage question={problem} loadingMsg={loadingMsg} />
      )}

      {appState === 'result' && battleData && (
        <ResultStage
          battleData={battleData}
          animatedScores={animatedScores}
          winner={winner}
          onReset={handleReset}
        />
      )}
    </div>
  );
}
