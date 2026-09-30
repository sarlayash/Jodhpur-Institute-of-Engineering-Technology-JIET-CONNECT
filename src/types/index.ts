export type Language = 'cpp' | 'c' | 'java' | 'python';

export type ProblemType = 'Inclass' | 'Postclass';

export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  explanation?: string;
  isHidden?: boolean;
}

export interface VisualizerStep {
  stepIndex: number;
  description: string;
  highlightIndices?: number[];
  secondaryIndices?: number[];
  currentValues?: (number | string)[];
  graphActiveNodes?: string[];
  graphActiveEdges?: [string, string][];
  variables?: Record<string, string | number | boolean>;
  message: string;
}

export interface Problem {
  id: string;
  title: string;
  moduleNumber: number;
  moduleName: string;
  type: ProblemType;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  realWorldScenario: string;
  constraints: string[];
  patternName: string;
  patternWhy: string;
  tipsAndTricks: string[];
  commonMistakes: string[];
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
    explanation: string;
  };
  memoryComplexity: {
    space: string;
    explanation: string;
  };
  starterCode: Record<Language, string>;
  solutionCode: Record<Language, string>;
  testCases: TestCase[];
  defaultVisualizerData: {
    initialState: (number | string)[];
    steps: VisualizerStep[];
  };
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  category: 'module' | 'milestone' | 'mastery';
  icon: string;
  unlockedAt?: string;
  progress: number; // 0 to 100
  requirement: string;
}

export interface UserProfile {
  name: string;
  rollNo?: string;
  branch: string;
  joinedAt: string;
  solvedProblemIds: string[];
  attemptedProblemIds: string[];
  preferredLanguage: Language;
  earnedBadgeIds: string[];
  certificateId: string;
}

export interface ExecutionResult {
  passed: boolean;
  totalTests: number;
  passedTests: number;
  testDetails: {
    testId: string;
    input: string;
    expected: string;
    actual: string;
    passed: boolean;
    durationMs: number;
  }[];
  runtimeMs: number;
  memoryKb: number;
  consoleLogs: string[];
}
