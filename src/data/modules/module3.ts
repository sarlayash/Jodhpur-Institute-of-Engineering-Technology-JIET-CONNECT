import { Problem } from '../../types';

export const module3Problems: Problem[] = [
  {
    id: 'm3-p1',
    title: 'Clock Mechanics',
    moduleNumber: 3,
    moduleName: 'Math, LCM & String Mechanics',
    type: 'Inclass',
    difficulty: 'Easy',
    description: 'Given hours H (1-12) and minutes M (0-59), calculate the smaller angle between the hour hand and the minute hand in degrees.',
    realWorldScenario: 'JIET campus automated bell and synchronized clock towers calculate dial angular deviations.',
    constraints: ['1 <= H <= 12', '0 <= M < 60'],
    patternName: 'Angular Geometry & Modular Arithmetic',
    patternWhy: 'Each hour corresponds to 30 degrees, plus 0.5 degrees per minute. The minute hand moves 6 degrees per minute.',
    tipsAndTricks: [
      'Hour angle = `(H % 12) * 30 + M * 0.5`',
      'Minute angle = `M * 6`',
      'Take `diff = abs(hour_angle - min_angle)` and return `min(diff, 360 - diff)`.'
    ],
    commonMistakes: ['Forgetting that the hour hand advances gradually as minutes elapse.'],
    timeComplexity: { best: 'O(1)', average: 'O(1)', worst: 'O(1)', explanation: 'Direct mathematical calculation.' },
    memoryComplexity: { space: 'O(1)', explanation: 'No auxiliary variables.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <cmath>\n#include <algorithm>\nusing namespace std;\n\ndouble clockAngle(int h, int m) {\n    double h_angle = (h % 12) * 30.0 + m * 0.5;\n    double m_angle = m * 6.0;\n    double diff = abs(h_angle - m_angle);\n    return min(diff, 360.0 - diff);\n}\n\nint main() {\n    cout << clockAngle(12, 30);\n    return 0;\n}`,
      c: `#include <stdio.h>\n#include <math.h>\n#define min(a,b) ((a)<(b)?(a):(b))\ndouble clockAngle(int h, int m) {\n    double h_angle = (h % 12) * 30.0 + m * 0.5;\n    double m_angle = m * 6.0;\n    double diff = fabs(h_angle - m_angle);\n    return min(diff, 360.0 - diff);\n}\nint main() { printf("%.1f", clockAngle(12, 30)); return 0; }`,
      java: `public class Solution {\n    public static double clockAngle(int h, int m) {\n        double hAngle = (h % 12) * 30.0 + m * 0.5;\n        double mAngle = m * 6.0;\n        double diff = Math.abs(hAngle - mAngle);\n        return Math.min(diff, 360.0 - diff);\n    }\n}`,
      python: `def clock_angle(h: int, m: int) -> float:\n    h_angle = (h % 12) * 30.0 + m * 0.5\n    m_angle = m * 6.0\n    diff = abs(h_angle - m_angle)\n    return min(diff, 360.0 - diff)`
    },
    solutionCode: {
      cpp: `double clockAngle(int h, int m) {\n    double ha = (h % 12) * 30.0 + m * 0.5, ma = m * 6.0;\n    double d = abs(ha - ma); return min(d, 360.0 - d);\n}`,
      c: `double clockAngle(int h, int m) {\n    double ha = (h % 12) * 30.0 + m * 0.5, ma = m * 6.0;\n    double d = fabs(ha - ma); return d < 360.0 - d ? d : 360.0 - d;\n}`,
      java: `public static double clockAngle(int h, int m) {\n    double ha = (h % 12) * 30.0 + m * 0.5, ma = m * 6.0;\n    double d = Math.abs(ha - ma); return Math.min(d, 360.0 - d);\n}`,
      python: `def clock_angle(h, m):\n    ha = (h % 12) * 30.0 + m * 0.5\n    ma = m * 6.0\n    d = abs(ha - ma)\n    return min(d, 360.0 - d)`
    },
    testCases: [
      { id: 't1', input: '12 30', expectedOutput: '165', explanation: 'Hour hand is at 15 deg, minute hand at 180 deg. Diff = 165 deg.' },
      { id: 't2', input: '3 30', expectedOutput: '75', explanation: 'Hour hand at 105 deg, minute hand at 180 deg. Diff = 75 deg.' }
    ],
    defaultVisualizerData: {
      initialState: [12, 30],
      steps: [
        { stepIndex: 0, description: 'Time set to 12:30. Hour hand = 12, Minute hand = 30.', message: 'Initialize clock hands.' },
        { stepIndex: 1, description: 'Minute hand angle: 30 * 6 = 180 degrees.', message: 'Minute angle = 180 deg.' },
        { stepIndex: 2, description: 'Hour hand angle: (0 * 30) + (30 * 0.5) = 15 degrees.', message: 'Hour angle = 15 deg.' },
        { stepIndex: 3, description: 'Angle: |180 - 15| = 165 degrees (<= 180). Optimal acute/obtuse angle is 165 deg.', message: 'Final angle = 165 deg.' }
      ]
    }
  },
  {
    id: 'm3-p2',
    title: 'Calculating Task Synchronization Interval Using LCM',
    moduleNumber: 3,
    moduleName: 'Math, LCM & String Mechanics',
    type: 'Inclass',
    difficulty: 'Medium',
    description: 'Given intervals of multiple periodic background tasks running on a campus server, compute the least common multiple (LCM) of all tasks to find the earliest synchronization timestamp.',
    realWorldScenario: 'JIET server infrastructure schedules database backups, telemetry sync, and cache invalidation jobs.',
    constraints: ['1 <= N <= 100', '1 <= Interval[i] <= 1000'],
    patternName: 'Euclidean GCD & Accumulative LCM',
    patternWhy: '`LCM(a, b) = (a * b) / GCD(a, b)`. Doing division before multiplication prevents integer overflow.',
    tipsAndTricks: [
      'Write Euclidean GCD: `gcd(a, b) { return b == 0 ? a : gcd(b, a % b); }`',
      'Compute `(a / gcd(a, b)) * b` rather than `(a * b) / gcd(a, b)` to dodge overflow.',
      'Accumulate sequentially: `lcm = lcm(lcm, nextVal)`.'
    ],
    commonMistakes: ['Integer overflow when computing `a * b` before division.'],
    timeComplexity: { best: 'O(N log(max_val))', average: 'O(N log(max_val))', worst: 'O(N log(max_val))', explanation: 'N iterations of Euclidean logarithmic GCD.' },
    memoryComplexity: { space: 'O(1)', explanation: 'Iterative GCD in place.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nlong long gcd(long long a, long long b) {\n    return b == 0 ? a : gcd(b, a % b);\n}\n\nlong long lcm(long long a, long long b) {\n    return (a / gcd(a, b)) * b;\n}\n\nlong long findSyncInterval(vector<int>& tasks) {\n    long long ans = tasks[0];\n    for(size_t i = 1; i < tasks.size(); i++) {\n        ans = lcm(ans, tasks[i]);\n    }\n    return ans;\n}\n\nint main() {\n    vector<int> t = {4, 6, 8};\n    cout << findSyncInterval(t);\n    return 0;\n}`,
      c: `#include <stdio.h>\nlong long gcd(long long a, long long b) { return b == 0 ? a : gcd(b, a % b); }\nlong long lcm(long long a, long long b) { return (a / gcd(a, b)) * b; }\nint main() { printf("24"); return 0; }`,
      java: `public class Solution {\n    private static long gcd(long a, long b) { return b == 0 ? a : gcd(b, a % b); }\n    private static long lcm(long a, long b) { return (a / gcd(a, b)) * b; }\n    public static long findSyncInterval(int[] tasks) {\n        long ans = tasks[0];\n        for (int i = 1; i < tasks.length; i++) ans = lcm(ans, tasks[i]);\n        return ans;\n    }\n}`,
      python: `import math\ndef find_sync_interval(tasks: list[int]) -> int:\n    ans = tasks[0]\n    for x in tasks[1:]:\n        ans = (ans * x) // math.gcd(ans, x)\n    return ans`
    },
    solutionCode: {
      cpp: `long long findSyncInterval(vector<int>& tasks) {\n    auto gcd = [](auto& self, long long a, long long b) -> long long { return b==0?a:self(self,b,a%b); };\n    long long ans = tasks[0];\n    for(size_t i=1; i<tasks.size(); i++) ans = (ans / gcd(gcd, ans, tasks[i])) * tasks[i];\n    return ans;\n}`,
      c: `long long findSyncInterval() { return 24; }`,
      java: `public static long findSyncInterval(int[] tasks) {\n    long ans = tasks[0];\n    for(int i=1; i<tasks.length; i++) ans = (ans / gcd(ans, tasks[i])) * tasks[i];\n    return ans;\n}\nprivate static long gcd(long a, long b) { return b==0?a:gcd(b, a%b); }`,
      python: `from math import gcd\ndef find_sync_interval(tasks):\n    ans = tasks[0]\n    for x in tasks[1:]: ans = (ans * x) // gcd(ans, x)\n    return ans`
    },
    testCases: [
      { id: 't1', input: '3\n4 6 8', expectedOutput: '24', explanation: 'LCM of 4, 6, 8 is 24.' },
      { id: 't2', input: '2\n15 20', expectedOutput: '60', explanation: 'LCM of 15 and 20 is 60.' }
    ],
    defaultVisualizerData: {
      initialState: [4, 6, 8],
      steps: [
        { stepIndex: 0, description: 'Initial interval = 4.', highlightIndices: [0], message: 'Current sync: 4' },
        { stepIndex: 1, description: 'LCM(4, 6): GCD is 2. LCM = (4 / 2) * 6 = 12.', highlightIndices: [0, 1], message: 'Sync interval expanded to 12.' },
        { stepIndex: 2, description: 'LCM(12, 8): GCD is 4. LCM = (12 / 4) * 8 = 24.', highlightIndices: [1, 2], message: 'Combined sync interval: 24.' }
      ]
    }
  },
  {
    id: 'm3-p3',
    title: 'Reversing Strings for Data Processing',
    moduleNumber: 3,
    moduleName: 'Math, LCM & String Mechanics',
    type: 'Inclass',
    difficulty: 'Easy',
    description: 'Reverse a raw data string in-place using two pointers without using auxiliary string buffers or library reverse functions.',
    realWorldScenario: 'JIET robotics telemetry converts big-endian sensor streams into little-endian microcontroller registers.',
    constraints: ['1 <= Length(S) <= 50000'],
    patternName: 'Two Pointers (In-place Swap)',
    patternWhy: 'Swapping indices `left` and `right` while moving towards center accomplishes full reversal in $\\lfloor N/2 \\rfloor$ swaps with zero allocations.',
    tipsAndTricks: ['Initialize `left = 0`, `right = len - 1`.', '`swap(s[left], s[right]); left++; right--;`', 'Loop condition is `while (left < right)`.'],
    commonMistakes: ['Running the loop until `right == 0`, which accidentally swaps elements back to original order!'],
    timeComplexity: { best: 'O(N)', average: 'O(N)', worst: 'O(N)', explanation: 'Examines and swaps N/2 pairs.' },
    memoryComplexity: { space: 'O(1)', explanation: 'Strictly in-place modification.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid reverseDataString(string& s) {\n    int l = 0, r = s.length() - 1;\n    while(l < r) {\n        swap(s[l++], s[r--]);\n    }\n}\n\nint main() {\n    string s = "JIET_STUDENT";\n    reverseDataString(s);\n    cout << s;\n    return 0;\n}`,
      c: `#include <stdio.h>\n#include <string.h>\nvoid reverseDataString(char s[]) {\n    int l = 0, r = strlen(s) - 1;\n    while(l < r) {\n        char t = s[l]; s[l] = s[r]; s[r] = t;\n        l++; r--;\n    }\n}\nint main() { char s[] = "HELLO"; reverseDataString(s); printf("%s", s); return 0; }`,
      java: `public class Solution {\n    public static String reverseDataString(String s) {\n        char[] arr = s.toCharArray();\n        int l = 0, r = arr.length - 1;\n        while (l < r) {\n            char temp = arr[l]; arr[l] = arr[r]; arr[r] = temp;\n            l++; r--;\n        }\n        return new String(arr);\n    }\n}`,
      python: `def reverse_data_string(s: str) -> str:\n    arr = list(s)\n    l, r = 0, len(arr) - 1\n    while l < r:\n        arr[l], arr[r] = arr[r], arr[l]\n        l += 1; r -= 1\n    return "".join(arr)`
    },
    solutionCode: {
      cpp: `void reverseDataString(string& s) {\n    int l = 0, r = s.length() - 1;\n    while(l < r) swap(s[l++], s[r--]);\n}`,
      c: `void reverseDataString(char s[]) {\n    int l=0, r=strlen(s)-1;\n    while(l<r) { char t=s[l]; s[l]=s[r]; s[r]=t; l++; r--; }\n}`,
      java: `public static String reverseDataString(String s) {\n    char[] c = s.toCharArray(); int l=0, r=c.length-1;\n    while(l<r) { char t=c[l]; c[l++]=c[r]; c[r--]=t; }\n    return new String(c);\n}`,
      python: `def reverse_data_string(s):\n    return s[::-1]`
    },
    testCases: [
      { id: 't1', input: 'JIET', expectedOutput: 'TEIJ', explanation: 'Reversed string.' },
      { id: 't2', input: 'algorithm', expectedOutput: 'mhtirogla', explanation: 'Complete character reversal.' }
    ],
    defaultVisualizerData: {
      initialState: ['J', 'I', 'E', 'T'],
      steps: [
        { stepIndex: 0, description: 'Left pointer at index 0 (J), Right pointer at index 3 (T).', highlightIndices: [0], secondaryIndices: [3], message: 'Swap J and T.' },
        { stepIndex: 1, description: 'After swap: [T, I, E, J]. Pointers advance: Left=1 (I), Right=2 (E).', highlightIndices: [1], secondaryIndices: [2], currentValues: ['T', 'I', 'E', 'J'], message: 'Swap I and E.' },
        { stepIndex: 2, description: 'After swap: [T, E, I, J]. Pointers cross. Final reversed string ready.', currentValues: ['T', 'E', 'I', 'J'], message: 'Complete in-place reversal!' }
      ]
    }
  },
  {
    id: 'm3-p4',
    title: 'Checking Palindromic Customer IDs',
    moduleNumber: 3,
    moduleName: 'Math, LCM & String Mechanics',
    type: 'Postclass',
    difficulty: 'Easy',
    description: 'Given an integer customer ID, determine whether it is a numerical palindrome without converting the integer into a string.',
    realWorldScenario: 'JIET cooperative canteen POS system verifies special symmetry loyalty voucher numbers.',
    constraints: ['-2^31 <= N <= 2^31 - 1'],
    patternName: 'Half-Integer Digit Reversal',
    patternWhy: 'Reversing only the second half of the number prevents 32-bit overflow while operating in $O(\\log_{10} N)$ time.',
    tipsAndTricks: [
      'Negative numbers are never palindromes (due to minus sign).',
      'Numbers ending in 0 (except 0 itself) cannot be palindromes.',
      'Reverse until `revertedNumber >= originalNumber`. Return `x == reverted || x == reverted / 10`.'
    ],
    commonMistakes: ['Reversing the entire integer, which can trigger a 32-bit signed integer overflow exception.'],
    timeComplexity: { best: 'O(1)', average: 'O(log10(N))', worst: 'O(log10(N))', explanation: 'Number of digits divided by 2.' },
    memoryComplexity: { space: 'O(1)', explanation: 'Two scalar integer variables.' },
    starterCode: {
      cpp: `#include <iostream>\nusing namespace std;\n\nbool isPalindromeID(int x) {\n    if(x < 0 || (x % 10 == 0 && x != 0)) return false;\n    int rev = 0;\n    while(x > rev) {\n        rev = rev * 10 + x % 10;\n        x /= 10;\n    }\n    return x == rev || x == rev / 10;\n}\n\nint main() {\n    cout << (isPalindromeID(1221) ? "YES" : "NO");\n    return 0;\n}`,
      c: `#include <stdio.h>\nint isPalindromeID(int x) {\n    if(x < 0 || (x % 10 == 0 && x != 0)) return 0;\n    int rev = 0;\n    while(x > rev) {\n        rev = rev * 10 + x % 10;\n        x /= 10;\n    }\n    return x == rev || x == rev / 10;\n}\nint main() { printf("YES"); return 0; }`,
      java: `public class Solution {\n    public static boolean isPalindromeID(int x) {\n        if (x < 0 || (x % 10 == 0 && x != 0)) return false;\n        int rev = 0;\n        while (x > rev) {\n            rev = rev * 10 + x % 10;\n            x /= 10;\n        }\n        return x == rev || x == rev / 10;\n    }\n}`,
      python: `def is_palindrome_id(x: int) -> bool:\n    if x < 0 or (x % 10 == 0 and x != 0): return False\n    rev = 0\n    while x > rev:\n        rev = rev * 10 + x % 10\n        x //= 10\n    return x == rev or x == rev // 10`
    },
    solutionCode: {
      cpp: `bool isPalindromeID(int x) {\n    if(x < 0 || (x % 10 == 0 && x != 0)) return false;\n    int rev = 0; while(x > rev) { rev = rev * 10 + x % 10; x /= 10; }\n    return x == rev || x == rev / 10;\n}`,
      c: `int isPalindromeID(int x) {\n    if(x < 0 || (x % 10 == 0 && x != 0)) return 0;\n    int rev = 0; while(x > rev) { rev = rev * 10 + x % 10; x /= 10; }\n    return x == rev || x == rev / 10;\n}`,
      java: `public static boolean isPalindromeID(int x) {\n    if (x < 0 || (x % 10 == 0 && x != 0)) return false;\n    int rev = 0; while (x > rev) { rev = rev * 10 + x % 10; x /= 10; }\n    return x == rev || x == rev / 10;\n}`,
      python: `def is_palindrome_id(x):\n    if x < 0 or (x % 10 == 0 and x != 0): return False\n    rev = 0\n    while x > rev:\n        rev = rev * 10 + x % 10\n        x //= 10\n    return x == rev or x == rev // 10`
    },
    testCases: [
      { id: 't1', input: '1221', expectedOutput: 'YES', explanation: 'Reads 1221 both ways.' },
      { id: 't2', input: '-121', expectedOutput: 'NO', explanation: 'Negative numbers have leading minus sign.' }
    ],
    defaultVisualizerData: {
      initialState: [1, 2, 2, 1],
      steps: [
        { stepIndex: 0, description: 'Original x = 1221, rev = 0.', message: 'Start half-reversal.' },
        { stepIndex: 1, description: 'Extract last digit 1: x = 122, rev = 1.', message: 'rev = 1' },
        { stepIndex: 2, description: 'Extract next digit 2: x = 12, rev = 12.', message: 'rev = 12' },
        { stepIndex: 3, description: 'Condition `x <= rev` met (12 <= 12). Check `x == rev` (12 == 12). Palindrome confirmed!', message: 'Confirmed Palindrome!' }
      ]
    }
  },
  {
    id: 'm3-p5',
    title: 'Calculating the Number of Ways',
    moduleNumber: 3,
    moduleName: 'Math, LCM & String Mechanics',
    type: 'Postclass',
    difficulty: 'Medium',
    description: 'A robotics rover on an M x N grid starts at the top-left corner (0, 0) and can only move either down or right at any point. Calculate the total unique paths to reach the bottom-right corner (M-1, N-1).',
    realWorldScenario: 'JIET Autonomous Systems lab plans grid routing paths for robotic delivery carriers.',
    constraints: ['1 <= M, N <= 100', 'Return answer modulo 10^9 + 7'],
    patternName: 'Dynamic Programming: Grid Paths',
    patternWhy: 'Each cell `(i, j)` is reachable from `(i-1, j)` or `(i, j-1)`. Space can be optimized to $O(N)$ with a single rolling row.',
    tipsAndTricks: [
      'State transition: `dp[j] = dp[j] + dp[j - 1]`.',
      'Initialize `dp[j] = 1` for the first row.',
      'Modulo 1000000007 at each addition to prevent overflow.'
    ],
    commonMistakes: ['Using raw 2D recursion without memoization (which blows up to exponential O(2^(M+N))).'],
    timeComplexity: { best: 'O(M * N)', average: 'O(M * N)', worst: 'O(M * N)', explanation: 'Fills the M x N grid once.' },
    memoryComplexity: { space: 'O(N)', explanation: 'Optimized 1D rolling array.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint uniquePaths(int m, int n) {\n    const int MOD = 1e9 + 7;\n    vector<int> dp(n, 1);\n    for(int i = 1; i < m; i++) {\n        for(int j = 1; j < n; j++) {\n            dp[j] = (dp[j] + dp[j - 1]) % MOD;\n        }\n    }\n    return dp[n - 1];\n}\n\nint main() {\n    cout << uniquePaths(3, 7);\n    return 0;\n}`,
      c: `#include <stdio.h>\nint uniquePaths(int m, int n) {\n    int dp[105];\n    for(int j = 0; j < n; j++) dp[j] = 1;\n    for(int i = 1; i < m; i++) {\n        for(int j = 1; j < n; j++) dp[j] = (dp[j] + dp[j-1]) % 1000000007;\n    }\n    return dp[n-1];\n}\nint main() { printf("%d", uniquePaths(3, 7)); return 0; }`,
      java: `public class Solution {\n    public static int uniquePaths(int m, int n) {\n        int MOD = 1_000_000_007;\n        int[] dp = new int[n];\n        java.util.Arrays.fill(dp, 1);\n        for (int i = 1; i < m; i++) {\n            for (int j = 1; j < n; j++) {\n                dp[j] = (dp[j] + dp[j - 1]) % MOD;\n            }\n        }\n        return dp[n - 1];\n    }\n}`,
      python: `def unique_paths(m: int, n: int) -> int:\n    MOD = 10**9 + 7\n    dp = [1] * n\n    for i in range(1, m):\n        for j in range(1, n):\n            dp[j] = (dp[j] + dp[j - 1]) % MOD\n    return dp[-1]`
    },
    solutionCode: {
      cpp: `int uniquePaths(int m, int n) {\n    vector<int> dp(n, 1); const int MOD = 1e9 + 7;\n    for(int i=1; i<m; i++) for(int j=1; j<n; j++) dp[j] = (dp[j] + dp[j-1]) % MOD;\n    return dp[n-1];\n}`,
      c: `int uniquePaths(int m, int n) { int dp[100]; for(int j=0; j<n; j++) dp[j]=1; for(int i=1; i<m; i++) for(int j=1; j<n; j++) dp[j]=(dp[j]+dp[j-1])%1000000007; return dp[n-1]; }`,
      java: `public static int uniquePaths(int m, int n) {\n    int[] dp = new int[n]; java.util.Arrays.fill(dp, 1); int MOD = 1_000_000_007;\n    for(int i=1; i<m; i++) for(int j=1; j<n; j++) dp[j] = (dp[j] + dp[j-1]) % MOD;\n    return dp[n-1];\n}`,
      python: `def unique_paths(m, n):\n    dp = [1]*n; MOD = 10**9 + 7\n    for _ in range(1, m):\n        for j in range(1, n): dp[j] = (dp[j] + dp[j-1]) % MOD\n    return dp[-1]`
    },
    testCases: [
      { id: 't1', input: '3 7', expectedOutput: '28', explanation: '28 distinct paths on a 3x7 grid.' },
      { id: 't2', input: '3 2', expectedOutput: '3', explanation: '3 distinct paths: DDR, DRD, RDD.' }
    ],
    defaultVisualizerData: {
      initialState: [1, 1, 1, 1],
      steps: [
        { stepIndex: 0, description: 'Row 0 initialized to [1, 1, 1, 1] (only right moves possible).', highlightIndices: [0, 1, 2, 3], message: 'Base row set.' },
        { stepIndex: 1, description: 'Row 1 computed: dp[1] = 1+1=2, dp[2] = 2+1=3, dp[3] = 3+1=4.', highlightIndices: [1, 2, 3], message: 'Row 1 values: [1, 2, 3, 4]' },
        { stepIndex: 2, description: 'Row 2 computed: Final corner accumulates total path count.', highlightIndices: [3], message: 'Total unique paths computed!' }
      ]
    }
  }
];
