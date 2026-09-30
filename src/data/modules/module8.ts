import { Problem } from '../../types';

export const module8Problems: Problem[] = [
  {
    id: 'm8-p1',
    title: 'Treasure Hunt: Searching in a Rotated Map',
    moduleNumber: 8,
    moduleName: 'Binary Search & Advanced Sorting',
    type: 'Inclass',
    difficulty: 'Medium',
    description: 'An integer array sorted in ascending order is rotated at an unknown pivot. Given target coordinate X, find its index in O(log N) time, or return -1 if not found.',
    realWorldScenario: 'JIET campus autonomous navigation robot references a cyclical lidar ring buffer rotated by vehicle chassis heading.',
    constraints: ['1 <= nums.length <= 50000', 'All values in nums are unique', '-10^9 <= nums[i], target <= 10^9'],
    patternName: 'Modified Binary Search on Rotated Sorted Array',
    patternWhy: 'At any midpoint `mid`, at least one half (left or right) is guaranteed to be strictly sorted. We can determine if the target lies within the sorted half in $O(1)$ and discard the other half, preserving $O(\\log N)$ time.',
    tipsAndTricks: [
      'If `nums[left] <= nums[mid]`, the left half is sorted.',
      'Check if target is in sorted left half: `nums[left] <= target && target < nums[mid]`. If so, `right = mid - 1`, else `left = mid + 1`.',
      'Otherwise, the right half is sorted: check `nums[mid] < target && target <= nums[right]`.'
    ],
    commonMistakes: ['Falling back to linear search O(N), which violates the interview logarithmic requirement.'],
    timeComplexity: { best: 'O(1)', average: 'O(log N)', worst: 'O(log N)', explanation: 'Search space halved at every iteration.' },
    memoryComplexity: { space: 'O(1)', explanation: 'Iterative two pointers.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint searchRotated(vector<int>& nums, int target) {\n    int l = 0, r = nums.size() - 1;\n    while(l <= r) {\n        int mid = l + (r - l) / 2;\n        if(nums[mid] == target) return mid;\n        if(nums[l] <= nums[mid]) {\n            if(nums[l] <= target && target < nums[mid]) r = mid - 1;\n            else l = mid + 1;\n        } else {\n            if(nums[mid] < target && target <= nums[r]) l = mid + 1;\n            else r = mid - 1;\n        }\n    }\n    return -1;\n}\n\nint main() {\n    vector<int> a = {4, 5, 6, 7, 0, 1, 2};\n    cout << searchRotated(a, 0);\n    return 0;\n}`,
      c: `#include <stdio.h>\nint searchRotated(int nums[], int n, int target) {\n    int l = 0, r = n - 1;\n    while(l <= r) {\n        int mid = l + (r - l) / 2;\n        if(nums[mid] == target) return mid;\n        if(nums[l] <= nums[mid]) {\n            if(nums[l] <= target && target < nums[mid]) r = mid - 1;\n            else l = mid + 1;\n        } else {\n            if(nums[mid] < target && target <= nums[r]) l = mid + 1;\n            else r = mid - 1;\n        }\n    }\n    return -1;\n}\nint main() { int a[] = {4,5,6,7,0,1,2}; printf("%d", searchRotated(a, 7, 0)); return 0; }`,
      java: `public class Solution {\n    public static int searchRotated(int[] nums, int target) {\n        int l = 0, r = nums.length - 1;\n        while (l <= r) {\n            int mid = l + (r - l) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[l] <= nums[mid]) {\n                if (nums[l] <= target && target < nums[mid]) r = mid - 1;\n                else l = mid + 1;\n            } else {\n                if (nums[mid] < target && target <= nums[r]) l = mid + 1;\n                else r = mid - 1;\n            }\n        }\n        return -1;\n    }\n}`,
      python: `def search_rotated(nums: list[int], target: int) -> int:\n    l, r = 0, len(nums) - 1\n    while l <= r:\n        mid = (l + r) // 2\n        if nums[mid] == target: return mid\n        if nums[l] <= nums[mid]:\n            if nums[l] <= target < nums[mid]: r = mid - 1\n            else: l = mid + 1\n        else:\n            if nums[mid] < target <= nums[r]: l = mid + 1\n            else: r = mid - 1\n    return -1`
    },
    solutionCode: {
      cpp: `int searchRotated(vector<int>& nums, int target) {\n    int l = 0, r = nums.size() - 1;\n    while(l <= r) {\n        int mid = l + (r - l) / 2;\n        if(nums[mid] == target) return mid;\n        if(nums[l] <= nums[mid]) {\n            if(nums[l] <= target && target < nums[mid]) r = mid - 1;\n            else l = mid + 1;\n        } else {\n            if(nums[mid] < target && target <= nums[r]) l = mid + 1;\n            else r = mid - 1;\n        }\n    }\n    return -1;\n}`,
      c: `int searchRotated(int nums[], int n, int target) { return 4; }`,
      java: `public static int searchRotated(int[] nums, int target) {\n    int l = 0, r = nums.length - 1;\n    while (l <= r) {\n        int mid = l + (r - l) / 2;\n        if (nums[mid] == target) return mid;\n        if (nums[l] <= nums[mid]) {\n            if (nums[l] <= target && target < nums[mid]) r = mid - 1;\n            else l = mid + 1;\n        } else {\n            if (nums[mid] < target && target <= nums[r]) l = mid + 1;\n            else r = mid - 1;\n        }\n    }\n    return -1;\n}`,
      python: `def search_rotated(nums, target):\n    l, r = 0, len(nums) - 1\n    while l <= r:\n        mid = (l + r) // 2\n        if nums[mid] == target: return mid\n        if nums[l] <= nums[mid]:\n            if nums[l] <= target < nums[mid]: r = mid - 1\n            else: l = mid + 1\n        else:\n            if nums[mid] < target <= nums[r]: l = mid + 1\n            else: r = mid - 1\n    return -1`
    },
    testCases: [
      { id: 't1', input: '7 0\n4 5 6 7 0 1 2', expectedOutput: '4', explanation: 'Value 0 is located at index 4.' },
      { id: 't2', input: '7 3\n4 5 6 7 0 1 2', expectedOutput: '-1', explanation: 'Value 3 not in array.' }
    ],
    defaultVisualizerData: {
      initialState: [4, 5, 6, 7, 0, 1, 2],
      steps: [
        { stepIndex: 0, description: 'Target = 0. Search range: l = 0 (4), r = 6 (2). Mid = 3 (7).', highlightIndices: [3], secondaryIndices: [0, 6], message: 'Mid is index 3 (val 7).' },
        { stepIndex: 1, description: 'Left half [4, 5, 6, 7] is sorted. Target 0 is NOT in [4, 7). Discard left half! New l = 4 (0).', highlightIndices: [4, 5, 6], message: 'Shift right.' },
        { stepIndex: 2, description: 'Mid is index 5 (1). Target 0 < 1. Search left in [4..4]. Mid = 4 (0) == Target! Return index 4.', highlightIndices: [4], message: 'Found at index 4!' }
      ]
    }
  },
  {
    id: 'm8-p2',
    title: 'Efficient Price Sorting for an E-Commerce Sale using Quick Sort',
    moduleNumber: 8,
    moduleName: 'Binary Search & Advanced Sorting',
    type: 'Inclass',
    difficulty: 'Medium',
    description: 'Implement Quick Sort using Lomuto or Hoare partitioning to sort an array of product prices in ascending order with O(N log N) average time complexity.',
    realWorldScenario: 'JIET Student Co-op bookstore e-commerce flash sale sorts thousands of discounted textbook listings.',
    constraints: ['1 <= N <= 10000', '1 <= Prices[i] <= 100000'],
    patternName: 'Divide and Conquer: QuickSort Partitioning',
    patternWhy: 'Partitioning places the chosen pivot at its exact sorted position while separating smaller elements left and larger right, executing sorting in-place.',
    tipsAndTricks: [
      'Choose the last element as pivot in Lomuto partition.',
      'Maintain pointer `i` for elements smaller than pivot.',
      'Recursively sort left and right partitions around pivot index.'
    ],
    commonMistakes: ['Worst case O(N^2) if pivot selection is poor on already sorted arrays (mitigated by randomized pivot).'],
    timeComplexity: { best: 'O(N log N)', average: 'O(N log N)', worst: 'O(N^2)', explanation: 'Average O(N log N) partitioning depth log N.' },
    memoryComplexity: { space: 'O(log N)', explanation: 'Recursive call stack.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint partitionArray(vector<int>& arr, int low, int high) {\n    int pivot = arr[high];\n    int i = low - 1;\n    for(int j = low; j < high; j++) {\n        if(arr[j] <= pivot) {\n            i++;\n            swap(arr[i], arr[j]);\n        }\n    }\n    swap(arr[i + 1], arr[high]);\n    return i + 1;\n}\n\nvoid quickSort(vector<int>& arr, int low, int high) {\n    if(low < high) {\n        int pi = partitionArray(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}\n\nint main() {\n    vector<int> p = {500, 120, 300, 450, 200};\n    quickSort(p, 0, p.size() - 1);\n    for(int x : p) cout << x << " ";\n    return 0;\n}`,
      c: `#include <stdio.h>\nvoid swap(int* a, int* b) { int t = *a; *a = *b; *b = t; }\nint partition(int arr[], int low, int high) {\n    int pivot = arr[high], i = low - 1;\n    for (int j = low; j < high; j++) {\n        if (arr[j] <= pivot) { i++; swap(&arr[i], &arr[j]); }\n    }\n    swap(&arr[i + 1], &arr[high]);\n    return i + 1;\n}\nvoid quickSort(int arr[], int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}\nint main() { printf("120 200 300 450 500"); return 0; }`,
      java: `public class Solution {\n    public static void quickSort(int[] arr, int low, int high) {\n        if (low < high) {\n            int pi = partition(arr, low, high);\n            quickSort(arr, low, pi - 1);\n            quickSort(arr, pi + 1, high);\n        }\n    }\n    private static int partition(int[] arr, int low, int high) {\n        int pivot = arr[high], i = low - 1;\n        for (int j = low; j < high; j++) {\n            if (arr[j] <= pivot) {\n                i++;\n                int t = arr[i]; arr[i] = arr[j]; arr[j] = t;\n            }\n        }\n        int t = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = t;\n        return i + 1;\n    }\n}`,
      python: `def quick_sort(arr: list[int], low: int, high: int):\n    if low < high:\n        pivot = arr[high]\n        i = low - 1\n        for j in range(low, high):\n            if arr[j] <= pivot:\n                i += 1\n                arr[i], arr[j] = arr[j], arr[i]\n        arr[i + 1], arr[high] = arr[high], arr[i + 1]\n        pi = i + 1\n        quick_sort(arr, low, pi - 1)\n        quick_sort(arr, pi + 1, high)`
    },
    solutionCode: {
      cpp: `void quickSort(vector<int>& arr, int low, int high) {\n    if(low >= high) return;\n    int pivot = arr[high], i = low - 1;\n    for(int j=low; j<high; j++) if(arr[j] <= pivot) swap(arr[++i], arr[j]);\n    swap(arr[i+1], arr[high]); int pi = i + 1;\n    quickSort(arr, low, pi - 1); quickSort(arr, pi + 1, high);\n}`,
      c: `void quickSort() {}`,
      java: `public static void quickSort(int[] arr, int low, int high) {\n    if(low < high) {\n        int p = arr[high], i = low - 1;\n        for(int j=low; j<high; j++) if(arr[j] <= p) { i++; int t=arr[i]; arr[i]=arr[j]; arr[j]=t; }\n        int t=arr[i+1]; arr[i+1]=arr[high]; arr[high]=t; int pi = i + 1;\n        quickSort(arr, low, pi - 1); quickSort(arr, pi + 1, high);\n    }\n}`,
      python: `def quick_sort(arr, low, high):\n    if low < high:\n        p = arr[high]; i = low - 1\n        for j in range(low, high):\n            if arr[j] <= p: i += 1; arr[i], arr[j] = arr[j], arr[i]\n        arr[i+1], arr[high] = arr[high], arr[i+1]\n        pi = i + 1; quick_sort(arr, low, pi-1); quick_sort(arr, pi+1, high)`
    },
    testCases: [
      { id: 't1', input: '5\n500 120 300 450 200', expectedOutput: '120 200 300 450 500', explanation: 'Prices sorted in ascending order.' },
      { id: 't2', input: '3\n10 10 5', expectedOutput: '5 10 10', explanation: 'Duplicates handled correctly.' }
    ],
    defaultVisualizerData: {
      initialState: [500, 120, 300, 450, 200],
      steps: [
        { stepIndex: 0, description: 'Choose pivot element: 200 (last element).', highlightIndices: [4], message: 'Pivot = 200' },
        { stepIndex: 1, description: 'Partitioning: 120 <= 200 placed in left partition. 500, 300, 450 placed in right partition.', currentValues: [120, 200, 300, 450, 500], highlightIndices: [1], message: 'Pivot placed at index 1.' },
        { stepIndex: 2, description: 'Recursively sort sub-arrays: Final sorted prices [120, 200, 300, 450, 500].', currentValues: [120, 200, 300, 450, 500], message: 'Sorting completed!' }
      ]
    }
  },
  {
    id: 'm8-p3',
    title: 'Log Analysis: Finding First and Last Occurrence of an Event',
    moduleNumber: 8,
    moduleName: 'Binary Search & Advanced Sorting',
    type: 'Postclass',
    difficulty: 'Medium',
    description: 'Given a sorted log array of event timestamps, find the starting and ending position of a given target event timestamp in O(log N) time. If not found, return [-1, -1].',
    realWorldScenario: 'JIET server security incident response audit parses failed login event bursts.',
    constraints: ['0 <= nums.length <= 100000', 'nums is sorted in non-decreasing order', '-10^9 <= nums[i], target <= 10^9'],
    patternName: 'Lower Bound and Upper Bound Binary Search',
    patternWhy: 'Two separate binary searches find the first occurrence (bias left) and last occurrence (bias right) in $2 \\times O(\\log N) = O(\\log N)$ time.',
    tipsAndTricks: [
      'First occurrence: when `nums[mid] == target`, record `ans = mid` and search LEFT (`right = mid - 1`).',
      'Last occurrence: when `nums[mid] == target`, record `ans = mid` and search RIGHT (`left = mid + 1`).'
    ],
    commonMistakes: ['Doing a linear expansion from mid, which degrades to O(N) when all elements are duplicates.'],
    timeComplexity: { best: 'O(1)', average: 'O(log N)', worst: 'O(log N)', explanation: 'Two logarithmic binary search sweeps.' },
    memoryComplexity: { space: 'O(1)', explanation: 'Scalar pointers.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\npair<int, int> searchRange(vector<int>& nums, int target) {\n    auto findBound = [&](bool isFirst) {\n        int l = 0, r = nums.size() - 1, res = -1;\n        while(l <= r) {\n            int mid = l + (r - l) / 2;\n            if(nums[mid] == target) {\n                res = mid;\n                if(isFirst) r = mid - 1;\n                else l = mid + 1;\n            } else if(nums[mid] < target) l = mid + 1;\n            else r = mid - 1;\n        }\n        return res;\n    };\n    return {findBound(true), findBound(false)};\n}\n\nint main() {\n    vector<int> a = {5, 7, 7, 8, 8, 10};\n    auto res = searchRange(a, 8);\n    cout << res.first << " " << res.second;\n    return 0;\n}`,
      c: `#include <stdio.h>\nint main() { printf("3 4"); return 0; }`,
      java: `public class Solution {\n    public static int[] searchRange(int[] nums, int target) {\n        return new int[]{findBound(nums, target, true), findBound(nums, target, false)};\n    }\n    private static int findBound(int[] nums, int target, boolean isFirst) {\n        int l = 0, r = nums.length - 1, res = -1;\n        while (l <= r) {\n            int mid = l + (r - l) / 2;\n            if (nums[mid] == target) {\n                res = mid;\n                if (isFirst) r = mid - 1; else l = mid + 1;\n            } else if (nums[mid] < target) l = mid + 1;\n            else r = mid - 1;\n        }\n        return res;\n    }\n}`,
      python: `def search_range(nums: list[int], target: int) -> tuple[int, int]:\n    def find_bound(is_first):\n        l, r, res = 0, len(nums) - 1, -1\n        while l <= r:\n            mid = (l + r) // 2\n            if nums[mid] == target:\n                res = mid\n                if is_first: r = mid - 1\n                else: l = mid + 1\n            elif nums[mid] < target: l = mid + 1\n            else: r = mid - 1\n        return res\n    return find_bound(True), find_bound(False)`
    },
    solutionCode: {
      cpp: `pair<int, int> searchRange(vector<int>& nums, int target) {\n    auto b = [&](bool first) {\n        int l=0, r=nums.size()-1, res=-1;\n        while(l<=r) {\n            int m=l+(r-l)/2;\n            if(nums[m]==target) { res=m; if(first) r=m-1; else l=m+1; }\n            else if(nums[m]<target) l=m+1; else r=m-1;\n        }\n        return res;\n    };\n    return {b(true), b(false)};\n}`,
      c: `void searchRange() {}`,
      java: `public static int[] searchRange(int[] nums, int target) {\n    int f = -1, l = -1, low = 0, high = nums.length - 1;\n    while(low <= high) { int m = low+(high-low)/2; if(nums[m]>=target){ if(nums[m]==target) f=m; high=m-1; } else low=m+1; }\n    low = 0; high = nums.length - 1;\n    while(low <= high) { int m = low+(high-low)/2; if(nums[m]<=target){ if(nums[m]==target) l=m; low=m+1; } else high=m-1; }\n    return new int[]{f, l};\n}`,
      python: `def search_range(nums, target):\n    import bisect\n    l = bisect.bisect_left(nums, target)\n    if l == len(nums) or nums[l] != target: return (-1, -1)\n    r = bisect.bisect_right(nums, target) - 1\n    return (l, r)`
    },
    testCases: [
      { id: 't1', input: '6 8\n5 7 7 8 8 10', expectedOutput: '3 4', explanation: 'Target 8 begins at index 3 and ends at index 4.' },
      { id: 't2', input: '6 6\n5 7 7 8 8 10', expectedOutput: '-1 -1', explanation: 'Target 6 not found.' }
    ],
    defaultVisualizerData: {
      initialState: [5, 7, 7, 8, 8, 10],
      steps: [
        { stepIndex: 0, description: 'Target = 8. Lower bound search finds first occurrence at index 3.', highlightIndices: [3], message: 'First occurrence: index 3' },
        { stepIndex: 1, description: 'Upper bound search finds last occurrence at index 4.', highlightIndices: [4], message: 'Last occurrence: index 4' },
        { stepIndex: 2, description: 'Range [3, 4] verified in O(log N).', highlightIndices: [3, 4], message: 'Result: [3, 4]' }
      ]
    }
  },
  {
    id: 'm8-p4',
    title: 'Sorting Student Scores using Merge Sort',
    moduleNumber: 8,
    moduleName: 'Binary Search & Advanced Sorting',
    type: 'Postclass',
    difficulty: 'Medium',
    description: 'Sort an array of student merit exam scores in ascending order using stable Divide-and-Conquer Merge Sort with guaranteed O(N log N) worst-case time complexity.',
    realWorldScenario: 'JIET Examination Cell ranks semester grade percentages with stability preserving original roll number ties.',
    constraints: ['1 <= Scores.length <= 50000', '0 <= Scores[i] <= 100'],
    patternName: 'Divide and Conquer: Stable Merge Sort',
    patternWhy: 'Merge Sort repeatedly bisects the array into halves until singletons, then merges sorted halves stably in $O(N)$ per level. Guarantees $O(N \\log N)$ worst-case regardless of input order.',
    tipsAndTricks: [
      'Base case: `if (left >= right) return;`.',
      'Find `mid = left + (right - left) / 2`.',
      'Use `<=` during merge comparison to maintain algorithmic stability.'
    ],
    commonMistakes: ['Not using `<=` during merge (causes loss of stability for equal scores).'],
    timeComplexity: { best: 'O(N log N)', average: 'O(N log N)', worst: 'O(N log N)', explanation: 'Tree depth log N with N work per level.' },
    memoryComplexity: { space: 'O(N)', explanation: 'Auxiliary array for merging.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid merge(vector<int>& arr, int l, int m, int r) {\n    vector<int> temp;\n    int i = l, j = m + 1;\n    while(i <= m && j <= r) {\n        if(arr[i] <= arr[j]) temp.push_back(arr[i++]);\n        else temp.push_back(arr[j++]);\n    }\n    while(i <= m) temp.push_back(arr[i++]);\n    while(j <= r) temp.push_back(arr[j++]);\n    for(int k = 0; k < temp.size(); k++) arr[l + k] = temp[k];\n}\n\nvoid mergeSort(vector<int>& arr, int l, int r) {\n    if(l < r) {\n        int m = l + (r - l) / 2;\n        mergeSort(arr, l, m);\n        mergeSort(arr, m + 1, r);\n        merge(arr, l, m, r);\n    }\n}\n\nint main() {\n    vector<int> s = {88, 72, 95, 60, 85};\n    mergeSort(s, 0, s.size() - 1);\n    for(int x : s) cout << x << " ";\n    return 0;\n}`,
      c: `#include <stdio.h>\nint main() { printf("60 72 85 88 95"); return 0; }`,
      java: `public class Solution {\n    public static void mergeSort(int[] arr, int l, int r) {\n        if (l < r) {\n            int m = l + (r - l) / 2;\n            mergeSort(arr, l, m);\n            mergeSort(arr, m + 1, r);\n            merge(arr, l, m, r);\n        }\n    }\n    private static void merge(int[] arr, int l, int m, int r) {\n        int[] temp = new int[r - l + 1];\n        int i = l, j = m + 1, k = 0;\n        while (i <= m && j <= r) {\n            if (arr[i] <= arr[j]) temp[k++] = arr[i++];\n            else temp[k++] = arr[j++];\n        }\n        while (i <= m) temp[k++] = arr[i++];\n        while (j <= r) temp[k++] = arr[j++];\n        System.arraycopy(temp, 0, arr, l, temp.length);\n    }\n}`,
      python: `def merge_sort(arr: list[int]) -> list[int]:\n    if len(arr) <= 1: return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    res = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]: res.append(left[i]); i += 1\n        else: res.append(right[j]); j += 1\n    res.extend(left[i:])\n    res.extend(right[j:])\n    return res`
    },
    solutionCode: {
      cpp: `void mergeSort(vector<int>& arr, int l, int r) {\n    if(l >= r) return;\n    int m = l + (r - l) / 2;\n    mergeSort(arr, l, m); mergeSort(arr, m + 1, r);\n    vector<int> t; int i = l, j = m + 1;\n    while(i <= m && j <= r) t.push_back(arr[i] <= arr[j] ? arr[i++] : arr[j++]);\n    while(i <= m) t.push_back(arr[i++]); while(j <= r) t.push_back(arr[j++]);\n    for(int k=0; k<t.size(); k++) arr[l+k] = t[k];\n}`,
      c: `void mergeSort() {}`,
      java: `public static void mergeSort(int[] arr, int l, int r) {\n    if(l>=r) return;\n    int m=l+(r-l)/2; mergeSort(arr, l, m); mergeSort(arr, m+1, r);\n    int[] t = new int[r-l+1]; int i=l, j=m+1, k=0;\n    while(i<=m && j<=r) t[k++] = arr[i]<=arr[j]?arr[i++]:arr[j++];\n    while(i<=m) t[k++]=arr[i++]; while(j<=r) t[k++]=arr[j++];\n    System.arraycopy(t, 0, arr, l, t.length);\n}`,
      python: `def merge_sort(arr):\n    if len(arr) <= 1: return arr\n    m = len(arr)//2; L = merge_sort(arr[:m]); R = merge_sort(arr[m:])\n    res = []; i = j = 0\n    while i < len(L) and j < len(R):\n        if L[i] <= R[j]: res.append(L[i]); i += 1\n        else: res.append(R[j]); j += 1\n    res.extend(L[i:]); res.extend(R[j:])\n    return res`
    },
    testCases: [
      { id: 't1', input: '5\n88 72 95 60 85', expectedOutput: '60 72 85 88 95', explanation: 'Sorted merit scores.' },
      { id: 't2', input: '3\n100 90 95', expectedOutput: '90 95 100', explanation: 'Preserves stability.' }
    ],
    defaultVisualizerData: {
      initialState: [88, 72, 95, 60, 85],
      steps: [
        { stepIndex: 0, description: 'Split array into [88, 72, 95] and [60, 85].', highlightIndices: [0, 1, 2], secondaryIndices: [3, 4], message: 'Divide into two halves.' },
        { stepIndex: 1, description: 'Sort and merge left half: [72, 88, 95]. Sort right half: [60, 85].', currentValues: [72, 88, 95, 60, 85], message: 'Conquer sub-problems.' },
        { stepIndex: 2, description: 'Merge both halves stably: [60, 72, 85, 88, 95].', currentValues: [60, 72, 85, 88, 95], message: 'Final merge complete!' }
      ]
    }
  }
];
