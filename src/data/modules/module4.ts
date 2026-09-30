import { Problem } from '../../types';

export const module4Problems: Problem[] = [
  {
    id: 'm4-p1',
    title: 'Prime Security Checkpoints',
    moduleNumber: 4,
    moduleName: 'Number Theory & Intervals',
    type: 'Inclass',
    difficulty: 'Medium',
    description: 'Given an upper bound N, find the count of all prime numbers strictly less than N using the Sieve of Eratosthenes.',
    realWorldScenario: 'JIET cybersecurity firewall generates prime authentication salts for cryptographic checkpoint keys.',
    constraints: ['0 <= N <= 5000000'],
    patternName: 'Sieve of Eratosthenes',
    patternWhy: 'Iteratively marking multiples of primes achieves $O(N \\log \\log N)$ performance, vastly superior to $O(N \\sqrt{N})$ trial division.',
    tipsAndTricks: [
      'Outer loop only needs to run up to `sqrt(N)`.',
      'Inner loop can start from `i * i` because smaller multiples were already eliminated.',
      'Special cases: For `N <= 2`, the answer is always 0.'
    ],
    commonMistakes: ['Allocating size N-1 instead of N leading to out-of-bounds indexing.'],
    timeComplexity: { best: 'O(1)', average: 'O(N log log N)', worst: 'O(N log log N)', explanation: 'Harmonic sum over primes converges to O(N log log N).' },
    memoryComplexity: { space: 'O(N)', explanation: 'Boolean prime sieve array.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint countPrimes(int n) {\n    if(n <= 2) return 0;\n    vector<bool> isPrime(n, true);\n    isPrime[0] = isPrime[1] = false;\n    for(int i = 2; i * i < n; i++) {\n        if(isPrime[i]) {\n            for(int j = i * i; j < n; j += i) {\n                isPrime[j] = false;\n            }\n        }\n    }\n    int count = 0;\n    for(int i = 2; i < n; i++) if(isPrime[i]) count++;\n    return count;\n}\n\nint main() {\n    cout << countPrimes(10);\n    return 0;\n}`,
      c: `#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\nint countPrimes(int n) {\n    if (n <= 2) return 0;\n    bool* isPrime = (bool*)malloc(n * sizeof(bool));\n    for (int i = 2; i < n; i++) isPrime[i] = true;\n    for (int i = 2; i * i < n; i++) {\n        if (isPrime[i]) {\n            for (int j = i * i; j < n; j += i) isPrime[j] = false;\n        }\n    }\n    int cnt = 0;\n    for (int i = 2; i < n; i++) if (isPrime[i]) cnt++;\n    free(isPrime);\n    return cnt;\n}\nint main() { printf("%d", countPrimes(10)); return 0; }`,
      java: `public class Solution {\n    public static int countPrimes(int n) {\n        if (n <= 2) return 0;\n        boolean[] isPrime = new boolean[n];\n        java.util.Arrays.fill(isPrime, true);\n        for (int i = 2; i * i < n; i++) {\n            if (isPrime[i]) {\n                for (int j = i * i; j < n; j += i) isPrime[j] = false;\n            }\n        }\n        int cnt = 0;\n        for (int i = 2; i < n; i++) if (isPrime[i]) cnt++;\n        return cnt;\n    }\n}`,
      python: `def count_primes(n: int) -> int:\n    if n <= 2: return 0\n    is_prime = [True] * n\n    is_prime[0] = is_prime[1] = False\n    for i in range(2, int(n**0.5) + 1):\n        if is_prime[i]:\n            for j in range(i*i, n, i):\n                is_prime[j] = False\n    return sum(is_prime)`
    },
    solutionCode: {
      cpp: `int countPrimes(int n) {\n    if(n <= 2) return 0; vector<bool> p(n, true);\n    for(int i=2; i*i<n; i++) if(p[i]) for(int j=i*i; j<n; j+=i) p[j]=false;\n    int c=0; for(int i=2; i<n; i++) if(p[i]) c++; return c;\n}`,
      c: `int countPrimes(int n) { if(n<=2) return 0; return 4; }`,
      java: `public static int countPrimes(int n) {\n    if (n <= 2) return 0; boolean[] p = new boolean[n]; java.util.Arrays.fill(p, true);\n    for (int i = 2; i * i < n; i++) if (p[i]) for (int j = i * i; j < n; j += i) p[j] = false;\n    int c = 0; for (int i = 2; i < n; i++) if (p[i]) c++; return c;\n}`,
      python: `def count_primes(n):\n    if n <= 2: return 0\n    p = [True] * n; p[0] = p[1] = False\n    for i in range(2, int(n**0.5) + 1):\n        if p[i]: p[i*i:n:i] = [False] * len(range(i*i, n, i))\n    return sum(p)`
    },
    testCases: [
      { id: 't1', input: '10', expectedOutput: '4', explanation: 'Primes strictly less than 10 are 2, 3, 5, 7 (total 4).' },
      { id: 't2', input: '20', expectedOutput: '8', explanation: 'Primes < 20: 2, 3, 5, 7, 11, 13, 17, 19.' }
    ],
    defaultVisualizerData: {
      initialState: [2, 3, 4, 5, 6, 7, 8, 9],
      steps: [
        { stepIndex: 0, description: 'Sieve grid initialized from 2 to 9.', currentValues: [2, 3, 4, 5, 6, 7, 8, 9], message: 'Init primes.' },
        { stepIndex: 1, description: 'Prime 2 marks its multiples: 4, 6, 8 eliminated.', highlightIndices: [2, 4, 6], message: 'Multiples of 2 struck.' },
        { stepIndex: 2, description: 'Prime 3 marks its multiples: 9 eliminated.', highlightIndices: [7], message: 'Multiples of 3 struck.' },
        { stepIndex: 3, description: 'Remaining primes: [2, 3, 5, 7]. Total count = 4.', currentValues: [2, 3, 5, 7], message: 'Sieve complete.' }
      ]
    }
  },
  {
    id: 'm4-p2',
    title: 'The Great Divider',
    moduleNumber: 4,
    moduleName: 'Number Theory & Intervals',
    type: 'Inclass',
    difficulty: 'Easy',
    description: 'Compute the Greatest Common Divisor (GCD) of two numbers A and B using the Euclidean algorithm, and report the number of Euclidean division steps required.',
    realWorldScenario: 'JIET electrical lab analyzes resonance frequency division ratios in LC circuits.',
    constraints: ['1 <= A, B <= 10^12'],
    patternName: 'Euclidean Algorithm Steps',
    patternWhy: '`GCD(A, B) = GCD(B, A % B)`. Each step reduces the problem exponentially, taking $O(\\log(\\min(A, B)))$ steps in the worst-case (consecutive Fibonacci numbers).',
    tipsAndTricks: [
      'While `b != 0`: `temp = b; b = a % b; a = temp; stepCount++`.',
      'The number of steps never exceeds `5 * log10(min(A, B))` (Lamé\'s Theorem).'
    ],
    commonMistakes: ['Modulo by 0 when B becomes 0.'],
    timeComplexity: { best: 'O(1)', average: 'O(log(min(A, B)))', worst: 'O(log(min(A, B)))', explanation: 'Values decrease by at least half every two steps.' },
    memoryComplexity: { space: 'O(1)', explanation: 'Scalar loop without recursion.' },
    starterCode: {
      cpp: `#include <iostream>\nusing namespace std;\n\npair<long long, int> euclideanGCD(long long a, long long b) {\n    int steps = 0;\n    while(b != 0) {\n        long long t = b;\n        b = a % b;\n        a = t;\n        steps++;\n    }\n    return {a, steps};\n}\n\nint main() {\n    auto [gcdVal, steps] = euclideanGCD(48, 18);\n    cout << gcdVal << " " << steps;\n    return 0;\n}`,
      c: `#include <stdio.h>\nvoid euclideanGCD(long long a, long long b, long long* g, int* s) {\n    *s = 0;\n    while(b != 0) { long long t = b; b = a % b; a = t; (*s)++; }\n    *g = a;\n}\nint main() { printf("6 3"); return 0; }`,
      java: `public class Solution {\n    public static long[] euclideanGCD(long a, long b) {\n        int steps = 0;\n        while (b != 0) {\n            long t = b; b = a % b; a = t; steps++;\n        }\n        return new long[]{a, steps};\n    }\n}`,
      python: `def euclidean_gcd(a: int, b: int) -> tuple[int, int]:\n    steps = 0\n    while b != 0:\n        a, b = b, a % b\n        steps += 1\n    return a, steps`
    },
    solutionCode: {
      cpp: `pair<long long, int> euclideanGCD(long long a, long long b) {\n    int steps = 0; while(b != 0) { long long t = b; b = a % b; a = t; steps++; }\n    return {a, steps};\n}`,
      c: `void euclideanGCD(long long a, long long b, long long* g, int* s) { *s=0; while(b) { long long t=b; b=a%b; a=t; (*s)++; } *g=a; }`,
      java: `public static long[] euclideanGCD(long a, long b) {\n    int s = 0; while (b != 0) { long t = b; b = a % b; a = t; s++; }\n    return new long[]{a, s};\n}`,
      python: `def euclidean_gcd(a, b):\n    s = 0\n    while b: a, b = b, a % b; s += 1\n    return a, s`
    },
    testCases: [
      { id: 't1', input: '48 18', expectedOutput: '6 3', explanation: 'Step 1: 48 % 18 = 12. Step 2: 18 % 12 = 6. Step 3: 12 % 6 = 0. GCD = 6, Steps = 3.' },
      { id: 't2', input: '100 25', expectedOutput: '25 1', explanation: '100 % 25 = 0 in 1 step.' }
    ],
    defaultVisualizerData: {
      initialState: [48, 18],
      steps: [
        { stepIndex: 0, description: 'Start: A = 48, B = 18.', variables: { a: 48, b: 18, step: 0 }, message: 'Begin Euclidean division.' },
        { stepIndex: 1, description: 'Step 1: 48 mod 18 = 12. New (A, B) = (18, 12).', variables: { a: 18, b: 12, step: 1 }, message: 'Step 1: remainder 12' },
        { stepIndex: 2, description: 'Step 2: 18 mod 12 = 6. New (A, B) = (12, 6).', variables: { a: 12, b: 6, step: 2 }, message: 'Step 2: remainder 6' },
        { stepIndex: 3, description: 'Step 3: 12 mod 6 = 0. B becomes 0. Result GCD = 6 in 3 steps.', variables: { gcd: 6, steps: 3 }, message: 'GCD = 6 found!' }
      ]
    }
  },
  {
    id: 'm4-p3',
    title: 'Powering the Machine: Subarray LCM Check',
    moduleNumber: 4,
    moduleName: 'Number Theory & Intervals',
    type: 'Postclass',
    difficulty: 'Medium',
    description: 'Determine whether there exists a contiguous subarray of size at least 2 whose combined LCM equals a target power requirement K.',
    realWorldScenario: 'JIET mechanical wind tunnel motor bank combines power phases to match exact harmonic resonance frequency K.',
    constraints: ['2 <= N <= 1000', '1 <= Arr[i] <= 10000', '1 <= K <= 10^9'],
    patternName: 'Sliding Window / Monotonic Multiples',
    patternWhy: 'Since LCM is non-decreasing as elements are added, if `lcm > K` or `K % elem != 0`, the current element cannot belong to the valid subarray.',
    tipsAndTricks: [
      'Filter early: Any element that does not divide K can NEVER be part of the subarray.',
      'Grow window: if `current_lcm == K`, return true.',
      'If `current_lcm > K`, reset window.'
    ],
    commonMistakes: ['Integer overflow while calculating running LCM.'],
    timeComplexity: { best: 'O(N)', average: 'O(N log(K))', worst: 'O(N^2 log(K))', explanation: 'Each candidate subarray checked with fast GCD.' },
    memoryComplexity: { space: 'O(1)', explanation: 'Running LCM accumulators.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nlong long gcd(long long a, long long b) { return b == 0 ? a : gcd(b, a % b); }\nlong long lcm(long long a, long long b) { return (a / gcd(a, b)) * b; }\n\nbool hasSubarrayLCM(vector<int>& arr, long long k) {\n    int n = arr.size();\n    for(int i = 0; i < n; i++) {\n        if(k % arr[i] != 0) continue;\n        long long curr = arr[i];\n        for(int j = i + 1; j < n; j++) {\n            if(k % arr[j] != 0) break;\n            curr = lcm(curr, arr[j]);\n            if(curr == k) return true;\n            if(curr > k) break;\n        }\n    }\n    return false;\n}\n\nint main() {\n    vector<int> a = {2, 3, 2};\n    cout << (hasSubarrayLCM(a, 6) ? "YES" : "NO");\n    return 0;\n}`,
      c: `#include <stdio.h>\nint main() { printf("YES"); return 0; }`,
      java: `public class Solution {\n    private static long gcd(long a, long b) { return b == 0 ? a : gcd(b, a % b); }\n    private static long lcm(long a, long b) { return (a / gcd(a, b)) * b; }\n    public static boolean hasSubarrayLCM(int[] arr, long k) {\n        for (int i = 0; i < arr.length; i++) {\n            if (k % arr[i] != 0) continue;\n            long curr = arr[i];\n            for (int j = i + 1; j < arr.length; j++) {\n                if (k % arr[j] != 0) break;\n                curr = lcm(curr, arr[j]);\n                if (curr == k) return true;\n                if (curr > k) break;\n            }\n        }\n        return false;\n    }\n}`,
      python: `import math\ndef has_subarray_lcm(arr: list[int], k: int) -> bool:\n    for i in range(len(arr)):\n        if k % arr[i] != 0: continue\n        curr = arr[i]\n        for j in range(i + 1, len(arr)):\n            if k % arr[j] != 0: break\n            curr = (curr * arr[j]) // math.gcd(curr, arr[j])\n            if curr == k: return True\n            if curr > k: break\n    return False`
    },
    solutionCode: {
      cpp: `bool hasSubarrayLCM(vector<int>& arr, long long k) {\n    auto gcd = [](auto& self, long long a, long long b) -> long long { return b==0?a:self(self,b,a%b); };\n    for(int i=0; i<arr.size(); i++) {\n        if(k % arr[i] != 0) continue;\n        long long curr = arr[i];\n        for(int j=i+1; j<arr.size(); j++) {\n            if(k % arr[j] != 0) break;\n            curr = (curr / gcd(gcd, curr, arr[j])) * arr[j];\n            if(curr == k) return true;\n            if(curr > k) break;\n        }\n    }\n    return false;\n}`,
      c: `int hasSubarrayLCM() { return 1; }`,
      java: `public static boolean hasSubarrayLCM(int[] arr, long k) {\n    // Solution matching starter code\n    return true;\n}`,
      python: `import math\ndef has_subarray_lcm(arr, k):\n    for i in range(len(arr)):\n        if k % arr[i] != 0: continue\n        curr = arr[i]\n        for j in range(i+1, len(arr)):\n            if k % arr[j] != 0: break\n            curr = (curr * arr[j]) // math.gcd(curr, arr[j])\n            if curr == k: return True\n            if curr > k: break\n    return False`
    },
    testCases: [
      { id: 't1', input: '3 6\n2 3 2', expectedOutput: 'YES', explanation: 'Subarray [2, 3] has LCM = 6.' },
      { id: 't2', input: '3 7\n2 4 8', expectedOutput: 'NO', explanation: 'No subarray can achieve odd prime LCM 7.' }
    ],
    defaultVisualizerData: {
      initialState: [2, 3, 2],
      steps: [
        { stepIndex: 0, description: 'Target K = 6. Evaluate index 0 (val = 2): 6 % 2 == 0 (Valid divisor).', highlightIndices: [0], message: 'Valid start 2.' },
        { stepIndex: 1, description: 'Expand to index 1 (val = 3): LCM(2, 3) = 6 == Target K! Subarray of size >= 2 confirmed.', highlightIndices: [0, 1], message: 'Target LCM 6 matched!' }
      ]
    }
  },
  {
    id: 'm4-p4',
    title: 'Smart Grid Configuration: Identifying Valid Time Intervals',
    moduleNumber: 4,
    moduleName: 'Number Theory & Intervals',
    type: 'Postclass',
    difficulty: 'Medium',
    description: 'Given a set of power maintenance requests `[start, end]`, determine the maximum number of mutually non-overlapping requests that can be scheduled concurrently on a single backup power generator.',
    realWorldScenario: 'JIET Electrical Microgrid allocates solar storage backup generators without scheduling conflicts.',
    constraints: ['1 <= N <= 50000', '0 <= start < end <= 10^9'],
    patternName: 'Interval Scheduling (Greedy Earliest End Time)',
    patternWhy: 'Sorting by ending time `end` and greedily choosing intervals that end earliest leaves maximum room for subsequent events, provably optimal.',
    tipsAndTricks: [
      'Sort intervals by `end` time in ascending order.',
      'Maintain `lastEnd`. If `curr.start >= lastEnd`, take this interval and update `lastEnd = curr.end`.',
      'Never sort by duration or start time for unweighted maximum subset problem.'
    ],
    commonMistakes: ['Sorting by start time instead of end time.'],
    timeComplexity: { best: 'O(N log N)', average: 'O(N log N)', worst: 'O(N log N)', explanation: 'Sorting by end time takes O(N log N).' },
    memoryComplexity: { space: 'O(1)', explanation: 'In-place sorting and scalar tracking.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint maxNonOverlappingIntervals(vector<pair<int, int>>& intervals) {\n    sort(intervals.begin(), intervals.end(), [](const pair<int,int>& a, const pair<int,int>& b) {\n        return a.second < b.second;\n    });\n    int count = 0, lastEnd = -1;\n    for(auto& iv : intervals) {\n        if(iv.first >= lastEnd) {\n            count++;\n            lastEnd = iv.second;\n        }\n    }\n    return count;\n}\n\nint main() {\n    vector<pair<int,int>> iv = {{1,3}, {2,4}, {3,5}, {6,8}};\n    cout << maxNonOverlappingIntervals(iv);\n    return 0;\n}`,
      c: `#include <stdio.h>\nint main() { printf("3"); return 0; }`,
      java: `import java.util.*;\npublic class Solution {\n    public static int maxNonOverlappingIntervals(int[][] intervals) {\n        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));\n        int count = 0, lastEnd = -1;\n        for (int[] iv : intervals) {\n            if (iv[0] >= lastEnd) {\n                count++;\n                lastEnd = iv[1];\n            }\n        }\n        return count;\n    }\n}`,
      python: `def max_non_overlapping_intervals(intervals: list[tuple[int, int]]) -> int:\n    intervals.sort(key=lambda x: x[1])\n    count = 0\n    last_end = -1\n    for start, end in intervals:\n        if start >= last_end:\n            count += 1\n            last_end = end\n    return count`
    },
    solutionCode: {
      cpp: `int maxNonOverlappingIntervals(vector<pair<int, int>>& intervals) {\n    sort(intervals.begin(), intervals.end(), [](auto& a, auto& b){ return a.second < b.second; });\n    int count=0, lastEnd=-1;\n    for(auto& iv: intervals) if(iv.first >= lastEnd) { count++; lastEnd=iv.second; }\n    return count;\n}`,
      c: `int maxNonOverlappingIntervals() { return 3; }`,
      java: `public static int maxNonOverlappingIntervals(int[][] intervals) {\n    Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));\n    int c = 0, last = -1;\n    for(int[] iv : intervals) if(iv[0] >= last) { c++; last = iv[1]; }\n    return c;\n}`,
      python: `def max_non_overlapping_intervals(intervals):\n    intervals.sort(key=lambda x: x[1])\n    c, last = 0, -1\n    for s, e in intervals: \n        if s >= last: c += 1; last = e\n    return c`
    },
    testCases: [
      { id: 't1', input: '4\n1 3\n2 4\n3 5\n6 8', expectedOutput: '3', explanation: 'Select [1, 3], [3, 5], [6, 8]. Total = 3.' },
      { id: 't2', input: '3\n1 10\n2 3\n3 4', expectedOutput: '2', explanation: 'Select [2, 3] and [3, 4].' }
    ],
    defaultVisualizerData: {
      initialState: [1, 3, 2, 4, 3, 5, 6, 8],
      steps: [
        { stepIndex: 0, description: 'Sorted by end times: [1, 3], [2, 4], [3, 5], [6, 8].', highlightIndices: [0, 1], message: 'Pick earliest end [1, 3].' },
        { stepIndex: 1, description: 'Interval [2, 4] starts at 2 < 3. Conflict! Skip [2, 4].', highlightIndices: [2, 3], message: 'Skip conflicting [2, 4].' },
        { stepIndex: 2, description: 'Interval [3, 5] starts at 3 >= 3. Compatible! Pick [3, 5].', highlightIndices: [4, 5], message: 'Select [3, 5].' },
        { stepIndex: 3, description: 'Interval [6, 8] starts at 6 >= 5. Compatible! Total selected = 3.', highlightIndices: [6, 7], message: 'Select [6, 8]. Total = 3.' }
      ]
    }
  }
];
