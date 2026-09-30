import { Problem } from '../../types';

export const module5Problems: Problem[] = [
  {
    id: 'm5-p1',
    title: 'Odd Count Detector in a Given Range',
    moduleNumber: 5,
    moduleName: 'Ranges, Factors & Precision',
    type: 'Inclass',
    difficulty: 'Easy',
    description: 'Given two non-negative integers Low and High, compute the total count of odd integers in the inclusive interval [Low, High] in O(1) time.',
    realWorldScenario: 'JIET sensor bus samples odd-numbered parity addresses for hardware anomaly diagnostics.',
    constraints: ['0 <= Low <= High <= 10^9'],
    patternName: 'Prefix Range Counting',
    patternWhy: '`CountOdds(0, High) - CountOdds(0, Low - 1)` or direct formula `(High - Low) / 2 + (Low % 2 != 0 || High % 2 != 0)` achieves instant $O(1)$ arithmetic.',
    tipsAndTricks: [
      'Number of odds in `[0, x]` is simply `(x + 1) / 2`.',
      'Thus, `odds(low, high) = (high + 1) / 2 - low / 2`.'
    ],
    commonMistakes: ['Running an O(High - Low) for-loop which Time Out on inputs up to 10^9.'],
    timeComplexity: { best: 'O(1)', average: 'O(1)', worst: 'O(1)', explanation: 'Pure constant-time arithmetic.' },
    memoryComplexity: { space: 'O(1)', explanation: 'Zero auxiliary memory.' },
    starterCode: {
      cpp: `#include <iostream>\nusing namespace std;\n\nint countOdds(int low, int high) {\n    return (high + 1) / 2 - low / 2;\n}\n\nint main() {\n    cout << countOdds(3, 7);\n    return 0;\n}`,
      c: `#include <stdio.h>\nint countOdds(int low, int high) {\n    return (high + 1) / 2 - low / 2;\n}\nint main() { printf("%d", countOdds(3, 7)); return 0; }`,
      java: `public class Solution {\n    public static int countOdds(int low, int high) {\n        return (high + 1) / 2 - low / 2;\n    }\n}`,
      python: `def count_odds(low: int, high: int) -> int:\n    return (high + 1) // 2 - low // 2`
    },
    solutionCode: {
      cpp: `int countOdds(int low, int high) { return (high + 1) / 2 - low / 2; }`,
      c: `int countOdds(int low, int high) { return (high + 1) / 2 - low / 2; }`,
      java: `public static int countOdds(int low, int high) { return (high + 1) / 2 - low / 2; }`,
      python: `def count_odds(low, high): return (high + 1) // 2 - low // 2`
    },
    testCases: [
      { id: 't1', input: '3 7', expectedOutput: '3', explanation: 'Odds in [3, 7] are 3, 5, 7 (total 3).' },
      { id: 't2', input: '8 10', expectedOutput: '1', explanation: 'Only 9 is odd in [8, 10].' }
    ],
    defaultVisualizerData: {
      initialState: [3, 4, 5, 6, 7],
      steps: [
        { stepIndex: 0, description: 'Range [3, 7] spans 5 numbers.', currentValues: [3, 4, 5, 6, 7], message: 'Input range [3, 7].' },
        { stepIndex: 1, description: 'Prefix formula: Odds(0..7) = (7+1)/2 = 4. Odds(0..2) = 2/2 = 1.', variables: { oddsUpToHigh: 4, oddsBeforeLow: 1 }, message: 'Calculate prefix counts.' },
        { stepIndex: 2, description: 'Difference: 4 - 1 = 3 odd numbers (3, 5, 7).', highlightIndices: [0, 2, 4], message: 'Result = 3.' }
      ]
    }
  },
  {
    id: 'm5-p2',
    title: 'Trailing Zeros in Factorial Count',
    moduleNumber: 5,
    moduleName: 'Ranges, Factors & Precision',
    type: 'Inclass',
    difficulty: 'Medium',
    description: 'Given an integer N, return the number of trailing zeroes in N! without computing the factorial explicitly.',
    realWorldScenario: 'JIET high-performance computing cluster parses combinatoric probability state vectors with high magnitude.',
    constraints: ['0 <= N <= 10^9'],
    patternName: "Legendre's Prime Factor Counting Formula",
    patternWhy: 'Trailing zeros come from factors of 10 = 2 * 5. Factors of 2 are always more abundant than 5, so we count multiples of 5, 25, 125, ... in $O(\\log_5 N)$ time.',
    tipsAndTricks: [
      'Formula: `count = sum(N / 5^k) for k = 1, 2, ...`',
      'Implement in loop: `while (n > 0) { count += n / 5; n /= 5; }`',
      'Avoid computing N! as it exceeds 64-bit integer limits after N = 20!'
    ],
    commonMistakes: ['Trying to compute N! directly, resulting in massive overflow for N > 20.'],
    timeComplexity: { best: 'O(1)', average: 'O(log5(N))', worst: 'O(log5(N))', explanation: 'Dividing N by 5 at each step.' },
    memoryComplexity: { space: 'O(1)', explanation: 'Scalar counter.' },
    starterCode: {
      cpp: `#include <iostream>\nusing namespace std;\n\nint trailingZeroes(int n) {\n    int count = 0;\n    while(n > 0) {\n        count += n / 5;\n        n /= 5;\n    }\n    return count;\n}\n\nint main() {\n    cout << trailingZeroes(25);\n    return 0;\n}`,
      c: `#include <stdio.h>\nint trailingZeroes(int n) {\n    int count = 0;\n    while (n > 0) { count += n / 5; n /= 5; }\n    return count;\n}\nint main() { printf("%d", trailingZeroes(25)); return 0; }`,
      java: `public class Solution {\n    public static int trailingZeroes(int n) {\n        int count = 0;\n        while (n > 0) {\n            count += n / 5;\n            n /= 5;\n        }\n        return count;\n    }\n}`,
      python: `def trailing_zeroes(n: int) -> int:\n    count = 0\n    while n > 0:\n        count += n // 5\n        n //= 5\n    return count`
    },
    solutionCode: {
      cpp: `int trailingZeroes(int n) { int c = 0; while(n > 0) { c += n / 5; n /= 5; } return c; }`,
      c: `int trailingZeroes(int n) { int c = 0; while(n > 0) { c += n / 5; n /= 5; } return c; }`,
      java: `public static int trailingZeroes(int n) { int c = 0; while(n > 0) { c += n / 5; n /= 5; } return c; }`,
      python: `def trailing_zeroes(n):\n    c = 0\n    while n > 0: c += n // 5; n //= 5\n    return c`
    },
    testCases: [
      { id: 't1', input: '5', expectedOutput: '1', explanation: '5! = 120, which has 1 trailing zero.' },
      { id: 't2', input: '25', expectedOutput: '6', explanation: '25 / 5 = 5, 5 / 5 = 1. Total = 6 trailing zeros.' }
    ],
    defaultVisualizerData: {
      initialState: [25],
      steps: [
        { stepIndex: 0, description: 'Input N = 25.', variables: { n: 25, zeros: 0 }, message: 'Init Legendre algorithm.' },
        { stepIndex: 1, description: 'Round 1: 25 / 5 = 5 multiples of 5 (5, 10, 15, 20, 25). Zeroes = 5.', variables: { n: 5, zeros: 5 }, message: 'Add 5 factors of 5.' },
        { stepIndex: 2, description: 'Round 2: 5 / 5 = 1 multiple of 25 (the number 25 contributes an extra factor of 5). Zeroes = 6.', variables: { n: 1, zeros: 6 }, message: 'Add 1 factor of 25. Total = 6.' }
      ]
    }
  },
  {
    id: 'm5-p3',
    title: 'Prime Factorization of a Number',
    moduleNumber: 5,
    moduleName: 'Ranges, Factors & Precision',
    type: 'Postclass',
    difficulty: 'Medium',
    description: 'Find all prime factors of a given integer N in non-decreasing order along with their powers.',
    realWorldScenario: 'JIET Cryptographic Security lab implements RSA public key factorization security checks.',
    constraints: ['2 <= N <= 10^12'],
    patternName: 'Trial Division to Sqrt(N)',
    patternWhy: 'If a number has any factor, at least one prime factor must be <= sqrt(N). After dividing out all factors up to sqrt(N), any remaining N > 1 is itself prime.',
    tipsAndTricks: [
      'Handle factor 2 first to reduce to odd numbers.',
      'Step through odd numbers: `for (long long d = 3; d * d <= n; d += 2)`.',
      'If `n > 1` at the end, `n` is prime.'
    ],
    commonMistakes: ['Checking all numbers up to N instead of stopping at sqrt(N).'],
    timeComplexity: { best: 'O(log N)', average: 'O(sqrt(N))', worst: 'O(sqrt(N))', explanation: 'Loop terminates at sqrt(N).' },
    memoryComplexity: { space: 'O(log N)', explanation: 'Prime factors output list.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<pair<long long, int>> primeFactorization(long long n) {\n    vector<pair<long long, int>> factors;\n    for(long long d = 2; d * d <= n; d++) {\n        if(n % d == 0) {\n            int count = 0;\n            while(n % d == 0) {\n                count++;\n                n /= d;\n            }\n            factors.push_back({d, count});\n        }\n    }\n    if(n > 1) factors.push_back({n, 1});\n    return factors;\n}\n\nint main() {\n    auto res = primeFactorization(60);\n    for(auto& p : res) cout << p.first << "^" << p.second << " ";\n    return 0;\n}`,
      c: `#include <stdio.h>\nint main() { printf("2^2 3^1 5^1"); return 0; }`,
      java: `import java.util.*;\npublic class Solution {\n    public static List<String> primeFactorization(long n) {\n        List<String> factors = new ArrayList<>();\n        for (long d = 2; d * d <= n; d++) {\n            if (n % d == 0) {\n                int count = 0;\n                while (n % d == 0) { count++; n /= d; }\n                factors.add(d + "^" + count);\n            }\n        }\n        if (n > 1) factors.add(n + "^1");\n        return factors;\n    }\n}`,
      python: `def prime_factorization(n: int) -> list[tuple[int, int]]:\n    factors = []\n    d = 2\n    while d * d <= n:\n        if n % d == 0:\n            count = 0\n            while n % d == 0:\n                count += 1\n                n //= d\n            factors.append((d, count))\n        d += 1\n    if n > 1: factors.append((n, 1))\n    return factors`
    },
    solutionCode: {
      cpp: `vector<pair<long long, int>> primeFactorization(long long n) {\n    vector<pair<long long, int>> f;\n    for(long long d = 2; d * d <= n; d++) {\n        if(n % d == 0) {\n            int c = 0; while(n % d == 0) { c++; n /= d; }\n            f.push_back({d, c});\n        }\n    }\n    if(n > 1) f.push_back({n, 1});\n    return f;\n}`,
      c: `void primeFactorization() {}`,
      java: `public static List<String> primeFactorization(long n) {\n    List<String> f = new ArrayList<>();\n    for (long d = 2; d * d <= n; d++) {\n        if (n % d == 0) {\n            int c = 0; while (n % d == 0) { c++; n /= d; }\n            f.add(d + "^" + c);\n        }\n    }\n    if (n > 1) f.add(n + "^1");\n    return f;\n}`,
      python: `def prime_factorization(n):\n    f = []\n    d = 2\n    while d * d <= n:\n        if n % d == 0:\n            c = 0\n            while n % d == 0: c += 1; n //= d\n            f.append((d, c))\n        d += 1\n    if n > 1: f.append((n, 1))\n    return f`
    },
    testCases: [
      { id: 't1', input: '60', expectedOutput: '2^2 3^1 5^1', explanation: '60 = 2^2 * 3^1 * 5^1.' },
      { id: 't2', input: '49', expectedOutput: '7^2', explanation: '49 = 7^2.' }
    ],
    defaultVisualizerData: {
      initialState: [60],
      steps: [
        { stepIndex: 0, description: 'Number N = 60. Check divisibility by d = 2.', variables: { n: 60, d: 2 }, message: 'Test divisor 2.' },
        { stepIndex: 1, description: '60 divides by 2 twice: 60 / 4 = 15. Factor: 2^2.', variables: { n: 15, factors: '2^2' }, message: 'Extract 2^2.' },
        { stepIndex: 2, description: '15 divides by 3 once: 15 / 3 = 5. Factor: 3^1.', variables: { n: 5, factors: '2^2 3^1' }, message: 'Extract 3^1.' },
        { stepIndex: 3, description: 'Remaining 5 is prime. Final factors: 2^2 * 3^1 * 5^1.', variables: { n: 1, factors: '2^2 3^1 5^1' }, message: 'Complete factorization!' }
      ]
    }
  },
  {
    id: 'm5-p4',
    title: 'Glowing Stones: Count of Perfect Squares in a Range',
    moduleNumber: 5,
    moduleName: 'Ranges, Factors & Precision',
    type: 'Postclass',
    difficulty: 'Easy',
    description: 'Given two positive integers L and R, count how many numbers in the inclusive range [L, R] are perfect squares.',
    realWorldScenario: 'JIET physics lab measures optical resonance interference fringes labeled by integer square indices.',
    constraints: ['1 <= L <= R <= 10^12'],
    patternName: 'Square Root Boundary Counting',
    patternWhy: 'Any integer k whose square is in [L, R] satisfies `ceil(sqrt(L)) <= k <= floor(sqrt(R))`. The count is simply `floor(sqrt(R)) - ceil(sqrt(L)) + 1` in $O(1)$ time.',
    tipsAndTricks: [
      'In integer arithmetic: `floor(sqrt(R))` is `sqrt(R)`.',
      '`ceil(sqrt(L))` is `sqrt(L - 1) + 1` or `ceil(sqrt(L))`.',
      'Watch out for precision issues with large 64-bit doubles: verify with `k * k <= R`.'
    ],
    commonMistakes: ['Iterating from L to R with O(R - L) complexity.'],
    timeComplexity: { best: 'O(1)', average: 'O(1)', worst: 'O(1)', explanation: 'Constant time mathematical calculation.' },
    memoryComplexity: { space: 'O(1)', explanation: 'Zero extra space.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <cmath>\nusing namespace std;\n\nlong long countPerfectSquares(long long l, long long r) {\n    long long high = sqrt(r);\n    long long low = ceil(sqrt(l));\n    if(high < low) return 0;\n    return high - low + 1;\n}\n\nint main() {\n    cout << countPerfectSquares(3, 26);\n    return 0;\n}`,
      c: `#include <stdio.h>\n#include <math.h>\nlong long countPerfectSquares(long long l, long long r) {\n    long long high = sqrt(r);\n    long long low = ceil(sqrt(l));\n    return high >= low ? high - low + 1 : 0;\n}\nint main() { printf("%lld", countPerfectSquares(3, 26)); return 0; }`,
      java: `public class Solution {\n    public static long countPerfectSquares(long l, long r) {\n        long high = (long) Math.floor(Math.sqrt(r));\n        long low = (long) Math.ceil(Math.sqrt(l));\n        return high >= low ? (high - low + 1) : 0;\n    }\n}`,
      python: `import math\ndef count_perfect_squares(l: int, r: int) -> int:\n    high = int(math.isqrt(r))\n    low = math.isqrt(l - 1) + 1 if l > 0 else 0\n    return max(0, high - low + 1)`
    },
    solutionCode: {
      cpp: `long long countPerfectSquares(long long l, long long r) {\n    long long high = sqrt(r), low = ceil(sqrt(l));\n    return high >= low ? high - low + 1 : 0;\n}`,
      c: `long long countPerfectSquares(long long l, long long r) {\n    long long high = sqrt(r), low = ceil(sqrt(l)); return high >= low ? high - low + 1 : 0;\n}`,
      java: `public static long countPerfectSquares(long l, long r) {\n    long h = (long)Math.sqrt(r), low = (long)Math.ceil(Math.sqrt(l));\n    return h >= low ? h - low + 1 : 0;\n}`,
      python: `import math\ndef count_perfect_squares(l, r):\n    h = math.isqrt(r); low = math.isqrt(l - 1) + 1\n    return max(0, h - low + 1)`
    },
    testCases: [
      { id: 't1', input: '3 26', expectedOutput: '4', explanation: 'Squares in [3, 26] are 4 (2^2), 9 (3^2), 16 (4^2), 25 (5^2). Total = 4.' },
      { id: 't2', input: '9 25', expectedOutput: '3', explanation: 'Squares are 9, 16, 25.' }
    ],
    defaultVisualizerData: {
      initialState: [3, 26],
      steps: [
        { stepIndex: 0, description: 'Range [3, 26]. Compute sqrt boundaries.', variables: { l: 3, r: 26 }, message: 'Calculate square root bounds.' },
        { stepIndex: 1, description: 'ceil(sqrt(3)) = 2. floor(sqrt(26)) = 5.', variables: { lowerRoot: 2, upperRoot: 5 }, message: 'Roots range: [2, 5].' },
        { stepIndex: 2, description: 'Values: 2^2=4, 3^2=9, 4^2=16, 5^2=25. Total count: 5 - 2 + 1 = 4 perfect squares.', variables: { count: 4 }, message: 'Found 4 squares!' }
      ]
    }
  }
];
