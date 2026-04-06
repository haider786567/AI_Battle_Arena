import React from 'react';

interface IdleStageProps {
  question: string;
  onChange: (value: string) => void;
  onFight: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

const IdleStage: React.FC<IdleStageProps> = ({ question, onChange, onFight, onKeyDown }) => (
  <div className="input-stage">
    <div className="input-card">
      <div className="input-card-tag">MISSION INPUT</div>
      <h2 className="input-card-title">Enter Your Question</h2>
      <p className="input-card-desc">
        Type any question or problem. Two AI models will battle to answer it best.
      </p>
      <textarea
        id="question-input"
        className="question-textarea"
        rows={4}
        placeholder="e.g. What is a transformer model?"
        value={question}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <div className="input-meta">Press Enter or click FIGHT to begin</div>
      <button
        id="fight-btn"
        className="fight-btn"
        onClick={onFight}
        disabled={!question.trim()}
      >
        <span className="fight-btn-icon">⚔️</span> FIGHT!
      </button>
    </div>

    <div className="idle-fighters">
      <div className="idle-fighter alpha">
        <div className="fighter-name">MODEL ALPHA</div>
        <div className="fighter-status">READY</div>
      </div>
      <div className="idle-vs">VS</div>
      <div className="idle-fighter beta">
        <div className="fighter-name">MODEL BETA</div>
        <div className="fighter-status">READY</div>
      </div>
    </div>
  </div>
);

export default IdleStage;
