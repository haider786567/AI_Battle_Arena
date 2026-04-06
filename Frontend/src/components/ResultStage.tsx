import React from 'react';
import type { BattleData } from '../app/types';

interface ResultStageProps {
  battleData: BattleData;
  animatedScores: { p1: number; p2: number };
  winner: 1 | 2 | null;
  onReset: () => void;
}

const ResultStage: React.FC<ResultStageProps> = ({
  battleData,
  animatedScores,
  winner,
  onReset,
}) => (
  <div className="result-stage">
    {/* Mission briefing */}
    <div className="mission-bar">
      <span className="mission-label">📡 MISSION</span>
      <span className="mission-text">{battleData.problem}</span>
      <button className="rematch-btn" onClick={onReset}>↩ NEW FIGHT</button>
    </div>

    {/* Battle arena */}
    <div className="battle-arena">
      {/* Model Alpha */}
      <div className="fighter-card alpha-card">
        {winner === 1 && <div className="winner-stamp">WINNER</div>}
        <div className="fighter-card-header">
          <span className="fc-tag alpha-tag">ALPHA</span>
          <span className="fc-name">Model Alpha</span>
          <span className="fc-score alpha-score">
            {animatedScores.p1}<span>/10</span>
          </span>
        </div>
        <div className="score-bar-track">
          <div
            className="score-bar-fill alpha-fill"
            style={{ width: `${(animatedScores.p1 / 10) * 100}%` }}
          />
        </div>
        <div className="fighter-response">{battleData.solution_1}</div>
      </div>

      {/* VS divider */}
      <div className="vs-column">
        <div className="vs-badge">VS</div>
      </div>

      {/* Model Beta */}
      <div className="fighter-card beta-card">
        {winner === 2 && <div className="winner-stamp">WINNER</div>}
        <div className="fighter-card-header">
          <span className="fc-tag beta-tag">BETA</span>
          <span className="fc-name">Model Beta</span>
          <span className="fc-score beta-score">
            {animatedScores.p2}<span>/10</span>
          </span>
        </div>
        <div className="score-bar-track">
          <div
            className="score-bar-fill beta-fill"
            style={{ width: `${(animatedScores.p2 / 10) * 100}%` }}
          />
        </div>
        <div className="fighter-response">{battleData.solution_2}</div>
      </div>
    </div>

    {/* Judge verdict */}
    <div className="judge-panel">
      <div className="judge-panel-header">
        <span className="judge-icon">⚖️</span>
        <span>JUDGE'S VERDICT</span>
        {winner !== null && (
          <span className="judge-winner-tag">
            {winner === 1 ? 'Model Mistral Wins!' : 'Model Groq Wins!'}
          </span>
        )}
      </div>
      <div className="judge-grid">
        <div className="judge-card judge-alpha">
          <div className="judge-card-title alpha-text">
            MODEL Mistral — {battleData.judge.solution_1_score}/10
          </div>
          <p>{battleData.judge.solution_1_reasoning}</p>
        </div>
        <div className="judge-card judge-beta">
          <div className="judge-card-title beta-text">
            MODEL groq — {battleData.judge.solution_2_score}/10
          </div>
          <p>{battleData.judge.solution_2_reasoning}</p>
        </div>
      </div>
    </div>

    {/* New fight CTA */}
    <div className="rematch-row">
      <button className="fight-btn" onClick={onReset}>
        <span className="fight-btn-icon">🔄</span> NEW FIGHT
      </button>
    </div>
  </div>
);

export default ResultStage;
