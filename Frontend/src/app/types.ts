export interface JudgeResult {
  solution_1_score: number;
  solution_2_score: number;
  solution_1_reasoning: string;
  solution_2_reasoning: string;
}

export interface BattleData {
  problem: string;
  solution_1: string;
  solution_2: string;
  judge: JudgeResult;
}

export type AppState = 'idle' | 'loading' | 'result';
