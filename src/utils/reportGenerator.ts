import { Problem, UserProfile } from '../types';
import { curriculumModules } from '../data/problemsData';

export interface ModuleMastery {
  moduleNumber: number;
  moduleName: string;
  totalProblems: number;
  solvedProblems: number;
  percentage: number;
  status: 'Mastered' | 'Proficient' | 'In Progress' | 'Needs Attention';
  primaryPattern: string;
}

export interface PlacementReportData {
  studentName: string;
  rollNo: string;
  branch: string;
  reportDate: string;
  credentialId: string;
  score: number; // 1 to 100
  tier: string;
  tierDescription: string;
  percentile: number;
  solvedCount: number;
  totalCount: number;
  completionRate: number;
  moduleMastery: ModuleMastery[];
  strengths: {
    title: string;
    description: string;
    tag: string;
  }[];
  weaknesses: {
    title: string;
    description: string;
    impact: string;
  }[];
  opportunityRoadmap: {
    phase: string;
    focus: string;
    actionItems: string[];
    targetCompanies: string;
  }[];
}

export function generatePlacementReport(userProfile: UserProfile, allProblems: Problem[]): PlacementReportData {
  const solvedSet = new Set(userProfile.solvedProblemIds || []);
  const totalCount = allProblems.length;
  const solvedCount = allProblems.filter((p) => solvedSet.has(p.id)).length;
  const completionRate = Math.round((solvedCount / (totalCount || 1)) * 100);

  // Module-by-module mastery computation
  const moduleMastery: ModuleMastery[] = curriculumModules.map((mod) => {
    const modProblems = allProblems.filter((p) => p.moduleNumber === mod.id);
    const modSolved = modProblems.filter((p) => solvedSet.has(p.id)).length;
    const pct = modProblems.length > 0 ? Math.round((modSolved / modProblems.length) * 100) : 0;

    let status: 'Mastered' | 'Proficient' | 'In Progress' | 'Needs Attention' = 'Needs Attention';
    if (pct === 100) status = 'Mastered';
    else if (pct >= 66) status = 'Proficient';
    else if (pct > 0) status = 'In Progress';

    return {
      moduleNumber: mod.id,
      moduleName: mod.name,
      totalProblems: modProblems.length,
      solvedProblems: modSolved,
      percentage: pct,
      status,
      primaryPattern: modProblems[0]?.patternName || 'Algorithmic Optimization'
    };
  });

  // Calculate Placement Readiness Score (1 to 100)
  // Baseline onboarding score is 32 (foundational engineering aptitude)
  // Each solved problem contributes proportional points
  // Modules covered and language preference give dynamic balance
  const problemPoints = (solvedCount / totalCount) * 58; // up to 58 points
  const modulesCovered = moduleMastery.filter((m) => m.solvedProblems > 0).length;
  const breadthBonus = (modulesCovered / 8) * 10; // up to 10 points
  
  let rawScore = Math.round(32 + problemPoints + breadthBonus);
  if (solvedCount === totalCount) rawScore = 100;
  else if (solvedCount === 0) rawScore = 35;
  const score = Math.min(100, Math.max(1, rawScore));

  let tier = 'Foundation Engineering Tier';
  let tierDescription = 'Solid grasp of core programming syntax with potential for rapid algorithmic growth.';
  let percentile = 45;

  if (score >= 90) {
    tier = 'Tier-1 Elite / FAANG Ready';
    tierDescription = 'Demonstrates top-percentile proficiency across advanced graph modeling, divide-and-conquer, and tight asymptotic complexity optimization.';
    percentile = 98;
  } else if (score >= 75) {
    tier = 'Product Engineering & Super-Dream Ready';
    tierDescription = 'High technical competence in data structures, two-pointer invariants, and mathematical problem-solving suited for high-growth tech firms.';
    percentile = 86;
  } else if (score >= 60) {
    tier = 'Core IT & System Specialist Ready';
    tierDescription = 'Proficient in standard data manipulations, linear traversals, and basic algorithmic patterns for competitive recruitment drives.';
    percentile = 72;
  } else if (score >= 45) {
    tier = 'Developing Software Engineer';
    tierDescription = 'Good foundation in procedural logic; ready to accelerate on advanced patterns like binary search and graph algorithms.';
    percentile = 55;
  }

  // Dynamic Strengths based on solved modules
  const strengths = [];
  const masteredOrProficient = moduleMastery.filter(m => m.percentage >= 50);

  if (masteredOrProficient.some(m => m.moduleNumber === 1) || solvedCount >= 1) {
    strengths.push({
      title: 'Graph Transit & Network Topology',
      description: 'Ability to translate real-world municipal transportation and social networks into clean adjacency lists and matrix graphs with minimal memory overhead.',
      tag: 'Graphs & BFS/DFS'
    });
  }

  if (masteredOrProficient.some(m => m.moduleNumber === 6) || solvedCount >= 4) {
    strengths.push({
      title: 'Two-Pointer & Invariant Space Reduction',
      description: 'Exceptional discipline in achieving O(1) auxiliary space by maintaining coordinated left/right pointers across palindromes and sorted array squares.',
      tag: 'Two Pointers O(1) Space'
    });
  } else {
    strengths.push({
      title: 'Algorithmic Problem Decomposition',
      description: 'Aptitude for breaking down complex real-world statements into testable input/output boundaries across C, C++, Java, and Python.',
      tag: 'Multi-Language Foundations'
    });
  }

  if (masteredOrProficient.some(m => m.moduleNumber === 4 || m.moduleNumber === 5) || solvedCount >= 8) {
    strengths.push({
      title: 'Mathematical Invariants & Number Theory',
      description: 'Strong mathematical rigor in handling LCM task synchronization, prime checkpoint sieving, and trailing zero factorials without integer overflow.',
      tag: 'Modulo & Number Theory'
    });
  } else {
    strengths.push({
      title: 'Modular Code Architecture',
      description: 'Clean separation of helper functions, input scanning, and output serialization suitable for clean code code-review standards.',
      tag: 'Production Standards'
    });
  }

  if (masteredOrProficient.some(m => m.moduleNumber === 8) || solvedCount >= 15) {
    strengths.push({
      title: 'Logarithmic Search & Divide-and-Conquer',
      description: 'Deep understanding of O(log N) binary search invariants in rotated search spaces and quick-sort in-place partitioning mechanics.',
      tag: 'Divide & Conquer'
    });
  }

  // Dynamic Weaknesses & Blind Spots based on unsolved modules
  const weaknesses = [];
  const incompleteModules = moduleMastery.filter(m => m.percentage < 60);

  if (incompleteModules.some(m => m.moduleNumber === 8)) {
    weaknesses.push({
      title: 'Rotated Monotonic Search Space Edge Cases',
      description: 'Needs reinforcement on identifying the sorted half in rotated arrays when duplicate elements or boundary pivots occur.',
      impact: 'High impact on Google & Microsoft screening rounds.'
    });
  }

  if (incompleteModules.some(m => m.moduleNumber === 7 || m.moduleNumber === 3)) {
    weaknesses.push({
      title: 'Substring Palindromic Expansion & Chunking',
      description: 'Opportunity to optimize string substring counting from naive O(N^2) to expand-around-center and rolling hash mechanisms.',
      impact: 'Frequent bottleneck in Tier-1 technical coding assessments.'
    });
  }

  if (incompleteModules.some(m => m.moduleNumber === 1)) {
    weaknesses.push({
      title: 'Dynamic Graph Route Backtracking',
      description: 'Further practice recommended in cycle detection and topological sorting in directed acyclic project dependency graphs.',
      impact: 'Essential for systems engineering and backend microservice interviews.'
    });
  }

  if (weaknesses.length === 0) {
    weaknesses.push({
      title: 'Competitive Speed Under Strict Time Limits',
      description: 'While logical accuracy is high, practicing speed rounds under 15-minute constraints will maximize placement test clearing rate.',
      impact: 'Helps in rapid online assessment (OA) ranking.'
    });
  }

  // 4-Phase Opportunity Roadmap
  const opportunityRoadmap = [
    {
      phase: 'Week 1: Core Fundamentals & Array Invariants',
      focus: 'Two Pointers, In-place Reversals, and Sliding Window',
      actionItems: [
        'Solve all Module 2 & Module 6 postclass challenges with O(1) extra space.',
        'Implement zero-sum 3-pointer checks without hashing to avoid memory allocations.',
        'Review edge-case conditions with negative values and duplicates.'
      ],
      targetCompanies: 'TCS Digital, Cognizant GenC, Infosys DSE'
    },
    {
      phase: 'Week 2: Mathematical Engineering & Bitwise Precision',
      focus: 'Sieve of Eratosthenes, Modulo Arithmetic & Prime Sieving',
      actionItems: [
        'Master the O(sqrt(N)) primality boundaries and LCM synchronization formulas.',
        'Avoid big integer overflows by applying modulo properties at every multiplication step.',
        'Complete Module 4 and 5 challenges in C++ and Python.'
      ],
      targetCompanies: 'Capgemini, Wipro Turbo, Persistent Systems'
    },
    {
      phase: 'Week 3: Advanced Divide-and-Conquer & Search',
      focus: 'Rotated Binary Search, QuickSort In-Place Partitioning & MergeSort',
      actionItems: [
        'Practice finding pivot points in shifted arrays in strictly O(log N).',
        'Implement Dutch National Flag 3-way partition for duplicate arrays.',
        'Analyze worst-case call stack depth for recursive functions.'
      ],
      targetCompanies: 'Amazon, Microsoft, Oracle, Cisco'
    },
    {
      phase: 'Week 4: Real-World Systems & Placement Mock Drives',
      focus: 'Graph Road Networks, BFS Shortest Path & Behavioral Delivery',
      actionItems: [
        'Represent sparse road networks using adjacency lists with edge weight structs.',
        'Conduct 3 timed mock coding rounds in the JIET IDE under 20-minute limits.',
        'Download and attach the QR-verified JIET Placement Certificate to LinkedIn & Resume.'
      ],
      targetCompanies: 'Google, Flipkart, Adobe, Tier-1 Product Companies'
    }
  ];

  return {
    studentName: userProfile.name || 'Student Candidate',
    rollNo: userProfile.rollNo || 'JIET-2026-REG',
    branch: userProfile.branch || 'Computer Science & Engineering',
    reportDate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    credentialId: userProfile.certificateId || `JIET-KAPIL-2026-${Math.floor(100000 + Math.random() * 900000)}`,
    score,
    tier,
    tierDescription,
    percentile,
    solvedCount,
    totalCount,
    completionRate,
    moduleMastery,
    strengths,
    weaknesses,
    opportunityRoadmap
  };
}
