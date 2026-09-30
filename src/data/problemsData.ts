import { Problem } from '../types';
import { module1Problems } from './modules/module1';
import { module2Problems } from './modules/module2';
import { module3Problems } from './modules/module3';
import { module4Problems } from './modules/module4';
import { module5Problems } from './modules/module5';
import { module6Problems } from './modules/module6';
import { module7Problems } from './modules/module7';
import { module8Problems } from './modules/module8';

export const allProblems: Problem[] = [
  ...module1Problems,
  ...module2Problems,
  ...module3Problems,
  ...module4Problems,
  ...module5Problems,
  ...module6Problems,
  ...module7Problems,
  ...module8Problems
];

export const problemsMap: Record<string, Problem> = allProblems.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {} as Record<string, Problem>);

export interface ModuleCategory {
  id: number;
  name: string;
  inclassCount: number;
  postclassCount: number;
  totalCount: number;
  topics: string;
}

export const curriculumModules: ModuleCategory[] = [
  { id: 1, name: 'Graphs & City Networks', inclassCount: 3, postclassCount: 3, totalCount: 6, topics: 'Adjacency Lists, BFS, DFS, Weighted Edges, Connected Components' },
  { id: 2, name: 'Arrays, Matrices & Scanning', inclassCount: 3, postclassCount: 2, totalCount: 5, topics: 'Sorted Merge, Matrix Transpose, Alphabet Bitmasks, Overlapping Intervals' },
  { id: 3, name: 'Math, LCM & String Mechanics', inclassCount: 3, postclassCount: 2, totalCount: 5, topics: 'Clock Angles, LCM/GCD, Two Pointers String Reversal, Grid Paths DP' },
  { id: 4, name: 'Number Theory & Intervals', inclassCount: 2, postclassCount: 2, totalCount: 4, topics: 'Sieve of Eratosthenes, Euclidean GCD, Subarray LCM, Interval Scheduling' },
  { id: 5, name: 'Ranges, Factors & Precision', inclassCount: 2, postclassCount: 2, totalCount: 4, topics: 'Odd Range Counting, Legendre Factorial Zeroes, Prime Factors, Square Bounds' },
  { id: 6, name: 'Two Pointers & Signal Arrays', inclassCount: 2, postclassCount: 2, totalCount: 4, topics: 'Alphanumeric Palindromes, Reverse Vowels, 3-Sum Triplets, Sorted Squares' },
  { id: 7, name: 'Chunked Processing & Palindromes', inclassCount: 2, postclassCount: 2, totalCount: 4, topics: 'Stepped Reversal, Cyclic Stream Rotation, Substring Palindromes, Word Reversals' },
  { id: 8, name: 'Binary Search & Advanced Sorting', inclassCount: 2, postclassCount: 2, totalCount: 4, topics: 'Rotated Binary Search, QuickSort Lomuto, Log Bound Ranges, Stable MergeSort' }
];
