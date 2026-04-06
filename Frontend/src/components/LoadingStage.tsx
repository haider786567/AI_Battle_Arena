import React from 'react';

interface LoadingStageProps {
  question: string;
  loadingMsg: string;
}

const LoadingStage: React.FC<LoadingStageProps> = ({ question, loadingMsg }) => (
  <div className="loading-stage">
    <div className="loading-arena">
      <div className="loading-fighter alpha-loading">
        <div className="fighter-avatar alpha-avatar">α</div>
        <div className="fighter-label">MODEL ALPHA</div>
      </div>

      <div className="loading-center">
        <div className="loading-vs-ring">
          <span>VS</span>
        </div>
        <div className="loading-msg">{loadingMsg}</div>
        <div className="loading-dots">
          <span /><span /><span />
        </div>
      </div>

      <div className="loading-fighter beta-loading">
        <div className="fighter-avatar beta-avatar">β</div>
        <div className="fighter-label">MODEL BETA</div>
      </div>
    </div>

    <div className="loading-question">
      <span className="loading-q-label">MISSION:</span> {question}
    </div>
  </div>
);

export default LoadingStage;
