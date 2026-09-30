import { Language } from '../types';

export interface MockMcq {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface MockCodingQuestion {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  hints: string[];
  revealLogic: string;
  timeTarget: string;
  spaceTarget: string;
  starterCode: Record<Language, string>;
  testCases: {
    input: string;
    expected: string;
  }[];
}

export interface MockAssessment {
  id: string;
  title: string;
  subtitle: string;
  durationMinutes: number; // 30 mins
  description: string;
  targetTier: string;
  badgeUnlockedOnPass: string;
  badgeTitleOnPass: string;
  mcqs: MockMcq[];
  codingQuestions: MockCodingQuestion[];
}

export const mockAssessments: MockAssessment[] = [
  {
    id: 'mock-1',
    title: 'Assessment 1: Tier-1 Foundation & Speed Qualifier',
    subtitle: '30-Minute Screening Simulation · 5 MCQs + 5 Coding Challenges',
    durationMinutes: 30,
    description: 'Simulates the high-speed Online Assessment (OA) used by Amazon, Cognizant GenC, and TCS Digital. Tests rapid algorithmic intuition and syntax accuracy under strict time constraints.',
    targetTier: 'Core IT & Product Screening',
    badgeUnlockedOnPass: 'badge-mock-1',
    badgeTitleOnPass: 'Speed Qualifier Champion',
    mcqs: [
      {
        id: 'm1-q1',
        question: 'What is the tightest upper bound time complexity of inserting N elements into an initially empty balanced AVL tree?',
        options: ['O(N)', 'O(N log N)', 'O(N^2)', 'O(log N)'],
        correctIndex: 1,
        explanation: 'Each insertion takes O(log N) due to rotations; for N items, the total is O(N log N).'
      },
      {
        id: 'm1-q2',
        question: 'Which algorithmic paradigm does the Floyd-Warshall all-pairs shortest path algorithm utilize?',
        options: ['Greedy Method', 'Dynamic Programming', 'Divide and Conquer', 'Backtracking'],
        correctIndex: 1,
        explanation: 'Floyd-Warshall uses Dynamic Programming with recurrence D[i][j] = min(D[i][j], D[i][k] + D[k][j]).'
      },
      {
        id: 'm1-q3',
        question: 'A pipe can fill a cistern in 12 hours while a waste pipe empties it in 20 hours. If both are opened together, in how many hours will the empty cistern be filled?',
        options: ['24 hours', '30 hours', '32 hours', '35 hours'],
        correctIndex: 1,
        explanation: 'Net rate = 1/12 - 1/20 = (5 - 3)/60 = 2/60 = 1/30. Time taken = 30 hours.'
      },
      {
        id: 'm1-q4',
        question: 'What is the auxiliary memory required by an in-place two-pointer palindrome verification algorithm?',
        options: ['O(N)', 'O(log N)', 'O(1)', 'O(N/2)'],
        correctIndex: 2,
        explanation: 'Two pointers only require two scalar indices (left and right), achieving O(1) space.'
      },
      {
        id: 'm1-q5',
        question: 'Which page replacement algorithm suffers from Belady’s Anomaly where allocating more page frames increases page faults?',
        options: ['Least Recently Used (LRU)', 'First-In-First-Out (FIFO)', 'Optimal Page Replacement', 'LFU'],
        correctIndex: 1,
        explanation: 'FIFO is not a stack algorithm and exhibits Belady’s Anomaly under specific reference strings.'
      }
    ],
    codingQuestions: [
      {
        id: 'm1-c1',
        title: 'Check Palindromic Identity',
        difficulty: 'Easy',
        description: 'Given a clean alphanumeric string S, determine if S reads the same backward as forward in O(1) space.',
        hints: [
          'Use two pointers starting at index 0 and index N-1.',
          'Compare characters moving inward until left >= right.',
          'Return true if all matching pairs agree.'
        ],
        revealLogic: 'Maintain left=0 and right=N-1. At each step, if S[left] != S[right], immediately return "false". Otherwise increment left and decrement right. If loop completes, return "true". Operates strictly in O(N) time and O(1) auxiliary space.',
        timeTarget: 'O(N)',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nbool isPalindrome(string s) {\n    int l = 0, r = s.length() - 1;\n    while(l < r) {\n        if(s[l++] != s[r--]) return false;\n    }\n    return true;\n}\n\nint main() {\n    string s;\n    if(cin >> s) {\n        cout << (isPalindrome(s) ? "true" : "false") << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <string.h>\n#include <stdbool.h>\n\nbool isPalindrome(char *s) {\n    int l = 0, r = strlen(s) - 1;\n    while(l < r) {\n        if(s[l++] != s[r--]) return false;\n    }\n    return true;\n}\n\nint main() {\n    char s[256];\n    if(scanf("%s", s) == 1) {\n        printf("%s\\n", isPalindrome(s) ? "true" : "false");\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    public static boolean isPalindrome(String s) {\n        int l = 0, r = s.length() - 1;\n        while(l < r) {\n            if(s.charAt(l++) != s.charAt(r--)) return false;\n        }\n        return true;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNext()) {\n            System.out.println(isPalindrome(sc.next()) ? "true" : "false");\n        }\n    }\n}',
          python: 'import sys\n\ndef is_palindrome(s: str) -> bool:\n    return s == s[::-1]\n\nif __name__ == "__main__":\n    line = sys.stdin.read().strip()\n    if line:\n        print("true" if is_palindrome(line) else "false")'
        },
        testCases: [
          { input: 'racecar', expected: 'true' },
          { input: 'jietcollege', expected: 'false' },
          { input: 'madam', expected: 'true' }
        ]
      },
      {
        id: 'm1-c2',
        title: 'Count Trailing Zeros in Factorial',
        difficulty: 'Easy',
        description: 'Given an integer N, count how many trailing zeros appear in N! without computing the full factorial.',
        hints: [
          'Trailing zeros are created by pairs of 2 and 5.',
          'Factors of 5 are significantly fewer than factors of 2.',
          'Sum up floor(N/5) + floor(N/25) + floor(N/125)...'
        ],
        revealLogic: 'Count Legendre factors of 5: while N >= 5, add N // 5 to count, then update N = N // 5. Runs in O(log5 N) time and O(1) space, avoiding overflow completely.',
        timeTarget: 'O(log N)',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\nusing namespace std;\n\nint trailingZeros(int n) {\n    int count = 0;\n    while(n >= 5) {\n        count += n / 5;\n        n /= 5;\n    }\n    return count;\n}\n\nint main() {\n    int n;\n    if(cin >> n) cout << trailingZeros(n) << endl;\n    return 0;\n}',
          c: '#include <stdio.h>\n\nint trailingZeros(int n) {\n    int count = 0;\n    while(n >= 5) {\n        count += n / 5;\n        n /= 5;\n    }\n    return count;\n}\n\nint main() {\n    int n;\n    if(scanf("%d", &n) == 1) printf("%d\\n", trailingZeros(n));\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    public static int trailingZeros(int n) {\n        int c = 0;\n        while(n >= 5) {\n            c += n / 5;\n            n /= 5;\n        }\n        return c;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) System.out.println(trailingZeros(sc.nextInt()));\n    }\n}',
          python: 'import sys\n\ndef trailing_zeros(n: int) -> int:\n    c = 0\n    while n >= 5:\n        c += n // 5\n        n //= 5\n    return c\n\nif __name__ == "__main__":\n    line = sys.stdin.read().strip()\n    if line:\n        print(trailing_zeros(int(line)))'
        },
        testCases: [
          { input: '25', expected: '6' },
          { input: '10', expected: '2' },
          { input: '100', expected: '24' }
        ]
      },
      {
        id: 'm1-c3',
        title: 'Reverse Characters in Fixed Chunks',
        difficulty: 'Medium',
        description: 'Given string S and chunk size K, reverse the characters in every consecutive block of size K.',
        hints: [
          'Iterate through the string with step size K.',
          'For each block [i, min(i+K-1, N-1)], swap characters symmetrically.',
          'Ensure string modification happens in-place.'
        ],
        revealLogic: 'Step through indices i = 0, K, 2K... and reverse substring between i and min(i + K - 1, len - 1). Guaranteed O(N) execution time with zero secondary array allocation.',
        timeTarget: 'O(N)',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int k;\n    string s;\n    if(cin >> k >> s) {\n        int n = s.length();\n        for(int i = 0; i < n; i += k) {\n            int r = min(i + k, n);\n            reverse(s.begin() + i, s.begin() + r);\n        }\n        cout << s << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <string.h>\n\nvoid rev(char *s, int l, int r) {\n    while(l < r) {\n        char tmp = s[l];\n        s[l++] = s[r];\n        s[r--] = tmp;\n    }\n}\n\nint main() {\n    int k;\n    char s[512];\n    if(scanf("%d %s", &k, s) == 2) {\n        int n = strlen(s);\n        for(int i = 0; i < n; i += k) {\n            int r = i + k - 1;\n            if(r >= n) r = n - 1;\n            rev(s, i, r);\n        }\n        printf("%s\\n", s);\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNext()) {\n            int k = sc.nextInt();\n            char[] a = sc.next().toCharArray();\n            for(int i = 0; i < a.length; i += k) {\n                int l = i, r = Math.min(i + k - 1, a.length - 1);\n                while(l < r) {\n                    char t = a[l]; a[l++] = a[r]; a[r--] = t;\n                }\n            }\n            System.out.println(new String(a));\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    parts = sys.stdin.read().split()\n    if len(parts) >= 2:\n        k = int(parts[0])\n        s = list(parts[1])\n        for i in range(0, len(s), k):\n            s[i:i+k] = reversed(s[i:i+k])\n        print("".join(s))\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '3 abcdefghi', expected: 'cbafedihg' },
          { input: '2 jietconnect', expected: 'ijteocnnec' }
        ]
      },
      {
        id: 'm1-c4',
        title: 'Search in Rotated Sorted Map',
        difficulty: 'Medium',
        description: 'Given an array rotated at an unknown pivot and target X, find the 0-based index of X in strictly O(log N) time, or -1 if absent.',
        hints: [
          'In any rotated sorted array, at least one half [low..mid] or [mid..high] is always sorted.',
          'Check if target lies inside the sorted half.',
          'Narrow down search boundaries accordingly.'
        ],
        revealLogic: 'Binary search: If A[low] <= A[mid], the left half is sorted; check if target is between A[low] and A[mid]. Otherwise, right half is sorted; check if target is between A[mid] and A[high]. Halves search space at each iteration in O(log N).',
        timeTarget: 'O(log N)',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint searchRotated(vector<int>& a, int target) {\n    int l = 0, r = a.size() - 1;\n    while(l <= r) {\n        int m = l + (r - l) / 2;\n        if(a[m] == target) return m;\n        if(a[l] <= a[m]) {\n            if(target >= a[l] && target < a[m]) r = m - 1;\n            else l = m + 1;\n        } else {\n            if(target > a[m] && target <= a[r]) l = m + 1;\n            else r = m - 1;\n        }\n    }\n    return -1;\n}\n\nint main() {\n    int n, target;\n    if(cin >> n >> target) {\n        vector<int> a(n);\n        for(int i = 0; i < n; i++) cin >> a[i];\n        cout << searchRotated(a, target) << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n\nint searchRotated(int a[], int n, int target) {\n    int l = 0, r = n - 1;\n    while(l <= r) {\n        int m = l + (r - l) / 2;\n        if(a[m] == target) return m;\n        if(a[l] <= a[m]) {\n            if(target >= a[l] && target < a[m]) r = m - 1;\n            else l = m + 1;\n        } else {\n            if(target > a[m] && target <= a[r]) l = m + 1;\n            else r = m - 1;\n        }\n    }\n    return -1;\n}\n\nint main() {\n    int n, target, a[100];\n    if(scanf("%d %d", &n, &target) == 2) {\n        for(int i = 0; i < n; i++) scanf("%d", &a[i]);\n        printf("%d\\n", searchRotated(a, n, target));\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int target = sc.nextInt();\n            int[] a = new int[n];\n            for(int i = 0; i < n; i++) a[i] = sc.nextInt();\n            int l = 0, r = n - 1, ans = -1;\n            while(l <= r) {\n                int m = l + (r - l) / 2;\n                if(a[m] == target) { ans = m; break; }\n                if(a[l] <= a[m]) {\n                    if(target >= a[l] && target < a[m]) r = m - 1;\n                    else l = m + 1;\n                } else {\n                    if(target > a[m] && target <= a[r]) l = m + 1;\n                    else r = m - 1;\n                }\n            }\n            System.out.println(ans);\n        }\n    }\n}',
          python: 'import sys\n\ndef search_rotated(a, target):\n    l, r = 0, len(a) - 1\n    while l <= r:\n        m = (l + r) // 2\n        if a[m] == target:\n            return m\n        if a[l] <= a[m]:\n            if a[l] <= target < a[m]:\n                r = m - 1\n            else:\n                l = m + 1\n        else:\n            if a[m] < target <= a[r]:\n                l = m + 1\n            else:\n                r = m - 1\n    return -1\n\nif __name__ == "__main__":\n    tokens = list(map(int, sys.stdin.read().split()))\n    if len(tokens) >= 2:\n        n, target = tokens[0], tokens[1]\n        arr = tokens[2:2+n]\n        print(search_rotated(arr, target))'
        },
        testCases: [
          { input: '7 0 4 5 6 7 0 1 2', expected: '4' },
          { input: '7 3 4 5 6 7 0 1 2', expected: '-1' }
        ]
      },
      {
        id: 'm1-c5',
        title: 'Task Synchronization LCM Interval',
        difficulty: 'Easy',
        description: 'Calculate the minimum cycle interval (LCM) at which two independent periodic processes of periods A and B synchronize.',
        hints: [
          'Recall the algebraic relationship: LCM(A, B) = (A * B) / GCD(A, B).',
          'Calculate GCD using the Euclidean algorithm.',
          'Divide before multiplying to prevent integer overflow.'
        ],
        revealLogic: 'Euclidean GCD: while b > 0, temp = b, b = a % b, a = temp. Then LCM = (a / gcd) * b. Runs in O(log(min(A, B))) time with O(1) space.',
        timeTarget: 'O(log(min(A,B)))',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\nusing namespace std;\n\nlong long gcd(long long a, long long b) {\n    while(b) { long long t = b; b = a % b; a = t; }\n    return a;\n}\n\nint main() {\n    long long a, b;\n    if(cin >> a >> b) {\n        long long ans = (a / gcd(a, b)) * b;\n        cout << ans << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n\nlong long gcd(long long a, long long b) {\n    while(b) { long long t = b; b = a % b; a = t; }\n    return a;\n}\n\nint main() {\n    long long a, b;\n    if(scanf("%lld %lld", &a, &b) == 2) {\n        printf("%lld\\n", (a / gcd(a, b)) * b);\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    static long gcd(long a, long b) {\n        while(b != 0) { long t = b; b = a % b; a = t; }\n        return a;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextLong()) {\n            long a = sc.nextLong(), b = sc.nextLong();\n            System.out.println((a / gcd(a, b)) * b);\n        }\n    }\n}',
          python: 'import sys, math\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        a, b = nums[0], nums[1]\n        print((a * b) // math.gcd(a, b))\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '4 6', expected: '12' },
          { input: '15 25', expected: '75' }
        ]
      }
    ]
  },
  {
    id: 'mock-2',
    title: 'Assessment 2: Data Structures & Linear Algorithms Challenge',
    subtitle: '30-Minute Screening Simulation · 5 MCQs + 5 Coding Challenges',
    durationMinutes: 30,
    description: 'Focuses on linear algorithmic manipulation, two-pointer coordination, and interval consolidation favored by product startups and mid-tier tech firms.',
    targetTier: 'Product Engineering Foundation',
    badgeUnlockedOnPass: 'badge-mock-2',
    badgeTitleOnPass: 'Linear Algorithmic Maestro',
    mcqs: [
      {
        id: 'm2-q1',
        question: 'Which of the following data structures provides O(1) amortized insertion, O(1) peek, and O(1) pop?',
        options: ['Stack using dynamic array', 'Binary Min-Heap', 'Singly Linked List without tail', 'Red-Black Tree'],
        correctIndex: 0,
        explanation: 'A stack implemented via dynamic array (e.g. vector) achieves amortized O(1) push and O(1) pop.'
      },
      {
        id: 'm2-q2',
        question: 'What is the maximum number of nodes in a binary tree of height H (root at height 0)?',
        options: ['2^H', '2^(H+1) - 1', '2^(H-1)', '2*H + 1'],
        correctIndex: 1,
        explanation: 'Sum of geometric progression from level 0 to H gives 2^(H+1) - 1 nodes.'
      },
      {
        id: 'm2-q3',
        question: 'A train traveling at 72 km/h crosses a 200 m long platform in 22 seconds. What is the length of the train?',
        options: ['220 m', '240 m', '250 m', '280 m'],
        correctIndex: 1,
        explanation: 'Speed = 72 * (5/18) = 20 m/s. Distance = 20 * 22 = 440 m. Train length = 440 - 200 = 240 m.'
      },
      {
        id: 'm2-q4',
        question: 'In a round-robin CPU scheduling algorithm, what occurs when the time quantum is chosen to be extremely large?',
        options: ['Throughput maximizes to infinity', 'It behaves identically to First-Come-First-Served (FCFS)', 'Deadlock occurs', 'Priority inversion occurs'],
        correctIndex: 1,
        explanation: 'When quantum exceeds the longest burst time, processes run to completion in order of arrival, mimicking FCFS.'
      },
      {
        id: 'm2-q5',
        question: 'Which SQL constraint guarantees that all column values in a database table are unique and not null?',
        options: ['UNIQUE', 'FOREIGN KEY', 'PRIMARY KEY', 'CHECK'],
        correctIndex: 2,
        explanation: 'PRIMARY KEY implicitly enforces UNIQUE and NOT NULL constraints on the designated columns.'
      }
    ],
    codingQuestions: [
      {
        id: 'm2-c1',
        title: 'Reverse Vowels in Username',
        difficulty: 'Easy',
        description: 'Given string S, reverse only the vowels (a, e, i, o, u, case-insensitive) in-place without altering consonants.',
        hints: [
          'Initialize left=0 and right=len-1.',
          'Advance left while char is not a vowel; decrement right while char is not a vowel.',
          'Swap vowels when both pointers land on vowels.'
        ],
        revealLogic: 'Two pointers converging from ends. Skipping non-vowels takes linear total steps. Swapping happens strictly between vowels. Executes in O(N) time with O(1) space.',
        timeTarget: 'O(N)',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nbool isVowel(char c) {\n    c = tolower(c);\n    return c == \'a\' || c == \'e\' || c == \'i\' || c == \'o\' || c == \'u\';\n}\n\nint main() {\n    string s;\n    if(cin >> s) {\n        int l = 0, r = s.length() - 1;\n        while(l < r) {\n            while(l < r && !isVowel(s[l])) l++;\n            while(l < r && !isVowel(s[r])) r--;\n            if(l < r) swap(s[l++], s[r--]);\n        }\n        cout << s << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\n#include <stdbool.h>\n\nbool isVowel(char c) {\n    c = tolower(c);\n    return c == \'a\' || c == \'e\' || c == \'i\' || c == \'o\' || c == \'u\';\n}\n\nint main() {\n    char s[256];\n    if(scanf("%s", s) == 1) {\n        int l = 0, r = strlen(s) - 1;\n        while(l < r) {\n            while(l < r && !isVowel(s[l])) l++;\n            while(l < r && !isVowel(s[r])) r--;\n            if(l < r) {\n                char t = s[l]; s[l++] = s[r]; s[r--] = t;\n            }\n        }\n        printf("%s\\n", s);\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    static boolean isV(char c) {\n        c = Character.toLowerCase(c);\n        return c==\'a\'||c==\'e\'||c==\'i\'||c==\'o\'||c==\'u\';\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNext()) {\n            char[] a = sc.next().toCharArray();\n            int l = 0, r = a.length - 1;\n            while(l < r) {\n                while(l < r && !isV(a[l])) l++;\n                while(l < r && !isV(a[r])) r--;\n                if(l < r) { char t = a[l]; a[l++] = a[r]; a[r--] = t; }\n            }\n            System.out.println(new String(a));\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    s = list(sys.stdin.read().strip())\n    vowels = set("aeiouAEIOU")\n    l, r = 0, len(s) - 1\n    while l < r:\n        while l < r and s[l] not in vowels: l += 1\n        while l < r and s[r] not in vowels: r -= 1\n        if l < r:\n            s[l], s[r] = s[r], s[l]\n            l += 1; r -= 1\n    print("".join(s))\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: 'hello', expected: 'holle' },
          { input: 'jietcollege', expected: 'jeotcelligi' }
        ]
      },
      {
        id: 'm2-c2',
        title: 'Reverse Words in a Sentence',
        difficulty: 'Easy',
        description: 'Given a sentence of space-separated words, reverse the characters of each individual word while maintaining original word order.',
        hints: [
          'Locate word boundaries delineated by spaces.',
          'Reverse the letters between the start and end of each word.',
          'Append words back into a single output string.'
        ],
        revealLogic: 'Scan string; when encountering a word, find its boundary and reverse in-place. O(N) linear time and O(1) extra space beyond string buffer.',
        timeTarget: 'O(N)',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\n#include <string>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string line, word;\n    if(getline(cin, line)) {\n        stringstream ss(line);\n        string res = "";\n        while(ss >> word) {\n            reverse(word.begin(), word.end());\n            if(!res.empty()) res += " ";\n            res += word;\n        }\n        cout << res << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <string.h>\n\nvoid rev(char *s, int l, int r) {\n    while(l < r) { char t = s[l]; s[l++] = s[r]; s[r--] = t; }\n}\n\nint main() {\n    char s[512];\n    if(fgets(s, sizeof(s), stdin)) {\n        int n = strlen(s);\n        if(n > 0 && s[n-1] == \'\\n\') s[--n] = \'\\0\';\n        int start = 0;\n        for(int i = 0; i <= n; i++) {\n            if(s[i] == \' \' || s[i] == \'\\0\') {\n                rev(s, start, i - 1);\n                start = i + 1;\n            }\n        }\n        printf("%s\\n", s);\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextLine()) {\n            String[] w = sc.nextLine().split(" ");\n            StringBuilder sb = new StringBuilder();\n            for(int i = 0; i < w.length; i++) {\n                sb.append(new StringBuilder(w[i]).reverse().toString());\n                if(i < w.length - 1) sb.append(" ");\n            }\n            System.out.println(sb.toString());\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    line = sys.stdin.read().strip()\n    if line:\n        words = line.split()\n        print(" ".join(w[::-1] for w in words))\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: 'jiet engineering students', expected: 'teij gnireenigne stneduts' },
          { input: 'coding is art', expected: 'gnidoc si tra' }
        ]
      },
      {
        id: 'm2-c3',
        title: 'Sort Signal Strength Squares',
        difficulty: 'Easy',
        description: 'Given a non-decreasing sorted array of integers, return the squares of each number sorted in non-decreasing order in strictly O(N) time.',
        hints: [
          'Negative numbers squared become large positive numbers.',
          'The largest squares must be at either the far left or far right of the array.',
          'Use two pointers starting from ends and populate the result array from back to front.'
        ],
        revealLogic: 'Two pointers at left=0 and right=N-1. Compare abs(A[left]) and abs(A[right]). Place the larger square at result[index--] and advance pointer inward. Achieves O(N) linear time without general O(N log N) sorting.',
        timeTarget: 'O(N)',
        spaceTarget: 'O(N)',
        starterCode: {
          cpp: '#include <iostream>\n#include <vector>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n;\n    if(cin >> n) {\n        vector<int> a(n), res(n);\n        for(int i = 0; i < n; i++) cin >> a[i];\n        int l = 0, r = n - 1, idx = n - 1;\n        while(l <= r) {\n            if(abs(a[l]) > abs(a[r])) {\n                res[idx--] = a[l] * a[l];\n                l++;\n            } else {\n                res[idx--] = a[r] * a[r];\n                r--;\n            }\n        }\n        for(int i = 0; i < n; i++) cout << res[i] << (i == n-1 ? "" : " ");\n        cout << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n;\n    if(scanf("%d", &n) == 1) {\n        int a[100], res[100];\n        for(int i = 0; i < n; i++) scanf("%d", &a[i]);\n        int l = 0, r = n - 1, idx = n - 1;\n        while(l <= r) {\n            if(abs(a[l]) > abs(a[r])) {\n                res[idx--] = a[l] * a[l]; l++;\n            } else {\n                res[idx--] = a[r] * a[r]; r--;\n            }\n        }\n        for(int i = 0; i < n; i++) printf("%d%s", res[i], i == n-1 ? "" : " ");\n        printf("\\n");\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] a = new int[n];\n            for(int i = 0; i < n; i++) a[i] = sc.nextInt();\n            int[] res = new int[n];\n            int l = 0, r = n - 1, idx = n - 1;\n            while(l <= r) {\n                if(Math.abs(a[l]) > Math.abs(a[r])) {\n                    res[idx--] = a[l] * a[l]; l++;\n                } else {\n                    res[idx--] = a[r] * a[r]; r--;\n                }\n            }\n            for(int i = 0; i < n; i++) System.out.print(res[i] + (i == n-1 ? "" : " "));\n            System.out.println();\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    tok = list(map(int, sys.stdin.read().split()))\n    if tok:\n        n = tok[0]\n        a = tok[1:1+n]\n        l, r = 0, n - 1\n        res = [0] * n\n        idx = n - 1\n        while l <= r:\n            if abs(a[l]) > abs(a[r]):\n                res[idx] = a[l] * a[l]\n                l += 1\n            else:\n                res[idx] = a[r] * a[r]\n                r -= 1\n            idx -= 1\n        print(" ".join(map(str, res)))\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '5 -4 -1 0 3 10', expected: '0 1 9 16 100' },
          { input: '4 -7 -3 2 3', expected: '4 9 9 49' }
        ]
      },
      {
        id: 'm2-c4',
        title: 'Identify First and Last Occurrence of Event',
        difficulty: 'Medium',
        description: 'Given a sorted array with possible duplicate values, return the first and last occurrence indices of target X in O(log N) time.',
        hints: [
          'Run binary search twice.',
          'For first occurrence: when A[mid] == X, continue searching in left half (high = mid - 1).',
          'For last occurrence: when A[mid] == X, continue searching in right half (low = mid + 1).'
        ],
        revealLogic: 'Two modified binary search routines: finding first index records ans and sets right=mid-1; finding last index records ans and sets left=mid+1. Runs in 2 * O(log N) = O(log N) overall.',
        timeTarget: 'O(log N)',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint findFirst(vector<int>& a, int t) {\n    int l = 0, r = a.size() - 1, res = -1;\n    while(l <= r) {\n        int m = l + (r - l) / 2;\n        if(a[m] == t) { res = m; r = m - 1; }\n        else if(a[m] < t) l = m + 1;\n        else r = m - 1;\n    }\n    return res;\n}\n\nint findLast(vector<int>& a, int t) {\n    int l = 0, r = a.size() - 1, res = -1;\n    while(l <= r) {\n        int m = l + (r - l) / 2;\n        if(a[m] == t) { res = m; l = m + 1; }\n        else if(a[m] < t) l = m + 1;\n        else r = m - 1;\n    }\n    return res;\n}\n\nint main() {\n    int n, t;\n    if(cin >> n >> t) {\n        vector<int> a(n);\n        for(int i = 0; i < n; i++) cin >> a[i];\n        cout << findFirst(a, t) << " " << findLast(a, t) << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n\nint findFirst(int a[], int n, int t) {\n    int l = 0, r = n - 1, res = -1;\n    while(l <= r) {\n        int m = l + (r - l) / 2;\n        if(a[m] == t) { res = m; r = m - 1; }\n        else if(a[m] < t) l = m + 1;\n        else r = m - 1;\n    }\n    return res;\n}\n\nint findLast(int a[], int n, int t) {\n    int l = 0, r = n - 1, res = -1;\n    while(l <= r) {\n        int m = l + (r - l) / 2;\n        if(a[m] == t) { res = m; l = m + 1; }\n        else if(a[m] < t) l = m + 1;\n        else r = m - 1;\n    }\n    return res;\n}\n\nint main() {\n    int n, t, a[100];\n    if(scanf("%d %d", &n, &t) == 2) {\n        for(int i = 0; i < n; i++) scanf("%d", &a[i]);\n        printf("%d %d\\n", findFirst(a, n, t), findLast(a, n, t));\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    static int first(int[] a, int t) {\n        int l = 0, r = a.length - 1, res = -1;\n        while(l <= r) {\n            int m = l + (r - l) / 2;\n            if(a[m] == t) { res = m; r = m - 1; }\n            else if(a[m] < t) l = m + 1;\n            else r = m - 1;\n        }\n        return res;\n    }\n    static int last(int[] a, int t) {\n        int l = 0, r = a.length - 1, res = -1;\n        while(l <= r) {\n            int m = l + (r - l) / 2;\n            if(a[m] == t) { res = m; l = m + 1; }\n            else if(a[m] < t) l = m + 1;\n            else r = m - 1;\n        }\n        return res;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt(), t = sc.nextInt();\n            int[] a = new int[n];\n            for(int i = 0; i < n; i++) a[i] = sc.nextInt();\n            System.out.println(first(a, t) + " " + last(a, t));\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    tok = list(map(int, sys.stdin.read().split()))\n    if len(tok) >= 2:\n        n, t = tok[0], tok[1]\n        a = tok[2:2+n]\n        def first():\n            l, r, ans = 0, n - 1, -1\n            while l <= r:\n                m = (l + r) // 2\n                if a[m] == t: ans = m; r = m - 1\n                elif a[m] < t: l = m + 1\n                else: r = m - 1\n            return ans\n        def last():\n            l, r, ans = 0, n - 1, -1\n            while l <= r:\n                m = (l + r) // 2\n                if a[m] == t: ans = m; l = m + 1\n                elif a[m] < t: l = m + 1\n                else: r = m - 1\n            return ans\n        print(f"{first()} {last()}")\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '6 8 5 7 7 8 8 10', expected: '3 4' },
          { input: '6 6 5 7 7 8 8 10', expected: '-1 -1' }
        ]
      },
      {
        id: 'm2-c5',
        title: 'Transposing Matrix Layout',
        difficulty: 'Easy',
        description: 'Given an R x C integer grid, return its transpose grid of dimensions C x R in-place or via linear transposition.',
        hints: [
          'Row i column j becomes Row j column i in the transposed output.',
          'Traverse column-by-column or construct the transposed dimensions C x R.',
          'Output the grid formatted row by row.'
        ],
        revealLogic: 'Allocate C x R matrix where trans[j][i] = original[i][j]. Runs in strictly O(R * C) time with optimal cache locality.',
        timeTarget: 'O(R * C)',
        spaceTarget: 'O(R * C)',
        starterCode: {
          cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int r, c;\n    if(cin >> r >> c) {\n        vector<vector<int>> a(r, vector<int>(c));\n        for(int i = 0; i < r; i++)\n            for(int j = 0; j < c; j++) cin >> a[i][j];\n        for(int j = 0; j < c; j++) {\n            for(int i = 0; i < r; i++) {\n                cout << a[i][j] << (i == r - 1 ? "" : " ");\n            }\n            cout << endl;\n        }\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n\nint main() {\n    int r, c, a[50][50];\n    if(scanf("%d %d", &r, &c) == 2) {\n        for(int i = 0; i < r; i++)\n            for(int j = 0; j < c; j++) scanf("%d", &a[i][j]);\n        for(int j = 0; j < c; j++) {\n            for(int i = 0; i < r; i++) {\n                printf("%d%s", a[i][j], i == r - 1 ? "" : " ");\n            }\n            printf("\\n");\n        }\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int r = sc.nextInt(), c = sc.nextInt();\n            int[][] a = new int[r][c];\n            for(int i = 0; i < r; i++)\n                for(int j = 0; j < c; j++) a[i][j] = sc.nextInt();\n            for(int j = 0; j < c; j++) {\n                for(int i = 0; i < r; i++) {\n                    System.out.print(a[i][j] + (i == r - 1 ? "" : " "));\n                }\n                System.out.println();\n            }\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    tok = list(map(int, sys.stdin.read().split()))\n    if len(tok) >= 2:\n        r, c = tok[0], tok[1]\n        idx = 2\n        grid = []\n        for _ in range(r):\n            grid.append(tok[idx:idx+c])\n            idx += c\n        for j in range(c):\n            row = [str(grid[i][j]) for i in range(r)]\n            print(" ".join(row))\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '2 3 1 2 3 4 5 6', expected: '1 4\n2 5\n3 6' }
        ]
      }
    ]
  },
  {
    id: 'mock-3',
    title: 'Assessment 3: Algorithmic Complexity & Advanced Number Theory',
    subtitle: '30-Minute Screening Simulation · 5 MCQs + 5 Coding Challenges',
    durationMinutes: 30,
    description: 'Rigorously checks mathematical invariants, prime factorization sieves, modular arithmetic, and recurrence relation proofs.',
    targetTier: 'Core Engineering Specialist',
    badgeUnlockedOnPass: 'badge-mock-3',
    badgeTitleOnPass: 'Number Theory Strategist',
    mcqs: [
      {
        id: 'm3-q1',
        question: 'According to the Master Theorem, what is the asymptotic solution of T(N) = 2T(N/2) + O(N)?',
        options: ['O(N)', 'O(N log N)', 'O(N^2)', 'O(log N)'],
        correctIndex: 1,
        explanation: 'Here a=2, b=2, k=1. Since a = b^k (2 = 2^1), this corresponds to Case 2 of Master Theorem, giving O(N log N).'
      },
      {
        id: 'm3-q2',
        question: 'What is the sum of all prime numbers less than 10?',
        options: ['15', '17', '18', '21'],
        correctIndex: 1,
        explanation: 'Primes less than 10 are 2, 3, 5, 7. Sum = 2 + 3 + 5 + 7 = 17.'
      },
      {
        id: 'm3-q3',
        question: 'Which property allows calculating (A * B) % M as ((A % M) * (B % M)) % M to prevent arithmetic integer overflow?',
        options: ['Distributive property of modular multiplication', 'Euler’s Totient Theorem', 'Fermat’s Little Theorem', 'Chinese Remainder Theorem'],
        correctIndex: 0,
        explanation: 'Modular multiplication distributes over operands, allowing intermediate reductions to avoid numeric overflow.'
      },
      {
        id: 'm3-q4',
        question: 'In an RSA cryptosystem, the public encryption key (e, n) satisfies e * d ≡ 1 (mod φ(n)). What is d called?',
        options: ['Private Decryption Key', 'Session Token', 'Public Modulus', 'Initialization Vector'],
        correctIndex: 0,
        explanation: 'd is the modular multiplicative inverse of e modulo φ(n), serving as the private key.'
      },
      {
        id: 'm3-q5',
        question: 'What is the minimum number of comparisons needed to find both the minimum and maximum of an unsorted array of N elements?',
        options: ['2N - 2', '3N/2 - 2', 'N log N', 'N - 1'],
        correctIndex: 1,
        explanation: 'By comparing elements in pairs, we find min and max using approximately 3N/2 comparisons.'
      }
    ],
    codingQuestions: [
      {
        id: 'm3-c1',
        title: 'Count Odd Numbers in Range',
        difficulty: 'Easy',
        description: 'Given range [low, high] (both inclusive), return the count of odd numbers in O(1) time.',
        hints: [
          'If either boundary is odd, adjust calculations.',
          'Notice that (high - low) / 2 gives baseline pairs.',
          'Add 1 if either low or high is odd.'
        ],
        revealLogic: 'Formula: (high - low) // 2 + (1 if (low % 2 != 0 or high % 2 != 0) else 0). Runs in strictly O(1) time and space.',
        timeTarget: 'O(1)',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int l, h;\n    if(cin >> l >> h) {\n        int ans = (h - l) / 2 + (l % 2 != 0 || h % 2 != 0 ? 1 : 0);\n        cout << ans << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n\nint main() {\n    int l, h;\n    if(scanf("%d %d", &l, &h) == 2) {\n        int ans = (h - l) / 2 + (l % 2 != 0 || h % 2 != 0 ? 1 : 0);\n        printf("%d\\n", ans);\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int l = sc.nextInt(), h = sc.nextInt();\n            int ans = (h - l) / 2 + (l % 2 != 0 || h % 2 != 0 ? 1 : 0);\n            System.out.println(ans);\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        l, h = nums[0], nums[1]\n        print((h - l) // 2 + (1 if l % 2 != 0 or h % 2 != 0 else 0))\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '3 7', expected: '3' },
          { input: '8 10', expected: '1' }
        ]
      },
      {
        id: 'm3-c2',
        title: 'Count of Perfect Squares in Range',
        difficulty: 'Easy',
        description: 'Given range [L, R], return the count of perfect square numbers within [L, R] in O(1) or O(sqrt(R)) time.',
        hints: [
          'Calculate floor(sqrt(R)).',
          'Calculate ceil(sqrt(L)) = floor(sqrt(L - 1)).',
          'Count = floor(sqrt(R)) - ceil(sqrt(L)) + 1.'
        ],
        revealLogic: 'Count = floor(sqrt(R)) - floor(sqrt(L - 1)). Runs in strictly O(1) mathematical complexity with zero loop overhead.',
        timeTarget: 'O(1)',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    long long l, r;\n    if(cin >> l >> r) {\n        long long ans = floor(sqrt(r)) - floor(sqrt(l - 1));\n        cout << ans << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    long long l, r;\n    if(scanf("%lld %lld", &l, &r) == 2) {\n        long long ans = (long long)sqrt(r) - (long long)sqrt(l - 1);\n        printf("%lld\\n", ans);\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextLong()) {\n            long l = sc.nextLong(), r = sc.nextLong();\n            long ans = (long)Math.sqrt(r) - (long)Math.sqrt(l - 1);\n            System.out.println(ans);\n        }\n    }\n}',
          python: 'import sys, math\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        l, r = nums[0], nums[1]\n        print(int(math.isqrt(r)) - int(math.isqrt(l - 1)))\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '9 25', expected: '3' },
          { input: '1 10', expected: '3' }
        ]
      },
      {
        id: 'm3-c3',
        title: 'Prime Factors Aggregation',
        difficulty: 'Medium',
        description: 'Given integer N, print all of its prime factors in ascending order separated by spaces.',
        hints: [
          'Extract all factors of 2 first.',
          'Iterate through odd factors i = 3 up to sqrt(N).',
          'If remaining N > 2, N is itself prime.'
        ],
        revealLogic: 'Divide out 2 while even. Then check odd numbers from 3 up to sqrt(N). Each division reduces N, executing in O(sqrt(N)) time.',
        timeTarget: 'O(sqrt(N))',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\nusing namespace std;\n\nint main() {\n    long long n;\n    if(cin >> n) {\n        bool first = true;\n        while(n % 2 == 0) {\n            cout << (first ? "" : " ") << 2;\n            first = false;\n            n /= 2;\n        }\n        for(long long i = 3; i * i <= n; i += 2) {\n            while(n % i == 0) {\n                cout << (first ? "" : " ") << i;\n                first = false;\n                n /= i;\n            }\n        }\n        if(n > 2) cout << (first ? "" : " ") << n;\n        cout << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n\nint main() {\n    long long n;\n    if(scanf("%lld", &n) == 1) {\n        int first = 1;\n        while(n % 2 == 0) {\n            printf("%s2", first ? "" : " "); first = 0; n /= 2;\n        }\n        for(long long i = 3; i * i <= n; i += 2) {\n            while(n % i == 0) {\n                printf("%s%lld", first ? "" : " ", i); first = 0; n /= i;\n            }\n        }\n        if(n > 2) printf("%s%lld", first ? "" : " ", n);\n        printf("\\n");\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextLong()) {\n            long n = sc.nextLong();\n            boolean first = true;\n            while(n % 2 == 0) {\n                System.out.print((first ? "" : " ") + 2);\n                first = false;\n                n /= 2;\n            }\n            for(long i = 3; i * i <= n; i += 2) {\n                while(n % i == 0) {\n                    System.out.print((first ? "" : " ") + i);\n                    first = false;\n                    n /= i;\n                }\n            }\n            if(n > 2) System.out.print((first ? "" : " ") + n);\n            System.out.println();\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    line = sys.stdin.read().strip()\n    if line:\n        n = int(line)\n        res = []\n        while n % 2 == 0:\n            res.append(2)\n            n //= 2\n        i = 3\n        while i * i <= n:\n            while n % i == 0:\n                res.append(i)\n                n //= i\n            i += 2\n        if n > 2:\n            res.append(n)\n        print(" ".join(map(str, res)))\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '12', expected: '2 2 3' },
          { input: '315', expected: '3 3 5 7' }
        ]
      },
      {
        id: 'm3-c4',
        title: 'Clock Mechanics Hands Angle',
        difficulty: 'Easy',
        description: 'Given Hour H (1 to 12) and Minute M (0 to 59), calculate the smaller angle between the two clock hands in degrees.',
        hints: [
          'Minute hand moves 6 degrees per minute.',
          'Hour hand moves 30 degrees per hour + 0.5 degrees per minute.',
          'Take absolute difference and min(diff, 360 - diff).'
        ],
        revealLogic: 'Hour angle = 0.5 * (60 * H + M). Minute angle = 6 * M. Diff = abs(Hour - Minute). Result = min(diff, 360 - diff). Runs in O(1) time.',
        timeTarget: 'O(1)',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int h, m;\n    if(cin >> h >> m) {\n        if(h == 12) h = 0;\n        double hAngle = 0.5 * (60 * h + m);\n        double mAngle = 6.0 * m;\n        double diff = abs(hAngle - mAngle);\n        double ans = min(diff, 360.0 - diff);\n        cout << ans << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int h, m;\n    if(scanf("%d %d", &h, &m) == 2) {\n        if(h == 12) h = 0;\n        double hAngle = 0.5 * (60 * h + m);\n        double mAngle = 6.0 * m;\n        double diff = fabs(hAngle - mAngle);\n        double ans = diff < 360.0 - diff ? diff : 360.0 - diff;\n        printf("%.1f\\n", ans);\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int h = sc.nextInt(), m = sc.nextInt();\n            if(h == 12) h = 0;\n            double hAngle = 0.5 * (60 * h + m);\n            double mAngle = 6.0 * m;\n            double diff = Math.abs(hAngle - mAngle);\n            System.out.println(Math.min(diff, 360.0 - diff));\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        h, m = nums[0], nums[1]\n        if h == 12: h = 0\n        h_angle = 0.5 * (60 * h + m)\n        m_angle = 6.0 * m\n        diff = abs(h_angle - m_angle)\n        print(min(diff, 360.0 - diff))\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '3 30', expected: '75' }
        ]
      },
      {
        id: 'm3-c5',
        title: 'Subarray LCM Machine Verification',
        difficulty: 'Medium',
        description: 'Given an array A and target integer K, determine if there exists any contiguous subarray whose LCM is strictly equal to K.',
        hints: [
          'Discard elements that do not divide K.',
          'Expand subarrays maintaining cumulative LCM.',
          'Stop expanding if cumulative LCM exceeds K.'
        ],
        revealLogic: 'Filter elements: if K % A[i] != 0, reset current LCM. Otherwise, compute cumulative LCM = (curr / gcd(curr, A[i])) * A[i]. If curr == K, return "true". Operates in O(N log K) time with O(1) space.',
        timeTarget: 'O(N log K)',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nlong long gcd(long long a, long long b) {\n    while(b) { long long t = b; b = a % b; a = t; }\n    return a;\n}\n\nint main() {\n    int n; long long k;\n    if(cin >> n >> k) {\n        vector<long long> a(n);\n        for(int i = 0; i < n; i++) cin >> a[i];\n        bool found = false;\n        for(int i = 0; i < n && !found; i++) {\n            if(k % a[i] != 0) continue;\n            long long cur = a[i];\n            if(cur == k) { found = true; break; }\n            for(int j = i + 1; j < n; j++) {\n                if(k % a[j] != 0) break;\n                cur = (cur / gcd(cur, a[j])) * a[j];\n                if(cur == k) { found = true; break; }\n                if(cur > k) break;\n            }\n        }\n        cout << (found ? "true" : "false") << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <stdbool.h>\n\nlong long gcd(long long a, long long b) {\n    while(b) { long long t = b; b = a % b; a = t; }\n    return a;\n}\n\nint main() {\n    int n; long long k;\n    if(scanf("%d %lld", &n, &k) == 2) {\n        long long a[100];\n        for(int i = 0; i < n; i++) scanf("%lld", &a[i]);\n        bool found = false;\n        for(int i = 0; i < n && !found; i++) {\n            if(k % a[i] != 0) continue;\n            long long cur = a[i];\n            if(cur == k) { found = true; break; }\n            for(int j = i + 1; j < n; j++) {\n                if(k % a[j] != 0) break;\n                cur = (cur / gcd(cur, a[j])) * a[j];\n                if(cur == k) { found = true; break; }\n                if(cur > k) break;\n            }\n        }\n        printf("%s\\n", found ? "true" : "false");\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    static long gcd(long a, long b) {\n        while(b != 0) { long t = b; b = a % b; a = t; }\n        return a;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt(); long k = sc.nextLong();\n            long[] a = new long[n];\n            for(int i = 0; i < n; i++) a[i] = sc.nextLong();\n            boolean found = false;\n            for(int i = 0; i < n && !found; i++) {\n                if(k % a[i] != 0) continue;\n                long cur = a[i];\n                if(cur == k) { found = true; break; }\n                for(int j = i + 1; j < n; j++) {\n                    if(k % a[j] != 0) break;\n                    cur = (cur / gcd(cur, a[j])) * a[j];\n                    if(cur == k) { found = true; break; }\n                    if(cur > k) break;\n                }\n            }\n            System.out.println(found ? "true" : "false");\n        }\n    }\n}',
          python: 'import sys, math\n\ndef solve():\n    tok = list(map(int, sys.stdin.read().split()))\n    if len(tok) >= 2:\n        n, k = tok[0], tok[1]\n        a = tok[2:2+n]\n        found = False\n        for i in range(n):\n            if k % a[i] != 0: continue\n            cur = a[i]\n            if cur == k: found = True; break\n            for j in range(i + 1, n):\n                if k % a[j] != 0: break\n                cur = (cur * a[j]) // math.gcd(cur, a[j])\n                if cur == k: found = True; break\n                if cur > k: break\n            if found: break\n        print("true" if found else "false")\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '5 6 2 3 5 2 3', expected: 'true' },
          { input: '3 7 2 4 8', expected: 'false' }
        ]
      }
    ]
  },
  {
    id: 'mock-4',
    title: 'Assessment 4: Graph & Search Engineering Mock',
    subtitle: '30-Minute Screening Simulation · 5 MCQs + 5 Coding Challenges',
    durationMinutes: 30,
    description: 'Models systems-level networking assessments used by Microsoft, Cisco, and Tier-1 infrastructure teams. Tests graph modeling and search traversal.',
    targetTier: 'Systems & Infrastructure Engineering',
    badgeUnlockedOnPass: 'badge-mock-4',
    badgeTitleOnPass: 'Graph Systems Specialist',
    mcqs: [
      {
        id: 'm4-q1',
        question: 'Which data structure is most space-efficient for representing a sparse graph with V vertices and E edges where E << V^2?',
        options: ['Adjacency Matrix', 'Adjacency List', 'Incidence Matrix', '2D Flat Array'],
        correctIndex: 1,
        explanation: 'An Adjacency List requires O(V + E) space, whereas an Adjacency Matrix always consumes O(V^2).'
      },
      {
        id: 'm4-q2',
        question: 'What is the time complexity of Dijkstra’s single-source shortest path algorithm using a binary min-heap priority queue?',
        options: ['O(V^2)', 'O((V + E) log V)', 'O(V * E)', 'O(E log E)'],
        correctIndex: 1,
        explanation: 'With a binary heap, extracting min takes O(log V) V times, and edge relaxations take O(log V) E times => O((V + E) log V).'
      },
      {
        id: 'm4-q3',
        question: 'In how many ways can 6 software engineers be seated around a circular conference table?',
        options: ['720', '120', '360', '60'],
        correctIndex: 1,
        explanation: 'Circular permutations of N distinct items = (N - 1)! => (6 - 1)! = 5! = 120 ways.'
      },
      {
        id: 'm4-q4',
        question: 'Which graph algorithm can detect negative-weight cycles in a directed graph?',
        options: ['Dijkstra’s Algorithm', 'Bellman-Ford Algorithm', 'Prim’s Algorithm', 'Kruskal’s Algorithm'],
        correctIndex: 1,
        explanation: 'Bellman-Ford relaxes all edges V-1 times; a further relaxation indicates the presence of a negative cycle.'
      },
      {
        id: 'm4-q5',
        question: 'What is the space complexity of Breadth First Search (BFS) in the worst case on a graph with branching factor B and depth D?',
        options: ['O(D)', 'O(B * D)', 'O(B^D)', 'O(1)'],
        correctIndex: 2,
        explanation: 'The queue at the deepest level must store up to B^D leaf vertices.'
      }
    ],
    codingQuestions: [
      {
        id: 'm4-c1',
        title: 'City Transport Network Connectivity',
        difficulty: 'Medium',
        description: 'Given V municipal transit stations and E bidirectional bus routes, check whether station Source can reach station Destination.',
        hints: [
          'Build an adjacency list from the edge list.',
          'Execute BFS or DFS starting from Source.',
          'Return true if Destination is marked visited.'
        ],
        revealLogic: 'Construct graph adjacency list. Use a visited array and queue for BFS. Enqueue source; explore unvisited neighbors. If destination reached, return "true". O(V + E) time.',
        timeTarget: 'O(V + E)',
        spaceTarget: 'O(V + E)',
        starterCode: {
          cpp: '#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int v, e, src, dest;\n    if(cin >> v >> e >> src >> dest) {\n        vector<vector<int>> adj(v);\n        for(int i = 0; i < e; i++) {\n            int u, w;\n            cin >> u >> w;\n            adj[u].push_back(w);\n            adj[w].push_back(u);\n        }\n        vector<bool> vis(v, false);\n        queue<int> q;\n        q.push(src);\n        vis[src] = true;\n        bool canReach = false;\n        while(!q.empty()) {\n            int curr = q.front(); q.pop();\n            if(curr == dest) { canReach = true; break; }\n            for(int nxt : adj[curr]) {\n                if(!vis[nxt]) {\n                    vis[nxt] = true;\n                    q.push(nxt);\n                }\n            }\n        }\n        cout << (canReach ? "true" : "false") << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <stdbool.h>\n\nint adj[50][50];\nint deg[50];\nbool vis[50];\nint q[100], head = 0, tail = 0;\n\nint main() {\n    int v, e, src, dest;\n    if(scanf("%d %d %d %d", &v, &e, &src, &dest) == 4) {\n        for(int i = 0; i < e; i++) {\n            int u, w;\n            scanf("%d %d", &u, &w);\n            adj[u][deg[u]++] = w;\n            adj[w][deg[w]++] = u;\n        }\n        q[tail++] = src;\n        vis[src] = true;\n        bool can = false;\n        while(head < tail) {\n            int curr = q[head++];\n            if(curr == dest) { can = true; break; }\n            for(int i = 0; i < deg[curr]; i++) {\n                int nxt = adj[curr][i];\n                if(!vis[nxt]) {\n                    vis[nxt] = true; q[tail++] = nxt;\n                }\n            }\n        }\n        printf("%s\\n", can ? "true" : "false");\n    }\n    return 0;\n}',
          java: 'import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int v = sc.nextInt(), e = sc.nextInt(), src = sc.nextInt(), dest = sc.nextInt();\n            List<List<Integer>> adj = new ArrayList<>();\n            for(int i = 0; i < v; i++) adj.add(new ArrayList<>());\n            for(int i = 0; i < e; i++) {\n                int u = sc.nextInt(), w = sc.nextInt();\n                adj.get(u).add(w); adj.get(w).add(u);\n            }\n            boolean[] vis = new boolean[v];\n            Queue<Integer> q = new LinkedList<>();\n            q.add(src); vis[src] = true;\n            boolean can = false;\n            while(!q.isEmpty()) {\n                int c = q.poll();\n                if(c == dest) { can = true; break; }\n                for(int nxt : adj.get(c)) {\n                    if(!vis[nxt]) { vis[nxt] = true; q.add(nxt); }\n                }\n            }\n            System.out.println(can ? "true" : "false");\n        }\n    }\n}',
          python: 'import sys\nfrom collections import deque\n\ndef solve():\n    tok = list(map(int, sys.stdin.read().split()))\n    if len(tok) >= 4:\n        v, e, src, dest = tok[0], tok[1], tok[2], tok[3]\n        adj = [[] for _ in range(v)]\n        idx = 4\n        for _ in range(e):\n            u, w = tok[idx], tok[idx+1]\n            adj[u].append(w)\n            adj[w].append(u)\n            idx += 2\n        q = deque([src])\n        vis = [False] * v\n        vis[src] = True\n        can = False\n        while q:\n            curr = q.popleft()\n            if curr == dest:\n                can = True\n                break\n            for nxt in adj[curr]:\n                if not vis[nxt]:\n                    vis[nxt] = True\n                    q.append(nxt)\n        print("true" if can else "false")\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '4 3 0 3 0 1 1 2 2 3', expected: 'true' },
          { input: '4 2 0 3 0 1 2 3', expected: 'false' }
        ]
      },
      {
        id: 'm4-c2',
        title: 'Check Pangram for Automated Scanner',
        difficulty: 'Easy',
        description: 'Given a scanned text phrase, determine if it contains every letter from a to z at least once (case-insensitive).',
        hints: [
          'Maintain a boolean seen array of size 26 or a bitmask.',
          'Set bit (char - \'a\') when encountering alphabetical letters.',
          'Check if total distinct letter count equals 26.'
        ],
        revealLogic: 'Single linear pass maintaining a 32-bit integer mask. If mask reaches (1 << 26) - 1, return "true". Operates in O(N) time and O(1) space.',
        timeTarget: 'O(N)',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string s;\n    if(getline(cin, s)) {\n        int mask = 0;\n        for(char c : s) {\n            if(isalpha(c)) mask |= (1 << (tolower(c) - \'a\'));\n        }\n        cout << (mask == (1 << 26) - 1 ? "true" : "false") << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\n\nint main() {\n    char s[512];\n    if(fgets(s, sizeof(s), stdin)) {\n        int mask = 0;\n        for(int i = 0; s[i] != \'\\0\'; i++) {\n            if(isalpha(s[i])) mask |= (1 << (tolower(s[i]) - \'a\'));\n        }\n        printf("%s\\n", mask == (1 << 26) - 1 ? "true" : "false");\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextLine()) {\n            String s = sc.nextLine();\n            int mask = 0;\n            for(char c : s.toCharArray()) {\n                if(Character.isLetter(c)) mask |= (1 << (Character.toLowerCase(c) - \'a\'));\n            }\n            System.out.println(mask == (1 << 26) - 1 ? "true" : "false");\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    line = sys.stdin.read().strip()\n    letters = set(c.lower() for c in line if c.isalpha())\n    print("true" if len(letters) == 26 else "false")\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: 'The quick brown fox jumps over the lazy dog', expected: 'true' },
          { input: 'jiet engineering rajasthan', expected: 'false' }
        ]
      },
      {
        id: 'm4-c3',
        title: 'Consolidate Inventory Lists',
        difficulty: 'Easy',
        description: 'Given two sorted lists of inventory product IDs A and B, merge them into a single sorted list in O(N + M) time without sorting from scratch.',
        hints: [
          'Maintain pointers p1 for list A and p2 for list B.',
          'Append the smaller element to the merged list.',
          'Append any residual elements when one list is exhausted.'
        ],
        revealLogic: 'Classic two-pointer merge from MergeSort. Compares heads of both sorted arrays, placing the smaller element into result. Runs in strictly O(N + M) linear time.',
        timeTarget: 'O(N + M)',
        spaceTarget: 'O(N + M)',
        starterCode: {
          cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, m;\n    if(cin >> n >> m) {\n        vector<int> a(n), b(m), res;\n        for(int i = 0; i < n; i++) cin >> a[i];\n        for(int i = 0; i < m; i++) cin >> b[i];\n        int i = 0, j = 0;\n        while(i < n && j < m) {\n            if(a[i] <= b[j]) res.push_back(a[i++]);\n            else res.push_back(b[j++]);\n        }\n        while(i < n) res.push_back(a[i++]);\n        while(j < m) res.push_back(b[j++]);\n        for(int k = 0; k < (int)res.size(); k++)\n            cout << res[k] << (k == (int)res.size() - 1 ? "" : " ");\n        cout << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n\nint main() {\n    int n, m, a[50], b[50];\n    if(scanf("%d %d", &n, &m) == 2) {\n        for(int i = 0; i < n; i++) scanf("%d", &a[i]);\n        for(int i = 0; i < m; i++) scanf("%d", &b[i]);\n        int i = 0, j = 0, first = 1;\n        while(i < n && j < m) {\n            if(a[i] <= b[j]) { printf("%s%d", first ? "" : " ", a[i++]); }\n            else { printf("%s%d", first ? "" : " ", b[j++]); }\n            first = 0;\n        }\n        while(i < n) { printf("%s%d", first ? "" : " ", a[i++]); first = 0; }\n        while(j < m) { printf("%s%d", first ? "" : " ", b[j++]); first = 0; }\n        printf("\\n");\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt(), m = sc.nextInt();\n            int[] a = new int[n], b = new int[m];\n            for(int i = 0; i < n; i++) a[i] = sc.nextInt();\n            for(int i = 0; i < m; i++) b[i] = sc.nextInt();\n            int i = 0, j = 0;\n            StringBuilder sb = new StringBuilder();\n            while(i < n && j < m) {\n                if(a[i] <= b[j]) sb.append(a[i++]).append(" ");\n                else sb.append(b[j++]).append(" ");\n            }\n            while(i < n) sb.append(a[i++]).append(" ");\n            while(j < m) sb.append(b[j++]).append(" ");\n            System.out.println(sb.toString().trim());\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    tok = list(map(int, sys.stdin.read().split()))\n    if len(tok) >= 2:\n        n, m = tok[0], tok[1]\n        a = tok[2:2+n]\n        b = tok[2+n:2+n+m]\n        i, j = 0, 0\n        res = []\n        while i < n and j < m:\n            if a[i] <= b[j]:\n                res.append(a[i]); i += 1\n            else:\n                res.append(b[j]); j += 1\n        res.extend(a[i:])\n        res.extend(b[j:])\n        print(" ".join(map(str, res)))\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '3 3 1 3 5 2 4 6', expected: '1 2 3 4 5 6' }
        ]
      },
      {
        id: 'm4-c4',
        title: 'Valid Palindrome After Cleanup',
        difficulty: 'Easy',
        description: 'Determine if an input string with special characters and punctuation is a palindrome considering only alphanumeric characters and ignoring cases.',
        hints: [
          'Use two pointers from ends.',
          'Skip non-alphanumeric characters.',
          'Compare lowercase equivalents of characters.'
        ],
        revealLogic: 'Two pointers skipping isalnum() == false. Compares tolower(c1) == tolower(c2). O(N) time with O(1) memory.',
        timeTarget: 'O(N)',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string s;\n    if(getline(cin, s)) {\n        int l = 0, r = s.length() - 1;\n        bool ok = true;\n        while(l < r) {\n            while(l < r && !isalnum(s[l])) l++;\n            while(l < r && !isalnum(s[r])) r--;\n            if(tolower(s[l++]) != tolower(s[r--])) { ok = false; break; }\n        }\n        cout << (ok ? "true" : "false") << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\n#include <stdbool.h>\n\nint main() {\n    char s[512];\n    if(fgets(s, sizeof(s), stdin)) {\n        int l = 0, r = strlen(s) - 1;\n        bool ok = true;\n        while(l < r) {\n            while(l < r && !isalnum(s[l])) l++;\n            while(l < r && !isalnum(s[r])) r--;\n            if(tolower(s[l++]) != tolower(s[r--])) { ok = false; break; }\n        }\n        printf("%s\\n", ok ? "true" : "false");\n    }\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextLine()) {\n            String s = sc.nextLine();\n            int l = 0, r = s.length() - 1;\n            boolean ok = true;\n            while(l < r) {\n                while(l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;\n                while(l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;\n                if(Character.toLowerCase(s.charAt(l++)) != Character.toLowerCase(s.charAt(r--))) {\n                    ok = false; break;\n                }\n            }\n            System.out.println(ok ? "true" : "false");\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    filtered = [c.lower() for c in s if c.isalnum()]\n    print("true" if filtered == filtered[::-1] else "false")\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: 'A man, a plan, a canal: Panama', expected: 'true' },
          { input: 'race a car', expected: 'false' }
        ]
      },
      {
        id: 'm4-c5',
        title: 'Merge Interval Segments',
        difficulty: 'Medium',
        description: 'Given N time intervals [start, end], consolidate all overlapping intervals into non-overlapping blocks.',
        hints: [
          'Sort intervals by their starting times.',
          'Maintain a current interval [curStart, curEnd].',
          'If next interval starts before curEnd, update curEnd = max(curEnd, nextEnd).'
        ],
        revealLogic: 'Sort intervals by start in O(N log N). Single pass: if interval overlaps, merge end = max(end, next.end). Otherwise push current to result. Runs in O(N log N) time and O(N) space.',
        timeTarget: 'O(N log N)',
        spaceTarget: 'O(N)',
        starterCode: {
          cpp: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if(cin >> n) {\n        vector<pair<int,int>> a(n);\n        for(int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;\n        sort(a.begin(), a.end());\n        vector<pair<int,int>> res;\n        for(auto& p : a) {\n            if(res.empty() || res.back().second < p.first) {\n                res.push_back(p);\n            } else {\n                res.back().second = max(res.back().second, p.second);\n            }\n        }\n        for(auto& p : res) cout << p.first << " " << p.second << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct { int s, e; } Interval;\n\nint cmp(const void *a, const void *b) {\n    return ((Interval*)a)->s - ((Interval*)b)->s;\n}\n\nint main() {\n    int n;\n    if(scanf("%d", &n) == 1) {\n        Interval a[50], res[50];\n        for(int i = 0; i < n; i++) scanf("%d %d", &a[i].s, &a[i].e);\n        qsort(a, n, sizeof(Interval), cmp);\n        int k = 0;\n        res[0] = a[0];\n        for(int i = 1; i < n; i++) {\n            if(res[k].e >= a[i].s) {\n                if(a[i].e > res[k].e) res[k].e = a[i].e;\n            } else {\n                res[++k] = a[i];\n            }\n        }\n        for(int i = 0; i <= k; i++) printf("%d %d\\n", res[i].s, res[i].e);\n    }\n    return 0;\n}',
          java: 'import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[][] a = new int[n][2];\n            for(int i = 0; i < n; i++) {\n                a[i][0] = sc.nextInt(); a[i][1] = sc.nextInt();\n            }\n            Arrays.sort(a, (x, y) -> Integer.compare(x[0], y[0]));\n            List<int[]> res = new ArrayList<>();\n            for(int[] p : a) {\n                if(res.isEmpty() || res.get(res.size() - 1)[1] < p[0]) res.add(p);\n                else res.get(res.size() - 1)[1] = Math.max(res.get(res.size() - 1)[1], p[1]);\n            }\n            for(int[] p : res) System.out.println(p[0] + " " + p[1]);\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    tok = list(map(int, sys.stdin.read().split()))\n    if tok:\n        n = tok[0]\n        intervals = []\n        idx = 1\n        for _ in range(n):\n            intervals.append([tok[idx], tok[idx+1]])\n            idx += 2\n        intervals.sort(key=lambda x: x[0])\n        res = []\n        for p in intervals:\n            if not res or res[-1][1] < p[0]:\n                res.append(p)\n            else:\n                res[-1][1] = max(res[-1][1], p[1])\n        for p in res:\n            print(f"{p[0]} {p[1]}")\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '4 1 3 2 6 8 10 15 18', expected: '1 6\n8 10\n15 18' }
        ]
      }
    ]
  },
  {
    id: 'mock-5',
    title: 'Assessment 5: FAANG & Super-Dream Final Placement Simulation',
    subtitle: '30-Minute Screening Simulation · 5 MCQs + 5 Coding Challenges',
    durationMinutes: 30,
    description: 'The pinnacle technical assessment mirroring final round interviews at Google, Adobe, Flipkart, and Microsoft. Tests deep algorithmic invariants and complexity constraints.',
    targetTier: 'FAANG & Super-Dream Product Ready',
    badgeUnlockedOnPass: 'badge-mock-5',
    badgeTitleOnPass: 'FAANG Placement Grandmaster',
    mcqs: [
      {
        id: 'm5-q1',
        question: 'In database transaction management, which ACID property ensures that transactions execute concurrently without mutual interference?',
        options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
        correctIndex: 2,
        explanation: 'Isolation ensures that intermediate states of concurrent transactions are invisible to each other.'
      },
      {
        id: 'm5-q2',
        question: 'What is the optimal average-case time complexity of Lomuto or Hoare in-place partitioning on an array of N elements?',
        options: ['O(log N)', 'O(N)', 'O(N log N)', 'O(1)'],
        correctIndex: 1,
        explanation: 'Partitioning traverses the array linearly once, running in strictly O(N) time.'
      },
      {
        id: 'm5-q3',
        question: 'What is the maximum number of edges in a simple undirected planar graph with V >= 3 vertices?',
        options: ['3V - 6', '2V - 4', 'V^2', 'V * (V - 1) / 2'],
        correctIndex: 0,
        explanation: 'Euler’s formula for planar graphs dictates that E <= 3V - 6.'
      },
      {
        id: 'm5-q4',
        question: 'A bag contains 6 black and 4 gold balls. If 2 balls are drawn at random without replacement, what is the probability that both are gold?',
        options: ['2/15', '4/25', '1/6', '2/9'],
        correctIndex: 0,
        explanation: 'P = (4/10) * (3/9) = 12/90 = 2/15.'
      },
      {
        id: 'm5-q5',
        question: 'Which CPU scheduling algorithm provides the minimum average waiting time for a given set of stationary processes?',
        options: ['First Come First Served (FCFS)', 'Shortest Job First (SJF)', 'Priority Scheduling', 'Round Robin'],
        correctIndex: 1,
        explanation: 'SJF is mathematically optimal for minimizing average waiting time.'
      }
    ],
    codingQuestions: [
      {
        id: 'm5-c1',
        title: 'Zero-Sum Triplet Isolation',
        difficulty: 'Medium',
        description: 'Given an array A, find if there exist three distinct indices i, j, k such that A[i] + A[j] + A[k] == 0 in O(N^2) time and O(1) space.',
        hints: [
          'Sort the array first.',
          'Fix the first element A[i], then use two pointers for remaining array.',
          'If sum < 0 increment left; if sum > 0 decrement right.'
        ],
        revealLogic: 'Sort in O(N log N). Loop i from 0 to N-3. Two pointers l = i + 1, r = N - 1. If A[i] + A[l] + A[r] == 0, return "true". Operates in O(N^2) time and O(1) auxiliary memory.',
        timeTarget: 'O(N^2)',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if(cin >> n) {\n        vector<int> a(n);\n        for(int i = 0; i < n; i++) cin >> a[i];\n        sort(a.begin(), a.end());\n        bool found = false;\n        for(int i = 0; i < n - 2 && !found; i++) {\n            int l = i + 1, r = n - 1;\n            while(l < r) {\n                int sum = a[i] + a[l] + a[r];\n                if(sum == 0) { found = true; break; }\n                else if(sum < 0) l++;\n                else r--;\n            }\n        }\n        cout << (found ? "true" : "false") << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nint cmp(const void *a, const void *b) { return (*(int*)a - *(int*)b); }\n\nint main() {\n    int n, a[100];\n    if(scanf("%d", &n) == 1) {\n        for(int i = 0; i < n; i++) scanf("%d", &a[i]);\n        qsort(a, n, sizeof(int), cmp);\n        bool found = false;\n        for(int i = 0; i < n - 2 && !found; i++) {\n            int l = i + 1, r = n - 1;\n            while(l < r) {\n                int s = a[i] + a[l] + a[r];\n                if(s == 0) { found = true; break; }\n                else if(s < 0) l++;\n                else r--;\n            }\n        }\n        printf("%s\\n", found ? "true" : "false");\n    }\n    return 0;\n}',
          java: 'import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] a = new int[n];\n            for(int i = 0; i < n; i++) a[i] = sc.nextInt();\n            Arrays.sort(a);\n            boolean found = false;\n            for(int i = 0; i < n - 2 && !found; i++) {\n                int l = i + 1, r = n - 1;\n                while(l < r) {\n                    int s = a[i] + a[l] + a[r];\n                    if(s == 0) { found = true; break; }\n                    else if(s < 0) l++;\n                    else r--;\n                }\n            }\n            System.out.println(found ? "true" : "false");\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    tok = list(map(int, sys.stdin.read().split()))\n    if tok:\n        n = tok[0]\n        a = sorted(tok[1:1+n])\n        found = False\n        for i in range(n - 2):\n            l, r = i + 1, n - 1\n            while l < r:\n                s = a[i] + a[l] + a[r]\n                if s == 0:\n                    found = True; break\n                elif s < 0:\n                    l += 1\n                else:\n                    r -= 1\n            if found: break\n        print("true" if found else "false")\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '6 -1 0 1 2 -1 -4', expected: 'true' },
          { input: '3 1 2 3', expected: 'false' }
        ]
      },
      {
        id: 'm5-c2',
        title: 'Count Special Palindromic Substrings',
        difficulty: 'Medium',
        description: 'Given string S, count how many non-empty substrings are palindromes using the expand-around-center paradigm in O(N^2) time.',
        hints: [
          'Every character can be the center of an odd-length palindrome.',
          'Every adjacent pair can be the center of an even-length palindrome.',
          'Expand outward from center while characters match.'
        ],
        revealLogic: 'Iterate center i from 0 to N-1. Expand odd: l = i, r = i. Expand even: l = i, r = i + 1. Increment count at each matching step. Total time O(N^2) with O(1) auxiliary memory.',
        timeTarget: 'O(N^2)',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint countPali(const string& s) {\n    int n = s.length(), count = 0;\n    for(int i = 0; i < n; i++) {\n        int l = i, r = i;\n        while(l >= 0 && r < n && s[l--] == s[r++]) count++;\n        l = i; r = i + 1;\n        while(l >= 0 && r < n && s[l--] == s[r++]) count++;\n    }\n    return count;\n}\n\nint main() {\n    string s;\n    if(cin >> s) cout << countPali(s) << endl;\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <string.h>\n\nint countPali(char *s) {\n    int n = strlen(s), count = 0;\n    for(int i = 0; i < n; i++) {\n        int l = i, r = i;\n        while(l >= 0 && r < n && s[l--] == s[r++]) count++;\n        l = i; r = i + 1;\n        while(l >= 0 && r < n && s[l--] == s[r++]) count++;\n    }\n    return count;\n}\n\nint main() {\n    char s[256];\n    if(scanf("%s", s) == 1) printf("%d\\n", countPali(s));\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    static int count(String s) {\n        int n = s.length(), c = 0;\n        for(int i = 0; i < n; i++) {\n            int l = i, r = i;\n            while(l >= 0 && r < n && s.charAt(l--) == s.charAt(r++)) c++;\n            l = i; r = i + 1;\n            while(l >= 0 && r < n && s.charAt(l--) == s.charAt(r++)) c++;\n        }\n        return c;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNext()) System.out.println(count(sc.next()));\n    }\n}',
          python: 'import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    n = len(s)\n    count = 0\n    for i in range(n):\n        l, r = i, i\n        while l >= 0 and r < n and s[l] == s[r]:\n            count += 1; l -= 1; r += 1\n        l, r = i, i + 1\n        while l >= 0 and r < n and s[l] == s[r]:\n            count += 1; l -= 1; r += 1\n    print(count)\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: 'aaa', expected: '6' },
          { input: 'abc', expected: '3' }
        ]
      },
      {
        id: 'm5-c3',
        title: 'QuickSort In-Place Partitioning',
        difficulty: 'Medium',
        description: 'Implement QuickSort in-place partitioning on an array of numbers and print the sorted array.',
        hints: [
          'Choose a pivot (e.g. rightmost element).',
          'Maintain index i of smaller element; swap elements smaller than pivot to front.',
          'Recurse on left and right partitions.'
        ],
        revealLogic: 'Lomuto Partition: pick pivot = A[high]. Scan j from low to high-1. If A[j] < pivot, swap A[++i] and A[j]. Swap A[i+1] and A[high]. Recurse. Average O(N log N) time and O(log N) stack space.',
        timeTarget: 'O(N log N)',
        spaceTarget: 'O(log N)',
        starterCode: {
          cpp: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if(cin >> n) {\n        vector<int> a(n);\n        for(int i = 0; i < n; i++) cin >> a[i];\n        sort(a.begin(), a.end());\n        for(int i = 0; i < n; i++) cout << a[i] << (i == n - 1 ? "" : " ");\n        cout << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <stdlib.h>\n\nint cmp(const void *a, const void *b) { return (*(int*)a - *(int*)b); }\n\nint main() {\n    int n, a[100];\n    if(scanf("%d", &n) == 1) {\n        for(int i = 0; i < n; i++) scanf("%d", &a[i]);\n        qsort(a, n, sizeof(int), cmp);\n        for(int i = 0; i < n; i++) printf("%d%s", a[i], i == n - 1 ? "" : " ");\n        printf("\\n");\n    }\n    return 0;\n}',
          java: 'import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] a = new int[n];\n            for(int i = 0; i < n; i++) a[i] = sc.nextInt();\n            Arrays.sort(a);\n            for(int i = 0; i < n; i++) System.out.print(a[i] + (i == n - 1 ? "" : " "));\n            System.out.println();\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    tok = list(map(int, sys.stdin.read().split()))\n    if tok:\n        n = tok[0]\n        a = sorted(tok[1:1+n])\n        print(" ".join(map(str, a)))\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '5 10 7 8 9 1', expected: '1 7 8 9 10' }
        ]
      },
      {
        id: 'm5-c4',
        title: 'Merge Sort Student Scores Combiner',
        difficulty: 'Medium',
        description: 'Sort an array of student test marks using divide-and-conquer Merge Sort with guaranteed O(N log N) worst-case time complexity.',
        hints: [
          'Divide array into left and right halves recursively.',
          'Merge sorted halves back together.',
          'Guarantees O(N log N) performance regardless of data distribution.'
        ],
        revealLogic: 'Divide array into halves until base case of size 1. Merge sorted halves using two pointers. Stable sort running in guaranteed O(N log N) time.',
        timeTarget: 'O(N log N)',
        spaceTarget: 'O(N)',
        starterCode: {
          cpp: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if(cin >> n) {\n        vector<int> a(n);\n        for(int i = 0; i < n; i++) cin >> a[i];\n        sort(a.begin(), a.end());\n        for(int i = 0; i < n; i++) cout << a[i] << (i == n - 1 ? "" : " ");\n        cout << endl;\n    }\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <stdlib.h>\n\nint cmp(const void *a, const void *b) { return (*(int*)a - *(int*)b); }\n\nint main() {\n    int n, a[100];\n    if(scanf("%d", &n) == 1) {\n        for(int i = 0; i < n; i++) scanf("%d", &a[i]);\n        qsort(a, n, sizeof(int), cmp);\n        for(int i = 0; i < n; i++) printf("%d%s", a[i], i == n - 1 ? "" : " ");\n        printf("\\n");\n    }\n    return 0;\n}',
          java: 'import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] a = new int[n];\n            for(int i = 0; i < n; i++) a[i] = sc.nextInt();\n            Arrays.sort(a);\n            for(int i = 0; i < n; i++) System.out.print(a[i] + (i == n - 1 ? "" : " "));\n            System.out.println();\n        }\n    }\n}',
          python: 'import sys\n\ndef solve():\n    tok = list(map(int, sys.stdin.read().split()))\n    if tok:\n        n = tok[0]\n        a = sorted(tok[1:1+n])\n        print(" ".join(map(str, a)))\n\nif __name__ == "__main__":\n    solve()'
        },
        testCases: [
          { input: '6 12 11 13 5 6 7', expected: '5 6 7 11 12 13' }
        ]
      },
      {
        id: 'm5-c5',
        title: 'Prime Security Checkpoints',
        difficulty: 'Easy',
        description: 'Given an integer N, return "true" if N is a prime number and "false" otherwise, testing in O(sqrt(N)) time.',
        hints: [
          'If N <= 1, return false. 2 and 3 are prime.',
          'If N % 2 == 0 or N % 3 == 0, return false.',
          'Test divisors of form 6k ± 1 up to sqrt(N).'
        ],
        revealLogic: 'Primality test: check 2 and 3, then step by 6 testing i and i + 2 up to sqrt(N). Achieves O(sqrt(N)) time with O(1) space.',
        timeTarget: 'O(sqrt(N))',
        spaceTarget: 'O(1)',
        starterCode: {
          cpp: '#include <iostream>\nusing namespace std;\n\nbool isPrime(long long n) {\n    if(n <= 1) return false;\n    if(n <= 3) return true;\n    if(n % 2 == 0 || n % 3 == 0) return false;\n    for(long long i = 5; i * i <= n; i += 6) {\n        if(n % i == 0 || n % (i + 2) == 0) return false;\n    }\n    return true;\n}\n\nint main() {\n    long long n;\n    if(cin >> n) cout << (isPrime(n) ? "true" : "false") << endl;\n    return 0;\n}',
          c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool isPrime(long long n) {\n    if(n <= 1) return false;\n    if(n <= 3) return true;\n    if(n % 2 == 0 || n % 3 == 0) return false;\n    for(long long i = 5; i * i <= n; i += 6) {\n        if(n % i == 0 || n % (i + 2) == 0) return false;\n    }\n    return true;\n}\n\nint main() {\n    long long n;\n    if(scanf("%lld", &n) == 1) printf("%s\\n", isPrime(n) ? "true" : "false");\n    return 0;\n}',
          java: 'import java.util.Scanner;\n\npublic class Solution {\n    static boolean isPrime(long n) {\n        if(n <= 1) return false;\n        if(n <= 3) return true;\n        if(n % 2 == 0 || n % 3 == 0) return false;\n        for(long i = 5; i * i <= n; i += 6) {\n            if(n % i == 0 || n % (i + 2) == 0) return false;\n        }\n        return true;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextLong()) System.out.println(isPrime(sc.nextLong()) ? "true" : "false");\n    }\n}',
          python: 'import sys\n\ndef is_prime(n: int) -> bool:\n    if n <= 1: return False\n    if n <= 3: return True\n    if n % 2 == 0 or n % 3 == 0: return False\n    i = 5\n    while i * i <= n:\n        if n % i == 0 or n % (i + 2) == 0: return False\n        i += 6\n    return True\n\nif __name__ == "__main__":\n    line = sys.stdin.read().strip()\n    if line: print("true" if is_prime(int(line)) else "false")'
        },
        testCases: [
          { input: '29', expected: 'true' },
          { input: '49', expected: 'false' }
        ]
      }
    ]
  }
];
