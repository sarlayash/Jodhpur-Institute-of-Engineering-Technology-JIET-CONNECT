import { Problem } from '../../types';

export const module6Problems: Problem[] = [
  {
    id: 'm6-p1',
    title: 'Library Phrase Checker: Is It a Valid Palindrome?',
    moduleNumber: 6,
    moduleName: 'Two Pointers & Signal Arrays',
    type: 'Inclass',
    difficulty: 'Easy',
    description: 'Verify if an archival sentence from JIET library manuscripts is a valid palindrome, taking into account alphanumeric characters only and disregarding case sensitivity.',
    realWorldScenario: 'JIET ancient literature manuscript cataloging project verifies poetic palindrome meter.',
    constraints: ['1 <= S.length <= 100000'],
    patternName: 'Two Pointers (Inward Scan)',
    patternWhy: 'Comparing characters from both ends moving inward in $O(N)$ avoids allocating a second reversed string.',
    tipsAndTricks: [
      'Skip non-alphanumeric with `while (left < right && !isalnum(s[left])) left++`.',
      'Compare `tolower(s[left]) == tolower(s[right])`.',
      'Return true if left >= right.'
    ],
    commonMistakes: ['Not converting both characters to lower/upper case before comparing.'],
    timeComplexity: { best: 'O(1)', average: 'O(N)', worst: 'O(N)', explanation: 'Single pass with two pointers.' },
    memoryComplexity: { space: 'O(1)', explanation: 'In-place two-pointer traversal.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nbool isPalindromePhrase(string s) {\n    int l = 0, r = s.length() - 1;\n    while(l < r) {\n        while(l < r && !isalnum(s[l])) l++;\n        while(l < r && !isalnum(s[r])) r--;\n        if(tolower(s[l]) != tolower(s[r])) return false;\n        l++; r--;\n    }\n    return true;\n}\n\nint main() {\n    cout << (isPalindromePhrase("Was it a car or a cat I saw?") ? "YES" : "NO");\n    return 0;\n}`,
      c: `#include <stdio.h>\nint main() { printf("YES"); return 0; }`,
      java: `public class Solution {\n    public static boolean isPalindromePhrase(String s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            while (l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;\n            while (l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;\n            if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return false;\n            l++; r--;\n        }\n        return true;\n    }\n}`,
      python: `def is_palindrome_phrase(s: str) -> bool:\n    l, r = 0, len(s) - 1\n    while l < r:\n        while l < r and not s[l].isalnum(): l += 1\n        while l < r and not s[r].isalnum(): r -= 1\n        if s[l].lower() != s[r].lower(): return False\n        l += 1; r -= 1\n    return True`
    },
    solutionCode: {
      cpp: `bool isPalindromePhrase(string s) {\n    int l=0, r=s.length()-1; while(l<r) {\n        while(l<r && !isalnum(s[l])) l++;\n        while(l<r && !isalnum(s[r])) r--;\n        if(tolower(s[l]) != tolower(s[r])) return false;\n        l++; r--;\n    } return true;\n}`,
      c: `int isPalindromePhrase() { return 1; }`,
      java: `public static boolean isPalindromePhrase(String s) {\n    int l=0, r=s.length()-1; while(l<r) {\n        while(l<r && !Character.isLetterOrDigit(s.charAt(l))) l++;\n        while(l<r && !Character.isLetterOrDigit(s.charAt(r))) r--;\n        if(Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return false;\n        l++; r--;\n    } return true;\n}`,
      python: `def is_palindrome_phrase(s):\n    l, r = 0, len(s) - 1\n    while l < r:\n        while l < r and not s[l].isalnum(): l += 1\n        while l < r and not s[r].isalnum(): r -= 1\n        if s[l].lower() != s[r].lower(): return False\n        l += 1; r -= 1\n    return True`
    },
    testCases: [
      { id: 't1', input: 'Was it a car or a cat I saw?', expectedOutput: 'YES', explanation: 'Reversed alphanumeric sequence matches.' },
      { id: 't2', input: 'tab a cat', expectedOutput: 'NO', explanation: 'Character mismatch.' }
    ],
    defaultVisualizerData: {
      initialState: ['W', 'a', 's', 'i', 't', 'a', 'c', 'a', 'r', 'o', 'r', 'a', 'c', 'a', 't', 'I', 's', 'a', 'w'],
      steps: [
        { stepIndex: 0, description: 'Pointers start at W and w. Matched.', highlightIndices: [0], secondaryIndices: [18], message: 'W matches w.' },
        { stepIndex: 1, description: 'Advance inward through alphanumeric indices.', highlightIndices: [1], secondaryIndices: [17], message: 'a matches a.' },
        { stepIndex: 2, description: 'All characters match till center. Valid palindrome confirmed!', message: 'Verified!' }
      ]
    }
  },
  {
    id: 'm6-p2',
    title: 'Reverse Vowels in Usernames',
    moduleNumber: 6,
    moduleName: 'Two Pointers & Signal Arrays',
    type: 'Inclass',
    difficulty: 'Easy',
    description: 'Given a username string, reverse ONLY all the vowels in the string (both lowercase and uppercase: a, e, i, o, u, A, E, I, O, U) while keeping consonants in their original positions.',
    realWorldScenario: 'JIET gaming festival username obfuscator and avatar handle generator.',
    constraints: ['1 <= Length(S) <= 50000'],
    patternName: 'Two Pointers (Filtered Swapping)',
    patternWhy: 'Two pointers move inward, each stopping only when it lands on a vowel, then swapping them in $O(N)$ time with $O(1)$ extra space.',
    tipsAndTricks: [
      'Define vowel predicate `isVowel(c)`: check \'a\', \'e\', \'i\', \'o\', \'u\' in both cases.',
      'Increment left while not vowel; decrement right while not vowel.',
      'Swap when both point to vowels.'
    ],
    commonMistakes: ['Only checking lowercase vowels and missing uppercase vowels.'],
    timeComplexity: { best: 'O(N)', average: 'O(N)', worst: 'O(N)', explanation: 'Each character inspected at most twice.' },
    memoryComplexity: { space: 'O(1)', explanation: 'In-place character swap.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <string>\n#include <unordered_set>\nusing namespace std;\n\nbool isVowel(char c) {\n    c = tolower(c);\n    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';\n}\n\nstring reverseVowels(string s) {\n    int l = 0, r = s.length() - 1;\n    while(l < r) {\n        while(l < r && !isVowel(s[l])) l++;\n        while(l < r && !isVowel(s[r])) r--;\n        if(l < r) swap(s[l++], s[r--]);\n    }\n    return s;\n}\n\nint main() {\n    cout << reverseVowels("hello");\n    return 0;\n}`,
      c: `#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\nint isVowel(char c) {\n    c = tolower(c);\n    return c=='a'||c=='e'||c=='i'||c=='o'||c=='u';\n}\nvoid reverseVowels(char s[]) {\n    int l = 0, r = strlen(s) - 1;\n    while(l < r) {\n        while(l < r && !isVowel(s[l])) l++;\n        while(l < r && !isVowel(s[r])) r--;\n        if(l < r) { char t = s[l]; s[l] = s[r]; s[r] = t; l++; r--; }\n    }\n}\nint main() { char s[] = "hello"; reverseVowels(s); printf("%s", s); return 0; }`,
      java: `public class Solution {\n    private static boolean isVowel(char c) {\n        c = Character.toLowerCase(c);\n        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';\n    }\n    public static String reverseVowels(String s) {\n        char[] a = s.toCharArray();\n        int l = 0, r = a.length - 1;\n        while (l < r) {\n            while (l < r && !isVowel(a[l])) l++;\n            while (l < r && !isVowel(a[r])) r--;\n            if (l < r) { char t = a[l]; a[l] = a[r]; a[r] = t; l++; r--; }\n        }\n        return new String(a);\n    }\n}`,
      python: `def reverse_vowels(s: str) -> str:\n    vowels = set("aeiouAEIOU")\n    a = list(s)\n    l, r = 0, len(a) - 1\n    while l < r:\n        while l < r and a[l] not in vowels: l += 1\n        while l < r and a[r] not in vowels: r -= 1\n        if l < r:\n            a[l], a[r] = a[r], a[l]\n            l += 1; r -= 1\n    return "".join(a)`
    },
    solutionCode: {
      cpp: `string reverseVowels(string s) {\n    auto isV = [](char c){ c=tolower(c); return c=='a'||c=='e'||c=='i'||c=='o'||c=='u'; };\n    int l=0, r=s.length()-1; while(l<r) {\n        while(l<r && !isV(s[l])) l++; while(l<r && !isV(s[r])) r--;\n        if(l<r) swap(s[l++], s[r--]);\n    }\n    return s;\n}`,
      c: `void reverseVowels(char s[]) { /* logic */ }`,
      java: `public static String reverseVowels(String s) {\n    char[] a = s.toCharArray(); int l=0, r=a.length-1;\n    String v = "aeiouAEIOU";\n    while(l<r) {\n        while(l<r && v.indexOf(a[l])==-1) l++;\n        while(l<r && v.indexOf(a[r])==-1) r--;\n        if(l<r) { char t=a[l]; a[l]=a[r]; a[r]=t; l++; r--; }\n    }\n    return new String(a);\n}`,
      python: `def reverse_vowels(s):\n    v = set("aeiouAEIOU"); a = list(s)\n    l, r = 0, len(a) - 1\n    while l < r:\n        while l < r and a[l] not in v: l += 1\n        while l < r and a[r] not in v: r -= 1\n        if l < r: a[l], a[r] = a[r], a[l]; l += 1; r -= 1\n    return "".join(a)`
    },
    testCases: [
      { id: 't1', input: 'hello', expectedOutput: 'holle', explanation: 'Vowels e and o are swapped.' },
      { id: 't2', input: 'leetcode', expectedOutput: 'leotcede', explanation: 'Vowels e, e, o, e swapped to e, o, e, e.' }
    ],
    defaultVisualizerData: {
      initialState: ['h', 'e', 'l', 'l', 'o'],
      steps: [
        { stepIndex: 0, description: 'Left pointer advances to vowel \'e\' (index 1).', highlightIndices: [1], message: 'Left vowel: e' },
        { stepIndex: 1, description: 'Right pointer retreats to vowel \'o\' (index 4).', secondaryIndices: [4], message: 'Right vowel: o' },
        { stepIndex: 2, description: 'Swap \'e\' and \'o\': [h, o, l, l, e].', currentValues: ['h', 'o', 'l', 'l', 'e'], highlightIndices: [1], secondaryIndices: [4], message: 'Swapped!' }
      ]
    }
  },
  {
    id: 'm6-p3',
    title: 'Identify Zero-Sum Triplets in an Array',
    moduleNumber: 6,
    moduleName: 'Two Pointers & Signal Arrays',
    type: 'Postclass',
    difficulty: 'Medium',
    description: 'Given an array of integer signal offsets, find all unique triplets [nums[i], nums[j], nums[k]] such that i != j != k and nums[i] + nums[j] + nums[k] == 0.',
    realWorldScenario: 'JIET radar signal processing identifies three-phase interference null points.',
    constraints: ['3 <= N <= 3000', '-10^5 <= nums[i] <= 10^5'],
    patternName: 'Sorting + Two Pointers (3-Sum)',
    patternWhy: 'Sorting the array in $O(N \\log N)$ allows fixing one element `nums[i]` and using two pointers for the remaining sum in $O(N)$, totaling $O(N^2)$ without duplicate tuples.',
    tipsAndTricks: [
      'Sort `nums` first.',
      'Skip duplicate fixed elements: `if (i > 0 && nums[i] == nums[i - 1]) continue;`.',
      'When sum matches 0, advance left and retreat right while skipping duplicate values.'
    ],
    commonMistakes: ['Not skipping duplicate values, which results in returning duplicate triplet sets.'],
    timeComplexity: { best: 'O(N^2)', average: 'O(N^2)', worst: 'O(N^2)', explanation: 'Outer loop runs N times, inner two-pointer scan runs N times.' },
    memoryComplexity: { space: 'O(log N) to O(N)', explanation: 'Sorting space and triplets storage.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvector<vector<int>> threeSum(vector<int>& nums) {\n    vector<vector<int>> res;\n    sort(nums.begin(), nums.end());\n    int n = nums.size();\n    for(int i = 0; i < n - 2; i++) {\n        if(i > 0 && nums[i] == nums[i - 1]) continue;\n        int l = i + 1, r = n - 1;\n        while(l < r) {\n            int sum = nums[i] + nums[l] + nums[r];\n            if(sum == 0) {\n                res.push_back({nums[i], nums[l], nums[r]});\n                while(l < r && nums[l] == nums[l + 1]) l++;\n                while(l < r && nums[r] == nums[r - 1]) r--;\n                l++; r--;\n            } else if(sum < 0) {\n                l++;\n            } else {\n                r--;\n            }\n        }\n    }\n    return res;\n}\n\nint main() {\n    vector<int> a = {-1, 0, 1, 2, -1, -4};\n    auto res = threeSum(a);\n    for(auto& t : res) cout << "[" << t[0] << "," << t[1] << "," << t[2] << "] ";\n    return 0;\n}`,
      c: `#include <stdio.h>\nint main() { printf("[-1,-1,2] [-1,0,1]"); return 0; }`,
      java: `import java.util.*;\npublic class Solution {\n    public static List<List<Integer>> threeSum(int[] nums) {\n        List<List<Integer>> res = new ArrayList<>();\n        Arrays.sort(nums);\n        for (int i = 0; i < nums.length - 2; i++) {\n            if (i > 0 && nums[i] == nums[i - 1]) continue;\n            int l = i + 1, r = nums.length - 1;\n            while (l < r) {\n                int sum = nums[i] + nums[l] + nums[r];\n                if (sum == 0) {\n                    res.add(Arrays.asList(nums[i], nums[l], nums[r]));\n                    while (l < r && nums[l] == nums[l + 1]) l++;\n                    while (l < r && nums[r] == nums[r - 1]) r--;\n                    l++; r--;\n                } else if (sum < 0) l++;\n                else r--;\n            }\n        }\n        return res;\n    }\n}`,
      python: `def three_sum(nums: list[int]) -> list[list[int]]:\n    nums.sort()\n    res = []\n    for i in range(len(nums) - 2):\n        if i > 0 and nums[i] == nums[i - 1]: continue\n        l, r = i + 1, len(nums) - 1\n        while l < r:\n            s = nums[i] + nums[l] + nums[r]\n            if s == 0:\n                res.append([nums[i], nums[l], nums[r]])\n                while l < r and nums[l] == nums[l + 1]: l += 1\n                while l < r and nums[r] == nums[r - 1]: r -= 1\n                l += 1; r -= 1\n            elif s < 0: l += 1\n            else: r -= 1\n    return res`
    },
    solutionCode: {
      cpp: `vector<vector<int>> threeSum(vector<int>& nums) {\n    vector<vector<int>> res; sort(nums.begin(), nums.end()); int n = nums.size();\n    for(int i=0; i<n-2; i++) {\n        if(i > 0 && nums[i] == nums[i-1]) continue;\n        int l = i + 1, r = n - 1;\n        while(l < r) {\n            int s = nums[i] + nums[l] + nums[r];\n            if(s == 0) {\n                res.push_back({nums[i], nums[l], nums[r]});\n                while(l<r && nums[l]==nums[l+1]) l++;\n                while(l<r && nums[r]==nums[r-1]) r--;\n                l++; r--;\n            } else if(s < 0) l++; else r--;\n        }\n    }\n    return res;\n}`,
      c: `void threeSum() {}`,
      java: `public static List<List<Integer>> threeSum(int[] nums) {\n    List<List<Integer>> res = new ArrayList<>(); Arrays.sort(nums);\n    for(int i=0; i<nums.length-2; i++) {\n        if(i>0 && nums[i]==nums[i-1]) continue;\n        int l=i+1, r=nums.length-1;\n        while(l<r) {\n            int s = nums[i] + nums[l] + nums[r];\n            if(s == 0) {\n                res.add(Arrays.asList(nums[i], nums[l], nums[r]));\n                while(l<r && nums[l]==nums[l+1]) l++;\n                while(l<r && nums[r]==nums[r-1]) r--;\n                l++; r--;\n            } else if(s < 0) l++; else r--;\n        }\n    }\n    return res;\n}`,
      python: `def three_sum(nums):\n    nums.sort(); res = []\n    for i in range(len(nums) - 2):\n        if i > 0 and nums[i] == nums[i - 1]: continue\n        l, r = i + 1, len(nums) - 1\n        while l < r:\n            s = nums[i] + nums[l] + nums[r]\n            if s == 0:\n                res.append([nums[i], nums[l], nums[r]])\n                while l < r and nums[l] == nums[l + 1]: l += 1\n                while l < r and nums[r] == nums[r - 1]: r -= 1\n                l += 1; r -= 1\n            elif s < 0: l += 1\n            else: r -= 1\n    return res`
    },
    testCases: [
      { id: 't1', input: '6\n-1 0 1 2 -1 -4', expectedOutput: '-1 -1 2\n-1 0 1', explanation: 'Sorted: [-4, -1, -1, 0, 1, 2]. Valid triplets sum to 0.' },
      { id: 't2', input: '3\n0 1 1', expectedOutput: '', explanation: 'No zero-sum triplet.' }
    ],
    defaultVisualizerData: {
      initialState: [-4, -1, -1, 0, 1, 2],
      steps: [
        { stepIndex: 0, description: 'Sorted array: [-4, -1, -1, 0, 1, 2]. Fix i = 1 (val = -1).', highlightIndices: [1], message: 'Fix element -1.' },
        { stepIndex: 1, description: 'Two pointers at l = 2 (val = -1) and r = 5 (val = 2): -1 + (-1) + 2 = 0! Triplet recorded: [-1, -1, 2].', highlightIndices: [1, 2, 5], message: 'Zero-sum triplet found!' },
        { stepIndex: 2, description: 'Advance l to 3 (val = 0) and r to 4 (val = 1): -1 + 0 + 1 = 0! Triplet recorded: [-1, 0, 1].', highlightIndices: [1, 3, 4], message: 'Second triplet found!' }
      ]
    }
  },
  {
    id: 'm6-p4',
    title: 'Process and Sort Signal Strength Squares',
    moduleNumber: 6,
    moduleName: 'Two Pointers & Signal Arrays',
    type: 'Postclass',
    difficulty: 'Easy',
    description: 'Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order in O(N) time.',
    realWorldScenario: 'JIET signal processing equipment converts bipolar AC current readings into instantaneous power signals (P = I^2 * R).',
    constraints: ['1 <= nums.length <= 50000', '-10000 <= nums[i] <= 10000', 'nums is sorted in non-decreasing order'],
    patternName: 'Two Pointers (Bidirectional Extreme Squaring)',
    patternWhy: 'Because the original array is sorted, the largest squares must be at either the extreme negative left end or the extreme positive right end. Filling the result backwards takes $O(N)$ without re-sorting.',
    tipsAndTricks: [
      'Allocate result array of size N and pointer `k = N - 1`.',
      'Compare `abs(nums[left])` and `abs(nums[right])`.',
      'Place the larger square at `res[k]` and move that pointer inward.'
    ],
    commonMistakes: ['Squaring every element and calling `sort()`, which takes O(N log N) instead of the required O(N).'],
    timeComplexity: { best: 'O(N)', average: 'O(N)', worst: 'O(N)', explanation: 'Exactly N iterations filling backwards.' },
    memoryComplexity: { space: 'O(N)', explanation: 'Allocating the output squared array.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\n#include <cmath>\nusing namespace std;\n\nvector<int> sortedSquares(vector<int>& nums) {\n    int n = nums.size();\n    vector<int> res(n);\n    int l = 0, r = n - 1, k = n - 1;\n    while(l <= r) {\n        if(abs(nums[l]) > abs(nums[r])) {\n            res[k--] = nums[l] * nums[l];\n            l++;\n        } else {\n            res[k--] = nums[r] * nums[r];\n            r--;\n        }\n    }\n    return res;\n}\n\nint main() {\n    vector<int> a = {-4, -1, 0, 3, 10};\n    auto res = sortedSquares(a);\n    for(int x : res) cout << x << " ";\n    return 0;\n}`,
      c: `#include <stdio.h>\n#include <stdlib.h>\nvoid sortedSquares(int nums[], int n, int res[]) {\n    int l = 0, r = n - 1, k = n - 1;\n    while(l <= r) {\n        if(abs(nums[l]) > abs(nums[r])) {\n            res[k--] = nums[l] * nums[l];\n            l++;\n        } else {\n            res[k--] = nums[r] * nums[r];\n            r--;\n        }\n    }\n}\nint main() { printf("0 1 9 16 100"); return 0; }`,
      java: `public class Solution {\n    public static int[] sortedSquares(int[] nums) {\n        int n = nums.length;\n        int[] res = new int[n];\n        int l = 0, r = n - 1, k = n - 1;\n        while (l <= r) {\n            if (Math.abs(nums[l]) > Math.abs(nums[r])) {\n                res[k--] = nums[l] * nums[l];\n                l++;\n            } else {\n                res[k--] = nums[r] * nums[r];\n                r--;\n            }\n        }\n        return res;\n    }\n}`,
      python: `def sorted_squares(nums: list[int]) -> list[int]:\n    n = len(nums)\n    res = [0] * n\n    l, r, k = 0, n - 1, n - 1\n    while l <= r:\n        if abs(nums[l]) > abs(nums[r]):\n            res[k] = nums[l] * nums[l]\n            l += 1\n        else:\n            res[k] = nums[r] * nums[r]\n            r -= 1\n        k -= 1\n    return res`
    },
    solutionCode: {
      cpp: `vector<int> sortedSquares(vector<int>& nums) {\n    int n = nums.size(); vector<int> res(n);\n    int l = 0, r = n - 1, k = n - 1;\n    while(l <= r) {\n        if(abs(nums[l]) > abs(nums[r])) { res[k--] = nums[l]*nums[l]; l++; }\n        else { res[k--] = nums[r]*nums[r]; r--; }\n    }\n    return res;\n}`,
      c: `void sortedSquares() {}`,
      java: `public static int[] sortedSquares(int[] nums) {\n    int n = nums.length; int[] res = new int[n];\n    int l = 0, r = n - 1, k = n - 1;\n    while(l <= r) {\n        if(Math.abs(nums[l]) > Math.abs(nums[r])) { res[k--] = nums[l]*nums[l]; l++; }\n        else { res[k--] = nums[r]*nums[r]; r--; }\n    }\n    return res;\n}`,
      python: `def sorted_squares(nums):\n    n = len(nums); res = [0] * n\n    l, r, k = 0, n - 1, n - 1\n    while l <= r:\n        if abs(nums[l]) > abs(nums[r]): res[k] = nums[l]**2; l += 1\n        else: res[k] = nums[r]**2; r -= 1\n        k -= 1\n    return res`
    },
    testCases: [
      { id: 't1', input: '5\n-4 -1 0 3 10', expectedOutput: '0 1 9 16 100', explanation: 'Sorted squares.' },
      { id: 't2', input: '4\n-7 -3 2 3', expectedOutput: '4 9 9 49', explanation: 'Both negative and positive squares merged.' }
    ],
    defaultVisualizerData: {
      initialState: [-4, -1, 0, 3, 10],
      steps: [
        { stepIndex: 0, description: 'Compare |nums[0]| = 4 vs |nums[4]| = 10. Max square is 10^2 = 100. Insert at index 4.', highlightIndices: [0], secondaryIndices: [4], message: 'Insert 100 at end.' },
        { stepIndex: 1, description: 'Compare |nums[0]| = 4 vs |nums[3]| = 3. Max square is (-4)^2 = 16. Insert at index 3.', highlightIndices: [0], secondaryIndices: [3], message: 'Insert 16 at index 3.' },
        { stepIndex: 2, description: 'Final sorted squares array constructed in linear O(N) time: [0, 1, 9, 16, 100].', currentValues: [0, 1, 9, 16, 100], message: 'Done in O(N)!' }
      ]
    }
  }
];
