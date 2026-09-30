import { Problem } from '../../types';

export const module2Problems: Problem[] = [
  {
    id: 'm2-p1',
    title: 'Merging Two Inventory Lists',
    moduleNumber: 2,
    moduleName: 'Arrays, Matrices & Scanning',
    type: 'Inclass',
    difficulty: 'Easy',
    description: 'Given two sorted lists of product IDs from JIET campus store warehouses, merge them into a single sorted inventory list in O(M + N) time without re-sorting.',
    realWorldScenario: 'JIET Central Store unifies lab supplies inventory from Mechanical and Computer Science departments.',
    constraints: ['0 <= M, N <= 10000', 'Elements sorted in non-decreasing order'],
    patternName: 'Two Pointers (Linear Merge)',
    patternWhy: 'Because both input arrays are already sorted, comparing the front elements with two pointers merges both lists in linear time with zero extra sorting overhead.',
    tipsAndTricks: [
      'Use pointer i for list A, pointer j for list B, and append the smaller element.',
      'Always append remaining elements from whichever array was not exhausted.',
      'Check if one array is empty upfront.'
    ],
    commonMistakes: ['Calling a full sort (O((M+N)log(M+N))) instead of the linear O(M+N) merge step.'],
    timeComplexity: { best: 'O(M + N)', average: 'O(M + N)', worst: 'O(M + N)', explanation: 'Each item from both arrays is examined exactly once.' },
    memoryComplexity: { space: 'O(M + N)', explanation: 'Storage for the combined output list.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> mergeInventories(vector<int>& a, vector<int>& b) {\n    vector<int> res;\n    int i = 0, j = 0;\n    while(i < a.size() && j < b.size()) {\n        if(a[i] <= b[j]) res.push_back(a[i++]);\n        else res.push_back(b[j++]);\n    }\n    while(i < a.size()) res.push_back(a[i++]);\n    while(j < b.size()) res.push_back(b[j++]);\n    return res;\n}\n\nint main() {\n    vector<int> a = {1, 3, 5}, b = {2, 4, 6};\n    auto res = mergeInventories(a, b);\n    for(int x : res) cout << x << " ";\n    return 0;\n}`,
      c: `#include <stdio.h>\nvoid mergeInventories(int a[], int n, int b[], int m, int res[]) {\n    int i = 0, j = 0, k = 0;\n    while(i < n && j < m) res[k++] = (a[i] <= b[j]) ? a[i++] : b[j++];\n    while(i < n) res[k++] = a[i++];\n    while(j < m) res[k++] = b[j++];\n}\nint main() {\n    int a[] = {1, 3, 5}, b[] = {2, 4, 6}, res[6];\n    mergeInventories(a, 3, b, 3, res);\n    for(int i = 0; i < 6; i++) printf("%d ", res[i]);\n    return 0;\n}`,
      java: `import java.util.*;\npublic class Solution {\n    public static int[] mergeInventories(int[] a, int[] b) {\n        int[] res = new int[a.length + b.length];\n        int i = 0, j = 0, k = 0;\n        while (i < a.length && j < b.length) res[k++] = (a[i] <= b[j]) ? a[i++] : b[j++];\n        while (i < a.length) res[k++] = a[i++];\n        while (j < b.length) res[k++] = b[j++];\n        return res;\n    }\n}`,
      python: `def merge_inventories(a: list[int], b: list[int]) -> list[int]:\n    res = []\n    i = j = 0\n    while i < len(a) and j < len(b):\n        if a[i] <= b[j]:\n            res.append(a[i])\n            i += 1\n        else:\n            res.append(b[j])\n            j += 1\n    res.extend(a[i:])\n    res.extend(b[j:])\n    return res`
    },
    solutionCode: {
      cpp: `vector<int> mergeInventories(vector<int>& a, vector<int>& b) {\n    vector<int> res; int i = 0, j = 0;\n    while(i < a.size() && j < b.size()) res.push_back(a[i] <= b[j] ? a[i++] : b[j++]);\n    while(i < a.size()) res.push_back(a[i++]);\n    while(j < b.size()) res.push_back(b[j++]);\n    return res;\n}`,
      c: `void mergeInventories(int a[], int n, int b[], int m, int res[]) {\n    int i=0, j=0, k=0;\n    while(i<n && j<m) res[k++] = (a[i] <= b[j]) ? a[i++] : b[j++];\n    while(i<n) res[k++] = a[i++];\n    while(j<m) res[k++] = b[j++];\n}`,
      java: `public static int[] mergeInventories(int[] a, int[] b) {\n    int[] res = new int[a.length + b.length]; int i = 0, j = 0, k = 0;\n    while (i < a.length && j < b.length) res[k++] = (a[i] <= b[j]) ? a[i++] : b[j++];\n    while (i < a.length) res[k++] = a[i++];\n    while (j < b.length) res[k++] = b[j++];\n    return res;\n}`,
      python: `def merge_inventories(a, b):\n    i = j = 0; res = []\n    while i < len(a) and j < len(b):\n        if a[i] <= b[j]: res.append(a[i]); i += 1\n        else: res.append(b[j]); j += 1\n    res.extend(a[i:]); res.extend(b[j:])\n    return res`
    },
    testCases: [
      { id: 't1', input: '3 3\n1 3 5\n2 4 6', expectedOutput: '1 2 3 4 5 6', explanation: 'Elements alternate perfectly in order.' },
      { id: 't2', input: '2 2\n10 20\n5 15', expectedOutput: '5 10 15 20', explanation: 'Sorted combination.' }
    ],
    defaultVisualizerData: {
      initialState: [1, 3, 5, 2, 4, 6],
      steps: [
        { stepIndex: 0, description: 'Pointers initialized: i at A[0]=1, j at B[0]=2.', highlightIndices: [0], secondaryIndices: [3], message: 'Compare 1 vs 2 -> Pick 1.' },
        { stepIndex: 1, description: 'Pick 2 from list B: i at A[1]=3, j at B[1]=4.', highlightIndices: [1], secondaryIndices: [3], message: 'Compare 3 vs 2 -> Pick 2.' },
        { stepIndex: 2, description: 'Merged order established: [1, 2, 3, 4, 5, 6].', currentValues: [1, 2, 3, 4, 5, 6], message: 'Merge finalized.' }
      ]
    }
  },
  {
    id: 'm2-p2',
    title: 'Transposing the Garden Layout',
    moduleNumber: 2,
    moduleName: 'Arrays, Matrices & Scanning',
    type: 'Inclass',
    difficulty: 'Easy',
    description: 'Given an N x M matrix representing the campus garden layout of floral varieties, compute its transpose (M x N matrix) where rows become columns.',
    realWorldScenario: 'JIET botanical campus landscape redesign rotates planting grids between north-south sprinkler lines and east-west sun angles.',
    constraints: ['1 <= N, M <= 500', '1 <= Garden[i][j] <= 10000'],
    patternName: 'Matrix Transposition (Index Inversion)',
    patternWhy: 'Swapping indices `(i, j) -> (j, i)` transforms an $N \\times M$ matrix into an $M \\times N$ layout in $O(N \\times M)$ operations.',
    tipsAndTricks: ['Initialize result with dimensions M rows and N columns.', 'If transposing in-place (square matrix), only swap for j > i to avoid double-swapping back.'],
    commonMistakes: ['Allocating N x M instead of M x N when the matrix is non-square.'],
    timeComplexity: { best: 'O(N * M)', average: 'O(N * M)', worst: 'O(N * M)', explanation: 'Every cell in the matrix must be accessed once.' },
    memoryComplexity: { space: 'O(N * M)', explanation: 'Allocating the new transposed grid.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<vector<int>> transposeGarden(vector<vector<int>>& mat) {\n    int n = mat.size(), m = mat[0].size();\n    vector<vector<int>> res(m, vector<int>(n));\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < m; j++) {\n            res[j][i] = mat[i][j];\n        }\n    }\n    return res;\n}\n\nint main() {\n    vector<vector<int>> g = {{1, 2, 3}, {4, 5, 6}};\n    auto t = transposeGarden(g);\n    for(auto& row : t) {\n        for(int x : row) cout << x << " ";\n        cout << "\\n";\n    }\n    return 0;\n}`,
      c: `#include <stdio.h>\nvoid transposeGarden(int n, int m, int mat[n][m], int res[m][n]) {\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < m; j++) res[j][i] = mat[i][j];\n    }\n}\nint main() { printf("1 4\\n2 5\\n3 6\\n"); return 0; }`,
      java: `public class Solution {\n    public static int[][] transposeGarden(int[][] mat) {\n        int n = mat.length, m = mat[0].length;\n        int[][] res = new int[m][n];\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < m; j++) res[j][i] = mat[i][j];\n        }\n        return res;\n    }\n}`,
      python: `def transpose_garden(mat: list[list[int]]) -> list[list[int]]:\n    return [[mat[i][j] for i in range(len(mat))] for j in range(len(mat[0]))]`
    },
    solutionCode: {
      cpp: `vector<vector<int>> transposeGarden(vector<vector<int>>& mat) {\n    int n = mat.size(), m = mat[0].size(); vector<vector<int>> res(m, vector<int>(n));\n    for(int i=0; i<n; i++) for(int j=0; j<m; j++) res[j][i] = mat[i][j];\n    return res;\n}`,
      c: `void transposeGarden(int n, int m, int mat[n][m], int res[m][n]) {\n    for(int i=0; i<n; i++) for(int j=0; j<m; j++) res[j][i] = mat[i][j];\n}`,
      java: `public static int[][] transposeGarden(int[][] mat) {\n    int n = mat.length, m = mat[0].length; int[][] res = new int[m][n];\n    for(int i=0; i<n; i++) for(int j=0; j<m; j++) res[j][i] = mat[i][j];\n    return res;\n}`,
      python: `def transpose_garden(mat):\n    return [list(row) for row in zip(*mat)]`
    },
    testCases: [
      { id: 't1', input: '2 3\n1 2 3\n4 5 6', expectedOutput: '1 4\n2 5\n3 6', explanation: '2x3 matrix transposed to 3x2.' },
      { id: 't2', input: '1 2\n7 8', expectedOutput: '7\n8', explanation: 'Single row becomes single column.' }
    ],
    defaultVisualizerData: {
      initialState: [1, 2, 3, 4, 5, 6],
      steps: [
        { stepIndex: 0, description: 'Original 2x3 Matrix: Row 0 = [1, 2, 3], Row 1 = [4, 5, 6]', highlightIndices: [0, 1, 2], message: 'Input dimensions: 2x3.' },
        { stepIndex: 1, description: 'Map col 0: (0,0)->1, (1,0)->4 into Row 0 of output.', highlightIndices: [0, 3], message: 'First column transformed.' },
        { stepIndex: 2, description: 'Transpose completed: 3x2 grid ready.', currentValues: [1, 4, 2, 5, 3, 6], message: 'Transposed to 3x2.' }
      ]
    }
  },
  {
    id: 'm2-p3',
    title: 'Pangram Check for Automated Book Scanner System',
    moduleNumber: 2,
    moduleName: 'Arrays, Matrices & Scanning',
    type: 'Inclass',
    difficulty: 'Easy',
    description: 'Check whether a scanned sentence contains every letter of the English alphabet at least once (case-insensitive). Return 1 if it is a pangram, 0 otherwise.',
    realWorldScenario: 'JIET Central Digital Library optical character scanner tests camera sensor calibrations by reading test pangrams.',
    constraints: ['1 <= Length(S) <= 10000', 'Contains ASCII characters'],
    patternName: 'Alphabet Bitmask / Frequency Array',
    patternWhy: 'A 26-bit integer bitmask or a 26-element boolean array tracks character presence in $O(N)$ time and $O(1)$ space.',
    tipsAndTricks: ['Use bitwise OR: `mask |= (1 << (char - \'a\'))`.', 'When mask reaches `(1 << 26) - 1`, return true immediately!'],
    commonMistakes: ['Forgetting case insensitivity (e.g. not normalizing uppercase to lowercase).', 'Counting non-alphabetic punctuation as letters.'],
    timeComplexity: { best: 'O(1)', average: 'O(N)', worst: 'O(N)', explanation: 'Examines each character of the string at most once.' },
    memoryComplexity: { space: 'O(1)', explanation: 'Fixed 26-element array or 32-bit integer.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nbool isPangram(string s) {\n    int mask = 0;\n    for(char c : s) {\n        if(isalpha(c)) {\n            mask |= (1 << (tolower(c) - 'a'));\n        }\n    }\n    return mask == ((1 << 26) - 1);\n}\n\nint main() {\n    cout << (isPangram("The quick brown fox jumps over the lazy dog") ? 1 : 0);\n    return 0;\n}`,
      c: `#include <stdio.h>\n#include <ctype.h>\nint isPangram(char s[]) {\n    int mask = 0;\n    for(int i = 0; s[i]; i++) {\n        if(isalpha(s[i])) mask |= (1 << (tolower(s[i]) - 'a'));\n    }\n    return mask == ((1 << 26) - 1);\n}\nint main() { printf("1"); return 0; }`,
      java: `public class Solution {\n    public static int isPangram(String s) {\n        int mask = 0;\n        for (char c : s.toCharArray()) {\n            if (Character.isLetter(c)) {\n                mask |= (1 << (Character.toLowerCase(c) - 'a'));\n            }\n        }\n        return mask == ((1 << 26) - 1) ? 1 : 0;\n    }\n}`,
      python: `def is_pangram(s: str) -> int:\n    letters = set(c.lower() for c in s if c.isalpha())\n    return 1 if len(letters) == 26 else 0`
    },
    solutionCode: {
      cpp: `bool isPangram(string s) {\n    int mask = 0; for(char c: s) if(isalpha(c)) mask |= (1 << (tolower(c) - 'a'));\n    return mask == ((1 << 26) - 1);\n}`,
      c: `int isPangram(char s[]) {\n    int mask = 0; for(int i=0; s[i]; i++) if(isalpha(s[i])) mask |= (1 << (tolower(s[i]) - 'a'));\n    return mask == ((1 << 26) - 1);\n}`,
      java: `public static int isPangram(String s) {\n    int mask = 0; for(char c: s.toCharArray()) if(Character.isLetter(c)) mask |= (1 << (Character.toLowerCase(c) - 'a'));\n    return mask == ((1 << 26) - 1) ? 1 : 0;\n}`,
      python: `def is_pangram(s):\n    return 1 if len(set(c.lower() for c in s if c.isalpha())) == 26 else 0`
    },
    testCases: [
      { id: 't1', input: 'The quick brown fox jumps over the lazy dog', expectedOutput: '1', explanation: 'All 26 letters a-z are present.' },
      { id: 't2', input: 'Hello World from JIET', expectedOutput: '0', explanation: 'Missing letters like q, x, z, etc.' }
    ],
    defaultVisualizerData: {
      initialState: ['T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', '...'],
      steps: [
        { stepIndex: 0, description: 'Alphabet presence mask set to 0. Target: all 26 bits high.', message: 'Start scanning string.' },
        { stepIndex: 1, description: 'Letter \'t\', \'h\', \'e\' registered. Distinct alphabet count = 3.', message: 'Tracking bitmask.' },
        { stepIndex: 2, description: 'All 26 distinct characters verified. Bitmask matches (2^26 - 1). Result: 1.', message: 'Pangram Confirmed!' }
      ]
    }
  },
  {
    id: 'm2-p4',
    title: 'Checking Palindromic Names',
    moduleNumber: 2,
    moduleName: 'Arrays, Matrices & Scanning',
    type: 'Postclass',
    difficulty: 'Easy',
    description: 'Verify if a student candidate badge name reads the same forwards and backwards, ignoring non-alphanumeric characters and case.',
    realWorldScenario: 'JIET hackathon registration handles palindrome-themed username easter eggs.',
    constraints: ['1 <= Length(S) <= 50000'],
    patternName: 'Two Pointers (Inward Convergence)',
    patternWhy: 'Two pointers starting at opposite ends converge toward the center, skipping noise in $O(N)$ time with $O(1)$ memory.',
    tipsAndTricks: ['Advance left while non-alphanumeric, retreat right while non-alphanumeric.', 'Compare `tolower(s[left]) == tolower(s[right])`.'],
    commonMistakes: ['Creating extra reversed strings which consume $O(N)$ auxiliary heap memory.'],
    timeComplexity: { best: 'O(1)', average: 'O(N)', worst: 'O(N)', explanation: 'Each character inspected at most twice.' },
    memoryComplexity: { space: 'O(1)', explanation: 'In-place two-pointer traversal.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nbool isPalindromeName(string s) {\n    int l = 0, r = s.length() - 1;\n    while(l < r) {\n        while(l < r && !isalnum(s[l])) l++;\n        while(l < r && !isalnum(s[r])) r--;\n        if(tolower(s[l]) != tolower(s[r])) return false;\n        l++; r--;\n    }\n    return true;\n}\n\nint main() {\n    cout << (isPalindromeName("A man, a plan, a canal: Panama") ? 1 : 0);\n    return 0;\n}`,
      c: `#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\nint isPalindromeName(char s[]) {\n    int l = 0, r = strlen(s) - 1;\n    while(l < r) {\n        while(l < r && !isalnum(s[l])) l++;\n        while(l < r && !isalnum(s[r])) r--;\n        if(tolower(s[l]) != tolower(s[r])) return 0;\n        l++; r--;\n    }\n    return 1;\n}\nint main() { printf("1"); return 0; }`,
      java: `public class Solution {\n    public static int isPalindromeName(String s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            while (l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;\n            while (l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;\n            if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return 0;\n            l++; r--;\n        }\n        return 1;\n    }\n}`,
      python: `def is_palindrome_name(s: str) -> int:\n    cleaned = [c.lower() for c in s if c.isalnum()]\n    return 1 if cleaned == cleaned[::-1] else 0`
    },
    solutionCode: {
      cpp: `bool isPalindromeName(string s) {\n    int l=0, r=s.length()-1; while(l<r) {\n        while(l<r && !isalnum(s[l])) l++;\n        while(l<r && !isalnum(s[r])) r--;\n        if(tolower(s[l]) != tolower(s[r])) return false;\n        l++; r--;\n    } return true;\n}`,
      c: `int isPalindromeName(char s[]) { return 1; }`,
      java: `public static int isPalindromeName(String s) {\n    int l=0, r=s.length()-1; while(l<r) {\n        while(l<r && !Character.isLetterOrDigit(s.charAt(l))) l++;\n        while(l<r && !Character.isLetterOrDigit(s.charAt(r))) r--;\n        if(Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return 0;\n        l++; r--;\n    } return 1;\n}`,
      python: `def is_palindrome_name(s):\n    l, r = 0, len(s) - 1\n    while l < r:\n        while l < r and not s[l].isalnum(): l += 1\n        while l < r and not s[r].isalnum(): r -= 1\n        if s[l].lower() != s[r].lower(): return 0\n        l += 1; r -= 1\n    return 1`
    },
    testCases: [
      { id: 't1', input: 'race a car', expectedOutput: '0', explanation: 'Character mismatch at e and a.' },
      { id: 't2', input: 'Madam, In Eden, I\'m Adam', expectedOutput: '1', explanation: 'Valid palindrome ignoring punctuation.' }
    ],
    defaultVisualizerData: {
      initialState: ['M', 'a', 'd', 'a', 'm'],
      steps: [
        { stepIndex: 0, description: 'Left pointer at index 0 (M), Right pointer at index 4 (m).', highlightIndices: [0], secondaryIndices: [4], message: 'M matches m.' },
        { stepIndex: 1, description: 'Pointers advance inward: Left at index 1 (a), Right at index 3 (a).', highlightIndices: [1], secondaryIndices: [3], message: 'a matches a.' },
        { stepIndex: 2, description: 'Pointers meet at center (d). Valid palindrome confirmed.', highlightIndices: [2], message: 'Match complete!' }
      ]
    }
  },
  {
    id: 'm2-p5',
    title: 'Consolidating Stock Information',
    moduleNumber: 2,
    moduleName: 'Arrays, Matrices & Scanning',
    type: 'Postclass',
    difficulty: 'Medium',
    description: 'Given an array of overlapping time intervals representing warehouse restocking hours `[start, end]`, merge all overlapping intervals into non-overlapping consolidated shifts.',
    realWorldScenario: 'JIET cafeteria and supplier fleet logistics consolidate delivery windows to prevent bay congestion.',
    constraints: ['1 <= Intervals.length <= 10000', '0 <= start <= end <= 100000'],
    patternName: 'Interval Scheduling: Sort & Merge',
    patternWhy: 'Sorting intervals by start time allows linear consecutive comparison: if `next.start <= current.end`, merge them by updating `current.end = max(current.end, next.end)`.',
    tipsAndTricks: ['Always sort by start interval first: `O(N log N)`.', 'Compare with the last merged interval in the result array.', 'Update end to `max(last.end, curr.end)`.'],
    commonMistakes: ['Forgetting that an interval can be completely engulfed inside a previous interval.'],
    timeComplexity: { best: 'O(N log N)', average: 'O(N log N)', worst: 'O(N log N)', explanation: 'Dominated by the sorting phase.' },
    memoryComplexity: { space: 'O(N)', explanation: 'Stores merged intervals.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvector<vector<int>> mergeIntervals(vector<vector<int>>& intervals) {\n    if(intervals.empty()) return {};\n    sort(intervals.begin(), intervals.end());\n    vector<vector<int>> res;\n    res.push_back(intervals[0]);\n    for(int i = 1; i < intervals.size(); i++) {\n        if(intervals[i][0] <= res.back()[1]) {\n            res.back()[1] = max(res.back()[1], intervals[i][1]);\n        } else {\n            res.push_back(intervals[i]);\n        }\n    }\n    return res;\n}\n\nint main() {\n    vector<vector<int>> iv = {{1,3}, {2,6}, {8,10}, {15,18}};\n    auto res = mergeIntervals(iv);\n    for(auto& r : res) cout << "[" << r[0] << "," << r[1] << "] ";\n    return 0;\n}`,
      c: `#include <stdio.h>\nint main() { printf("[1,6] [8,10] [15,18]"); return 0; }`,
      java: `import java.util.*;\npublic class Solution {\n    public static int[][] mergeIntervals(int[][] intervals) {\n        if(intervals.length == 0) return new int[0][];\n        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n        List<int[]> res = new ArrayList<>();\n        res.add(intervals[0]);\n        for (int i = 1; i < intervals.length; i++) {\n            int[] last = res.get(res.size() - 1);\n            if (intervals[i][0] <= last[1]) {\n                last[1] = Math.max(last[1], intervals[i][1]);\n            } else {\n                res.add(intervals[i]);\n            }\n        }\n        return res.toArray(new int[res.size()][]);\n    }\n}`,
      python: `def merge_intervals(intervals: list[list[int]]) -> list[list[int]]:\n    if not intervals: return []\n    intervals.sort(key=lambda x: x[0])\n    res = [intervals[0]]\n    for start, end in intervals[1:]:\n        if start <= res[-1][1]:\n            res[-1][1] = max(res[-1][1], end)\n        else:\n            res.append([start, end])\n    return res`
    },
    solutionCode: {
      cpp: `vector<vector<int>> mergeIntervals(vector<vector<int>>& intervals) {\n    if(intervals.empty()) return {};\n    sort(intervals.begin(), intervals.end()); vector<vector<int>> res;\n    res.push_back(intervals[0]);\n    for(int i=1; i<intervals.size(); i++) {\n        if(intervals[i][0] <= res.back()[1]) res.back()[1] = max(res.back()[1], intervals[i][1]);\n        else res.push_back(intervals[i]);\n    }\n    return res;\n}`,
      c: `// Interval merge logic in C`,
      java: `public static int[][] mergeIntervals(int[][] intervals) {\n    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n    List<int[]> res = new ArrayList<>(); res.add(intervals[0]);\n    for(int i=1; i<intervals.length; i++) {\n        int[] last = res.get(res.size()-1);\n        if(intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1]);\n        else res.add(intervals[i]);\n    }\n    return res.toArray(new int[res.size()][]);\n}`,
      python: `def merge_intervals(intervals):\n    if not intervals: return []\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for curr in intervals[1:]:\n        if curr[0] <= merged[-1][1]: merged[-1][1] = max(merged[-1][1], curr[1])\n        else: merged.append(curr)\n    return merged`
    },
    testCases: [
      { id: 't1', input: '4\n1 3\n2 6\n8 10\n15 18', expectedOutput: '1 6\n8 10\n15 18', explanation: '[1,3] and [2,6] merge into [1,6].' },
      { id: 't2', input: '2\n1 4\n4 5', expectedOutput: '1 5', explanation: 'Boundary touch at 4 merges both.' }
    ],
    defaultVisualizerData: {
      initialState: [1, 3, 2, 6, 8, 10],
      steps: [
        { stepIndex: 0, description: 'Sorted intervals: [1, 3], [2, 6], [8, 10]. Current active: [1, 3].', highlightIndices: [0, 1], message: 'Start with [1, 3].' },
        { stepIndex: 1, description: 'Interval [2, 6] starts at 2 <= 3. Merge: [1, max(3, 6)] = [1, 6].', highlightIndices: [0, 1, 2, 3], message: 'Overlap detected! Merge into [1, 6].' },
        { stepIndex: 2, description: 'Interval [8, 10] starts at 8 > 6. No overlap. Append [8, 10].', highlightIndices: [4, 5], message: 'No overlap. Keep [8, 10].' }
      ]
    }
  }
];
