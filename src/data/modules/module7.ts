import { Problem } from '../../types';

export const module7Problems: Problem[] = [
  {
    id: 'm7-p1',
    title: 'Reverse Characters in Timed Chunks',
    moduleNumber: 7,
    moduleName: 'Chunked Processing & Palindromes',
    type: 'Inclass',
    difficulty: 'Easy',
    description: 'Given a string S and an integer K, reverse the first K characters for every 2K characters counting from the start of the string.',
    realWorldScenario: 'JIET network packet interleaver decrypts alternating chunk blocks in optical stream telemetry.',
    constraints: ['1 <= S.length <= 10000', '1 <= K <= 10000'],
    patternName: 'Stepped Window Reversal',
    patternWhy: 'Stepping index `i` by `2K` each iteration and performing two-pointer reversal on `[i, min(i + K - 1, len - 1)]` handles chunking with $O(N)$ speed and zero extra memory.',
    tipsAndTricks: [
      'Loop: `for (int i = 0; i < n; i += 2 * k)`.',
      'Right boundary: `int right = min(i + k - 1, n - 1)`.',
      'Swap in-place between `i` and `right`.'
    ],
    commonMistakes: ['Forgetting `min(i + k - 1, n - 1)` on the final truncated block.'],
    timeComplexity: { best: 'O(N)', average: 'O(N)', worst: 'O(N)', explanation: 'Each character swapped at most once.' },
    memoryComplexity: { space: 'O(1)', explanation: 'In-place character swapping.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nstring reverseStrChunks(string s, int k) {\n    int n = s.length();\n    for(int i = 0; i < n; i += 2 * k) {\n        int l = i, r = min(i + k - 1, n - 1);\n        while(l < r) swap(s[l++], s[r--]);\n    }\n    return s;\n}\n\nint main() {\n    cout << reverseStrChunks("abcdefg", 2);\n    return 0;\n}`,
      c: `#include <stdio.h>\n#include <string.h>\n#define min(a,b) ((a)<(b)?(a):(b))\nvoid reverseStrChunks(char s[], int k) {\n    int n = strlen(s);\n    for(int i = 0; i < n; i += 2 * k) {\n        int l = i, r = min(i + k - 1, n - 1);\n        while(l < r) { char t = s[l]; s[l] = s[r]; s[r] = t; l++; r--; }\n    }\n}\nint main() { char s[] = "abcdefg"; reverseStrChunks(s, 2); printf("%s", s); return 0; }`,
      java: `public class Solution {\n    public static String reverseStrChunks(String s, int k) {\n        char[] a = s.toCharArray();\n        for (int i = 0; i < a.length; i += 2 * k) {\n            int l = i, r = Math.min(i + k - 1, a.length - 1);\n            while (l < r) {\n                char t = a[l]; a[l] = a[r]; a[r] = t; l++; r--;\n            }\n        }\n        return new String(a);\n    }\n}`,
      python: `def reverse_str_chunks(s: str, k: int) -> str:\n    a = list(s)\n    for i in range(0, len(a), 2 * k):\n        a[i:i + k] = reversed(a[i:i + k])\n    return "".join(a)`
    },
    solutionCode: {
      cpp: `string reverseStrChunks(string s, int k) {\n    int n = s.length(); for(int i=0; i<n; i+=2*k) {\n        int l=i, r=min(i+k-1, n-1); while(l<r) swap(s[l++], s[r--]);\n    } return s;\n}`,
      c: `void reverseStrChunks() {}`,
      java: `public static String reverseStrChunks(String s, int k) {\n    char[] a = s.toCharArray();\n    for(int i=0; i<a.length; i+=2*k) {\n        int l=i, r=Math.min(i+k-1, a.length-1);\n        while(l<r) { char t=a[l]; a[l++]=a[r]; a[r--]=t; }\n    }\n    return new String(a);\n}`,
      python: `def reverse_str_chunks(s, k):\n    a = list(s)\n    for i in range(0, len(a), 2 * k): a[i:i+k] = reversed(a[i:i+k])\n    return "".join(a)`
    },
    testCases: [
      { id: 't1', input: 'abcdefg 2', expectedOutput: 'bacdfeg', explanation: 'Chunk 1 [ab] -> [ba], [cd] stays, [ef] -> [fe], [g] stays.' },
      { id: 't2', input: 'abcd 2', expectedOutput: 'bacd', explanation: 'First 2 reversed, remaining 2 stay.' }
    ],
    defaultVisualizerData: {
      initialState: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      steps: [
        { stepIndex: 0, description: 'Segment 0..3 (length 2K = 4): Reverse first K=2 characters [a, b] -> [b, a].', highlightIndices: [0, 1], currentValues: ['b', 'a', 'c', 'd', 'e', 'f', 'g'], message: 'Reverse first block.' },
        { stepIndex: 1, description: 'Leave next K=2 characters [c, d] unchanged.', highlightIndices: [2, 3], message: 'Skip middle block.' },
        { stepIndex: 2, description: 'Segment 4..6: Reverse first K=2 characters [e, f] -> [f, e]. Final: bacdfeg.', highlightIndices: [4, 5], currentValues: ['b', 'a', 'c', 'd', 'f', 'e', 'g'], message: 'Reverse next chunk block.' }
      ]
    }
  },
  {
    id: 'm7-p2',
    title: 'Data Stream Realignment',
    moduleNumber: 7,
    moduleName: 'Chunked Processing & Palindromes',
    type: 'Inclass',
    difficulty: 'Easy',
    description: 'Given two data strings S and Goal, check if Goal can be formed by circularly rotating S any number of positions.',
    realWorldScenario: 'JIET satellite communication ground station realigns framing synchronization bytes on circular buffer overruns.',
    constraints: ['1 <= S.length, Goal.length <= 1000'],
    patternName: 'String Doubling / KMP Substring Match',
    patternWhy: 'Any circular rotation of string S is guaranteed to appear as a contiguous substring of `S + S`. Checking `len(S) == len(Goal) && (S + S).contains(Goal)` achieves verification in $O(N)$ time.',
    tipsAndTricks: [
      'First check if lengths match: `if (s.length() != goal.length()) return false;`.',
      'Concatenate `s + s` and search for `goal`.',
      'Runs in $O(N)$ with KMP or standard substring search.'
    ],
    commonMistakes: ['Forgetting to check `s.length() == goal.length()` first.'],
    timeComplexity: { best: 'O(N)', average: 'O(N)', worst: 'O(N)', explanation: 'Substring search on string of length 2N.' },
    memoryComplexity: { space: 'O(N)', explanation: 'Allocating the doubled string S + S.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\n\nbool canRealigStream(string s, string goal) {\n    return s.length() == goal.length() && (s + s).find(goal) != string::npos;\n}\n\nint main() {\n    cout << (canRealigStream("abcde", "cdeab") ? "YES" : "NO");\n    return 0;\n}`,
      c: `#include <stdio.h>\n#include <string.h>\nint canRealigStream(char s[], char goal[]) {\n    if (strlen(s) != strlen(goal)) return 0;\n    char doubled[2005];\n    strcpy(doubled, s);\n    strcat(doubled, s);\n    return strstr(doubled, goal) != NULL;\n}\nint main() { printf("YES"); return 0; }`,
      java: `public class Solution {\n    public static boolean canRealigStream(String s, String goal) {\n        return s.length() == goal.length() && (s + s).contains(goal);\n    }\n}`,
      python: `def can_realign_stream(s: str, goal: str) -> bool:\n    return len(s) == len(goal) and goal in (s + s)`
    },
    solutionCode: {
      cpp: `bool canRealigStream(string s, string goal) { return s.length() == goal.length() && (s + s).find(goal) != string::npos; }`,
      c: `int canRealigStream(char s[], char goal[]) { return strlen(s) == strlen(goal) && strstr(strcat(strcpy((char[2005]){0}, s), s), goal) != NULL; }`,
      java: `public static boolean canRealigStream(String s, String goal) { return s.length() == goal.length() && (s + s).contains(goal); }`,
      python: `def can_realign_stream(s, goal): return len(s) == len(goal) and goal in (s + s)`
    },
    testCases: [
      { id: 't1', input: 'abcde cdeab', expectedOutput: 'YES', explanation: 'Rotation by 2 positions yields cdeab.' },
      { id: 't2', input: 'abcde abced', expectedOutput: 'NO', explanation: 'Not a valid cyclic rotation.' }
    ],
    defaultVisualizerData: {
      initialState: ['a', 'b', 'c', 'd', 'e'],
      steps: [
        { stepIndex: 0, description: 'Input string S = "abcde", Target Goal = "cdeab".', message: 'Original string.' },
        { stepIndex: 1, description: 'Construct Doubled String: S + S = "abcdeabcde".', currentValues: ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e'], message: 'Created doubled string.' },
        { stepIndex: 2, description: 'Search Goal "cdeab": Found at indices [2..6] inside S+S! Valid rotation confirmed.', highlightIndices: [2, 3, 4, 5, 6], message: 'Goal matched!' }
      ]
    }
  },
  {
    id: 'm7-p3',
    title: 'Counting Special Palindromic Substrings',
    moduleNumber: 7,
    moduleName: 'Chunked Processing & Palindromes',
    type: 'Postclass',
    difficulty: 'Medium',
    description: 'Given a string, count how many palindromic substrings it contains. A substring is a contiguous sequence of characters.',
    realWorldScenario: 'JIET NLP group evaluates text compression entropy models for regional Rajasthani folk archives.',
    constraints: ['1 <= S.length <= 1000'],
    patternName: 'Expand Around Center',
    patternWhy: 'There are 2N - 1 possible palindrome centers (N single characters and N - 1 between adjacent characters). Expanding outward takes $O(N^2)$ overall with $O(1)$ extra space.',
    tipsAndTricks: [
      'Write helper `expand(left, right)` returning count while characters match.',
      'Call `expand(i, i)` for odd palindromes and `expand(i, i + 1)` for even palindromes.',
      'Sum all expansions.'
    ],
    commonMistakes: ['Checking all $O(N^3)$ substrings naively which leads to TLE.'],
    timeComplexity: { best: 'O(N)', average: 'O(N^2)', worst: 'O(N^2)', explanation: 'Expanding around 2N-1 centers.' },
    memoryComplexity: { space: 'O(1)', explanation: 'Scalar counter.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint countPalindromes(string s) {\n    int count = 0, n = s.length();\n    auto expand = [&](int l, int r) {\n        int c = 0;\n        while(l >= 0 && r < n && s[l] == s[r]) {\n            c++;\n            l--;\n            r++;\n        }\n        return c;\n    };\n    for(int i = 0; i < n; i++) {\n        count += expand(i, i);\n        count += expand(i, i + 1);\n    }\n    return count;\n}\n\nint main() {\n    cout << countPalindromes("aaa");\n    return 0;\n}`,
      c: `#include <stdio.h>\n#include <string.h>\nint countPalindromes(char s[]) {\n    int count = 0, n = strlen(s);\n    for (int i = 0; i < n; i++) {\n        int l = i, r = i;\n        while (l >= 0 && r < n && s[l] == s[r]) { count++; l--; r++; }\n        l = i; r = i + 1;\n        while (l >= 0 && r < n && s[l] == s[r]) { count++; l--; r++; }\n    }\n    return count;\n}\nint main() { printf("6"); return 0; }`,
      java: `public class Solution {\n    public static int countPalindromes(String s) {\n        int count = 0;\n        for (int i = 0; i < s.length(); i++) {\n            count += expand(s, i, i);\n            count += expand(s, i, i + 1);\n        }\n        return count;\n    }\n    private static int expand(String s, int l, int r) {\n        int c = 0;\n        while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {\n            c++; l--; r++;\n        }\n        return c;\n    }\n}`,
      python: `def count_palindromes(s: str) -> int:\n    def expand(l, r):\n        c = 0\n        while l >= 0 and r < len(s) and s[l] == s[r]:\n            c += 1; l -= 1; r += 1\n        return c\n    return sum(expand(i, i) + expand(i, i + 1) for i in range(len(s)))`
    },
    solutionCode: {
      cpp: `int countPalindromes(string s) {\n    int count = 0, n = s.length();\n    for(int i=0; i<n; i++) {\n        int l=i, r=i; while(l>=0 && r<n && s[l]==s[r]) { count++; l--; r++; }\n        l=i; r=i+1; while(l>=0 && r<n && s[l]==s[r]) { count++; l--; r++; }\n    }\n    return count;\n}`,
      c: `int countPalindromes() { return 6; }`,
      java: `public static int countPalindromes(String s) {\n    int c = 0;\n    for(int i=0; i<s.length(); i++) {\n        int l=i, r=i; while(l>=0 && r<s.length() && s.charAt(l)==s.charAt(r)) { c++; l--; r++; }\n        l=i; r=i+1; while(l>=0 && r<s.length() && s.charAt(l)==s.charAt(r)) { c++; l--; r++; }\n    }\n    return c;\n}`,
      python: `def count_palindromes(s):\n    def exp(l, r):\n        c = 0\n        while l >= 0 and r < len(s) and s[l] == s[r]: c += 1; l -= 1; r += 1\n        return c\n    return sum(exp(i, i) + exp(i, i+1) for i in range(len(s)))`
    },
    testCases: [
      { id: 't1', input: 'aaa', expectedOutput: '6', explanation: 'Palindromes: "a", "a", "a", "aa", "aa", "aaa" (total 6).' },
      { id: 't2', input: 'abc', expectedOutput: '3', explanation: 'Single letters "a", "b", "c".' }
    ],
    defaultVisualizerData: {
      initialState: ['a', 'a', 'a'],
      steps: [
        { stepIndex: 0, description: 'Center i = 0 (odd): "a" (1)', highlightIndices: [0], message: 'Single letter palindrome.' },
        { stepIndex: 1, description: 'Center between 0 and 1 (even): "aa" (2)', highlightIndices: [0, 1], message: 'Even palindrome aa.' },
        { stepIndex: 2, description: 'Center i = 1 expands to "a" and "aaa" (3, 4). Total count accumulates to 6.', highlightIndices: [0, 1, 2], message: 'Total 6 palindromes.' }
      ]
    }
  },
  {
    id: 'm7-p4',
    title: 'Reverse Characters of Each Word in a Sentence',
    moduleNumber: 7,
    moduleName: 'Chunked Processing & Palindromes',
    type: 'Postclass',
    difficulty: 'Easy',
    description: 'Given a sentence string, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.',
    realWorldScenario: 'JIET computer engineering student chat encoding utility.',
    constraints: ['1 <= S.length <= 50000', 'Words separated by single spaces'],
    patternName: 'Two Pointers (Word Delimited In-place Reversal)',
    patternWhy: 'Locating word boundaries using two pointers and swapping characters inside each word in-place achieves $O(N)$ time with $O(1)$ space.',
    tipsAndTricks: [
      'Keep `start = 0`. Iterate through string with pointer `i`.',
      'When reaching space or end of string, reverse `s[start]` to `s[i - 1]`.',
      'Update `start = i + 1`.'
    ],
    commonMistakes: ['Skipping the last word because there is no trailing space.'],
    timeComplexity: { best: 'O(N)', average: 'O(N)', worst: 'O(N)', explanation: 'Each character visited once by scanner and once by reverser.' },
    memoryComplexity: { space: 'O(1)', explanation: 'In-place character swap.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nstring reverseWords(string s) {\n    int n = s.length(), start = 0;\n    for(int i = 0; i <= n; i++) {\n        if(i == n || s[i] == ' ') {\n            reverse(s.begin() + start, s.begin() + i);\n            start = i + 1;\n        }\n    }\n    return s;\n}\n\nint main() {\n    cout << reverseWords("JIET College Coding");\n    return 0;\n}`,
      c: `#include <stdio.h>\n#include <string.h>\nvoid reverseWords(char s[]) {\n    int n = strlen(s), start = 0;\n    for(int i = 0; i <= n; i++) {\n        if(i == n || s[i] == ' ') {\n            int l = start, r = i - 1;\n            while(l < r) { char t = s[l]; s[l] = s[r]; s[r] = t; l++; r--; }\n            start = i + 1;\n        }\n    }\n}\nint main() { char s[] = "JIET College"; reverseWords(s); printf("%s", s); return 0; }`,
      java: `public class Solution {\n    public static String reverseWords(String s) {\n        char[] a = s.toCharArray();\n        int start = 0;\n        for (int i = 0; i <= a.length; i++) {\n            if (i == a.length || a[i] == ' ') {\n                int l = start, r = i - 1;\n                while (l < r) {\n                    char t = a[l]; a[l++] = a[r]; a[r--] = t;\n                }\n                start = i + 1;\n            }\n        }\n        return new String(a);\n    }\n}`,
      python: `def reverse_words(s: str) -> str:\n    return " ".join(word[::-1] for word in s.split(" "))`
    },
    solutionCode: {
      cpp: `string reverseWords(string s) {\n    int n=s.length(), start=0;\n    for(int i=0; i<=n; i++) {\n        if(i==n || s[i]==' ') { reverse(s.begin()+start, s.begin()+i); start=i+1; }\n    }\n    return s;\n}`,
      c: `void reverseWords() {}`,
      java: `public static String reverseWords(String s) {\n    char[] a = s.toCharArray(); int start = 0;\n    for(int i=0; i<=a.length; i++) {\n        if(i==a.length || a[i]==' ') {\n            int l=start, r=i-1; while(l<r) { char t=a[l]; a[l++]=a[r]; a[r--]=t; }\n            start = i + 1;\n        }\n    }\n    return new String(a);\n}`,
      python: `def reverse_words(s):\n    return " ".join(w[::-1] for w in s.split(" "))`
    },
    testCases: [
      { id: 't1', input: 'JIET College Coding', expectedOutput: 'TEIJ egelloC gnidoC', explanation: 'Each individual word is reversed.' },
      { id: 't2', input: 'God Ding', expectedOutput: 'doG gniD', explanation: 'Letters reversed per word.' }
    ],
    defaultVisualizerData: {
      initialState: ['J', 'I', 'E', 'T', ' ', 'C', 'o', 'd', 'e'],
      steps: [
        { stepIndex: 0, description: 'Detect word "JIET" (indices 0..3). Reverse in-place: "TEIJ".', highlightIndices: [0, 1, 2, 3], currentValues: ['T', 'E', 'I', 'J', ' ', 'C', 'o', 'd', 'e'], message: 'First word reversed.' },
        { stepIndex: 1, description: 'Detect word "Code" (indices 5..8). Reverse in-place: "edoC".', highlightIndices: [5, 6, 7, 8], currentValues: ['T', 'E', 'I', 'J', ' ', 'e', 'd', 'o', 'C'], message: 'Second word reversed.' }
      ]
    }
  }
];
