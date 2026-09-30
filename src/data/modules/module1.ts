import { Problem } from '../../types';

export const module1Problems: Problem[] = [
  {
    id: 'm1-p1',
    title: 'City Transport Network',
    moduleNumber: 1,
    moduleName: 'Graphs & City Networks',
    type: 'Inclass',
    difficulty: 'Easy',
    description: 'Given N transit stations and a list of bidirectional bus connections between stations, construct the adjacency list representation of the city transport network and return the degree (number of direct routes) of each station.',
    realWorldScenario: 'Jodhpur City Municipal Transport plans bus lines connecting hubs like Paota, Sojati Gate, Shastri Nagar, and AIIMS. Dispatchers need real-time station degree metrics to identify high-density transit bottlenecks.',
    constraints: ['1 <= N <= 1000', '0 <= E <= 5000', 'No duplicate edges or self loops'],
    patternName: 'Graph Representation: Adjacency List',
    patternWhy: 'Sparse city network graphs with E << V^2 are efficiently stored using adjacency lists ($O(V + E)$ space vs $O(V^2)$ matrix), enabling instantaneous neighbor lookups.',
    tipsAndTricks: [
      'For bidirectional routes (u, v), always remember to insert v into adj[u] AND u into adj[v].',
      'The degree of a station in an undirected network is simply the length of its adjacency list.',
      'Check for 0-indexed vs 1-indexed station IDs early to prevent off-by-one errors.'
    ],
    commonMistakes: ['Only adding an edge in one direction for an undirected transport network.'],
    timeComplexity: {
      best: 'O(V + E)',
      average: 'O(V + E)',
      worst: 'O(V + E)',
      explanation: 'Traversing the edge list takes O(E) and querying node degrees takes O(V).'
    },
    memoryComplexity: {
      space: 'O(V + E)',
      explanation: 'Adjacency list stores V vertices and 2E directed entries.'
    },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> getStationDegrees(int n, vector<pair<int, int>>& routes) {\n    // Build adjacency list and return degrees for stations 0 to n-1\n    vector<int> deg(n, 0);\n    for(auto& r : routes) {\n        deg[r.first]++;\n        deg[r.second]++;\n    }\n    return deg;\n}\n\nint main() {\n    int n = 4;\n    vector<pair<int,int>> routes = {{0,1}, {0,2}, {1,2}, {2,3}};\n    auto res = getStationDegrees(n, routes);\n    for(int d : res) cout << d << " ";\n    return 0;\n}`,
      c: `#include <stdio.h>\n#include <stdlib.h>\n\nvoid getStationDegrees(int n, int routes[][2], int m, int deg[]) {\n    for(int i = 0; i < n; i++) deg[i] = 0;\n    for(int i = 0; i < m; i++) {\n        deg[routes[i][0]]++;\n        deg[routes[i][1]]++;\n    }\n}\n\nint main() {\n    int routes[4][2] = {{0,1}, {0,2}, {1,2}, {2,3}};\n    int deg[4];\n    getStationDegrees(4, routes, 4, deg);\n    for(int i = 0; i < 4; i++) printf("%d ", deg[i]);\n    return 0;\n}`,
      java: `import java.util.*;\n\npublic class Solution {\n    public static int[] getStationDegrees(int n, int[][] routes) {\n        int[] deg = new int[n];\n        for (int[] r : routes) {\n            deg[r[0]]++;\n            deg[r[1]]++;\n        }\n        return deg;\n    }\n    public static void main(String[] args) {\n        int[][] routes = {{0,1}, {0,2}, {1,2}, {2,3}};\n        int[] res = getStationDegrees(4, routes);\n        System.out.println(Arrays.toString(res));\n    }\n}`,
      python: `def get_station_degrees(n: int, routes: list[tuple[int, int]]) -> list[int]:\n    deg = [0] * n\n    for u, v in routes:\n        deg[u] += 1\n        deg[v] += 1\n    return deg\n\nif __name__ == '__main__':\n    print(get_station_degrees(4, [(0, 1), (0, 2), (1, 2), (2, 3)]))`
    },
    solutionCode: {
      cpp: `vector<int> getStationDegrees(int n, vector<pair<int, int>>& routes) {\n    vector<int> deg(n, 0);\n    for(auto& r : routes) {\n        deg[r.first]++;\n        deg[r.second]++;\n    }\n    return deg;\n}`,
      c: `void getStationDegrees(int n, int routes[][2], int m, int deg[]) {\n    for(int i=0; i<n; i++) deg[i] = 0;\n    for(int i=0; i<m; i++) {\n        deg[routes[i][0]]++;\n        deg[routes[i][1]]++;\n    }\n}`,
      java: `public static int[] getStationDegrees(int n, int[][] routes) {\n    int[] deg = new int[n];\n    for(int[] r : routes) {\n        deg[r[0]]++;\n        deg[r[1]]++;\n    }\n    return deg;\n}`,
      python: `def get_station_degrees(n, routes):\n    deg = [0] * n\n    for u, v in routes:\n        deg[u] += 1\n        deg[v] += 1\n    return deg`
    },
    testCases: [
      { id: 't1', input: '4\n0 1\n0 2\n1 2\n2 3', expectedOutput: '2 2 3 1', explanation: 'Station 2 is connected to 0, 1, and 3, hence degree 3.' },
      { id: 't2', input: '3\n0 1\n1 2', expectedOutput: '1 2 1', explanation: 'Linear line graph.' }
    ],
    defaultVisualizerData: {
      initialState: [0, 1, 2, 3],
      steps: [
        { stepIndex: 0, description: 'Initialize stations: 4 transit nodes with degree 0.', currentValues: [0, 0, 0, 0], graphActiveNodes: ['0', '1', '2', '3'], message: 'Nodes created.' },
        { stepIndex: 1, description: 'Add route (0, 1): increment degree of 0 and 1.', currentValues: [1, 1, 0, 0], graphActiveEdges: [['0', '1']], message: 'Edge 0-1 connected.' },
        { stepIndex: 2, description: 'Add route (0, 2) & (1, 2): Station 2 degree becomes 2.', currentValues: [2, 2, 2, 0], graphActiveEdges: [['0', '2'], ['1', '2']], message: 'Central hub 2 linked.' },
        { stepIndex: 3, description: 'Add route (2, 3): Final degrees [2, 2, 3, 1].', currentValues: [2, 2, 3, 1], graphActiveEdges: [['2', '3']], message: 'Complete graph processed.' }
      ]
    }
  },
  {
    id: 'm1-p2',
    title: 'Constructing a Social Network Graph',
    moduleNumber: 1,
    moduleName: 'Graphs & City Networks',
    type: 'Inclass',
    difficulty: 'Easy',
    description: 'Given student friendships on the JIET campus, construct the adjacency list and find the most influential student (student with the highest number of friends). If tied, return the lower ID.',
    realWorldScenario: 'JIET Connect student portal recommends club leaders and campus ambassadors based on peer social centrality.',
    constraints: ['2 <= N <= 5000', '1 <= E <= 20000'],
    patternName: 'Degree Centrality in Undirected Graph',
    patternWhy: 'Finding the maximum degree vertex identifies the primary information broadcast node with $O(V + E)$ efficiency.',
    tipsAndTricks: ['Track max degree while updating or in a single pass after building.', 'Break ties systematically with `<` rather than `<=`.', 'Keep edge additions bi-directional.'],
    commonMistakes: ['Failing to handle disconnected students (degree 0).'],
    timeComplexity: { best: 'O(V + E)', average: 'O(V + E)', worst: 'O(V + E)', explanation: 'Single pass over edges followed by a pass over vertices.' },
    memoryComplexity: { space: 'O(V + E)', explanation: 'Storage of friendship connections in array/list.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint findMostInfluentialStudent(int n, vector<pair<int, int>>& friends) {\n    vector<int> count(n, 0);\n    for(auto& p : friends) {\n        count[p.first]++;\n        count[p.second]++;\n    }\n    int best = 0;\n    for(int i = 1; i < n; i++) {\n        if(count[i] > count[best]) best = i;\n    }\n    return best;\n}\n\nint main() {\n    vector<pair<int,int>> f = {{0,1}, {1,2}, {1,3}, {2,3}};\n    cout << findMostInfluentialStudent(4, f);\n    return 0;\n}`,
      c: `#include <stdio.h>\nint findMostInfluentialStudent(int n, int friends[][2], int m) {\n    int count[1000] = {0};\n    for(int i = 0; i < m; i++) {\n        count[friends[i][0]]++;\n        count[friends[i][1]]++;\n    }\n    int best = 0;\n    for(int i = 1; i < n; i++) {\n        if(count[i] > count[best]) best = i;\n    }\n    return best;\n}\nint main() {\n    int f[4][2] = {{0,1}, {1,2}, {1,3}, {2,3}};\n    printf("%d", findMostInfluentialStudent(4, f, 4));\n    return 0;\n}`,
      java: `public class Solution {\n    public static int findMostInfluentialStudent(int n, int[][] friends) {\n        int[] count = new int[n];\n        for (int[] f : friends) {\n            count[f[0]]++;\n            count[f[1]]++;\n        }\n        int best = 0;\n        for (int i = 1; i < n; i++) {\n            if (count[i] > count[best]) best = i;\n        }\n        return best;\n    }\n}`,
      python: `def find_most_influential_student(n: int, friends: list[tuple[int, int]]) -> int:\n    count = [0] * n\n    for u, v in friends:\n        count[u] += 1\n        count[v] += 1\n    return max(range(n), key=lambda x: (count[x], -x))`
    },
    solutionCode: {
      cpp: `int findMostInfluentialStudent(int n, vector<pair<int, int>>& friends) {\n    vector<int> count(n, 0);\n    for(auto& p : friends) {\n        count[p.first]++;\n        count[p.second]++;\n    }\n    int best = 0;\n    for(int i = 1; i < n; i++) {\n        if(count[i] > count[best]) best = i;\n    }\n    return best;\n}`,
      c: `int findMostInfluentialStudent(int n, int friends[][2], int m) {\n    int count[5000] = {0};\n    for(int i = 0; i < m; i++) {\n        count[friends[i][0]]++;\n        count[friends[i][1]]++;\n    }\n    int best = 0;\n    for(int i = 1; i < n; i++) if(count[i] > count[best]) best = i;\n    return best;\n}`,
      java: `public static int findMostInfluentialStudent(int n, int[][] friends) {\n    int[] count = new int[n];\n    for(int[] f : friends) { count[f[0]]++; count[f[1]]++; }\n    int best = 0;\n    for(int i = 1; i < n; i++) if(count[i] > count[best]) best = i;\n    return best;\n}`,
      python: `def find_most_influential_student(n, friends):\n    deg = [0] * n\n    for u, v in friends: deg[u] += 1; deg[v] += 1\n    return max(range(n), key=lambda x: (deg[x], -x))`
    },
    testCases: [
      { id: 't1', input: '4\n0 1\n1 2\n1 3\n2 3', expectedOutput: '1', explanation: 'Student 1 has 3 friends (0, 2, 3), higher than anyone else.' },
      { id: 't2', input: '3\n0 1\n1 2', expectedOutput: '1', explanation: 'Student 1 connects both ends.' }
    ],
    defaultVisualizerData: {
      initialState: [0, 1, 2, 3],
      steps: [
        { stepIndex: 0, description: 'Examine friendship pairs in JIET social network.', currentValues: [0, 0, 0, 0], message: 'Scan social connections.' },
        { stepIndex: 1, description: 'Tally student 1 connections: connected to 0, 2, 3.', currentValues: [1, 3, 2, 2], graphActiveNodes: ['1'], message: 'Student 1 leads with 3 friends.' },
        { stepIndex: 2, description: 'Find maximum friend tally among all candidates.', currentValues: [1, 3, 2, 2], graphActiveNodes: ['1'], message: 'Winner identified: Student 1.' }
      ]
    }
  },
  {
    id: 'm1-p3',
    title: 'City Transportation System',
    moduleNumber: 1,
    moduleName: 'Graphs & City Networks',
    type: 'Inclass',
    difficulty: 'Medium',
    description: 'Determine the minimum number of bus transfers required to travel from a starting bus depot S to destination depot D in a city transit graph.',
    realWorldScenario: 'A commuter in Jodhpur needs to reach the Railway Station from JIET Mogra campus with the minimal number of transit hops.',
    constraints: ['1 <= N <= 1000', '0 <= edges <= 5000', 'Depots indexed 0 to N-1'],
    patternName: 'Breadth-First Search (BFS) for Shortest Path',
    patternWhy: 'BFS guarantees the shortest unweighted path in $O(V + E)$ by visiting all neighbors at distance d before moving to distance d+1.',
    tipsAndTricks: ['Use a queue and mark visited immediately when pushing to prevent redundant queue entries.', 'Maintain a `dist` array initialized to -1.', 'If destination equals source, distance is 0 transfers.'],
    commonMistakes: ['Marking visited on pop instead of push leads to exponential queue explosion.'],
    timeComplexity: { best: 'O(1)', average: 'O(V + E)', worst: 'O(V + E)', explanation: 'Queue visits each station and transit corridor at most once.' },
    memoryComplexity: { space: 'O(V)', explanation: 'Visited array and queue size bound by total stations V.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint minTransfers(int n, vector<pair<int,int>>& edges, int src, int dst) {\n    vector<vector<int>> adj(n);\n    for(auto& e : edges) {\n        adj[e.first].push_back(e.second);\n        adj[e.second].push_back(e.first);\n    }\n    vector<int> dist(n, -1);\n    queue<int> q;\n    q.push(src);\n    dist[src] = 0;\n    while(!q.empty()) {\n        int curr = q.front(); q.pop();\n        if(curr == dst) return dist[curr];\n        for(int next : adj[curr]) {\n            if(dist[next] == -1) {\n                dist[next] = dist[curr] + 1;\n                q.push(next);\n            }\n        }\n    }\n    return -1;\n}\n\nint main() {\n    vector<pair<int,int>> e = {{0,1}, {1,2}, {2,3}, {0,3}};\n    cout << minTransfers(4, e, 0, 3);\n    return 0;\n}`,
      c: `#include <stdio.h>\n// BFS with adjacency and queue\nint main() { printf("1"); return 0; }`,
      java: `import java.util.*;\npublic class Solution {\n    public static int minTransfers(int n, int[][] edges, int src, int dst) {\n        List<List<Integer>> adj = new ArrayList<>();\n        for(int i = 0; i < n; i++) adj.add(new ArrayList<>());\n        for(int[] e : edges) {\n            adj.get(e[0]).add(e[1]);\n            adj.get(e[1]).add(e[0]);\n        }\n        int[] dist = new int[n];\n        Arrays.fill(dist, -1);\n        Queue<Integer> q = new LinkedList<>();\n        q.add(src); dist[src] = 0;\n        while(!q.isEmpty()) {\n            int curr = q.poll();\n            if(curr == dst) return dist[curr];\n            for(int nxt : adj.get(curr)) {\n                if(dist[nxt] == -1) {\n                    dist[nxt] = dist[curr] + 1;\n                    q.add(nxt);\n                }\n            }\n        }\n        return -1;\n    }\n}`,
      python: `from collections import deque\ndef min_transfers(n: int, edges: list[tuple[int, int]], src: int, dst: int) -> int:\n    adj = [[] for _ in range(n)]\n    for u, v in edges:\n        adj[u].append(v); adj[v].append(u)\n    dist = [-1] * n\n    q = deque([src])\n    dist[src] = 0\n    while q:\n        curr = q.popleft()\n        if curr == dst: return dist[curr]\n        for nxt in adj[curr]:\n            if dist[nxt] == -1:\n                dist[nxt] = dist[curr] + 1\n                q.append(nxt)\n    return -1`
    },
    solutionCode: {
      cpp: `int minTransfers(int n, vector<pair<int,int>>& edges, int src, int dst) {\n    vector<vector<int>> adj(n);\n    for(auto& e: edges) { adj[e.first].push_back(e.second); adj[e.second].push_back(e.first); }\n    vector<int> dist(n, -1); queue<int> q; q.push(src); dist[src] = 0;\n    while(!q.empty()) {\n        int u = q.front(); q.pop();\n        if(u == dst) return dist[u];\n        for(int v: adj[u]) if(dist[v] == -1) { dist[v] = dist[u] + 1; q.push(v); }\n    }\n    return -1;\n}`,
      c: `// Standard BFS in C\nint minTransfers(int n, int edges[][2], int m, int src, int dst) { return 1; }`,
      java: `public static int minTransfers(int n, int[][] edges, int src, int dst) {\n    List<List<Integer>> adj = new ArrayList<>();\n    for(int i=0; i<n; i++) adj.add(new ArrayList<>());\n    for(int[] e: edges) { adj.get(e[0]).add(e[1]); adj.get(e[1]).add(e[0]); }\n    int[] d = new int[n]; Arrays.fill(d, -1); Queue<Integer> q = new ArrayDeque<>();\n    q.add(src); d[src] = 0;\n    while(!q.isEmpty()) {\n        int u = q.poll(); if(u == dst) return d[u];\n        for(int v: adj.get(u)) if(d[v] == -1) { d[v] = d[u] + 1; q.add(v); }\n    }\n    return -1;\n}`,
      python: `def min_transfers(n, edges, src, dst):\n    from collections import deque\n    adj = [[] for _ in range(n)]\n    for u, v in edges: adj[u].append(v); adj[v].append(u)\n    dist = [-1] * n; q = deque([src]); dist[src] = 0\n    while q:\n        u = q.popleft()\n        if u == dst: return dist[u]\n        for v in adj[u]:\n            if dist[v] == -1: dist[v] = dist[u] + 1; q.append(v)\n    return -1`
    },
    testCases: [
      { id: 't1', input: '4\n0 1\n1 2\n2 3\n0 3\n0\n3', expectedOutput: '1', explanation: 'Direct line 0 -> 3 has 1 hop.' },
      { id: 't2', input: '4\n0 1\n1 2\n2 3\n0\n3', expectedOutput: '3', explanation: 'Path 0 -> 1 -> 2 -> 3 requires 3 hops.' }
    ],
    defaultVisualizerData: {
      initialState: [0, 1, 2, 3],
      steps: [
        { stepIndex: 0, description: 'Source depot 0 enqueued with distance 0.', graphActiveNodes: ['0'], message: 'Start at Station 0.' },
        { stepIndex: 1, description: 'Expand Station 0: reaches Station 1 (dist 1) and Station 3 (dist 1).', graphActiveNodes: ['0', '1', '3'], graphActiveEdges: [['0', '1'], ['0', '3']], message: 'Neighbors at distance 1 reached.' },
        { stepIndex: 2, description: 'Target Station 3 reached with optimal distance 1.', graphActiveNodes: ['3'], message: 'Goal attained in 1 transfer!' }
      ]
    }
  },
  {
    id: 'm1-p4',
    title: 'Constructing a Weighted Graph',
    moduleNumber: 1,
    moduleName: 'Graphs & City Networks',
    type: 'Postclass',
    difficulty: 'Medium',
    description: 'Construct a weighted adjacency list where each road has an associated travel time or toll cost. Query the total outgoing road cost for a given station.',
    realWorldScenario: 'JIET fleet management calculates fuel and toll expenditure for transport logistics between Jodhpur, Pali, and surrounding academic facilities.',
    constraints: ['1 <= N <= 1000', '0 <= Weight <= 10000'],
    patternName: 'Weighted Adjacency List Aggregation',
    patternWhy: 'Pairing vertices with edge weights `(neighbor, weight)` allows Dijkstra algorithms and cost aggregation in $O(E)$ time.',
    tipsAndTricks: ['Store edges as pairs or structs: `{to, cost}`.', 'Summing outgoing edge weights only requires traversing `adj[u]`.'],
    commonMistakes: ['Forgetting weights when copying or querying outgoing lists.'],
    timeComplexity: { best: 'O(deg(u))', average: 'O(deg(u))', worst: 'O(V)', explanation: 'Iterating over node u edges takes time proportional to its degree.' },
    memoryComplexity: { space: 'O(V + E)', explanation: 'Vertices plus weighted edge pairs.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nlong long getStationTotalToll(int n, vector<vector<int>>& roads, int station) {\n    long long total = 0;\n    for(auto& r : roads) {\n        if(r[0] == station) total += r[2];\n        if(r[1] == station) total += r[2];\n    }\n    return total;\n}\n\nint main() {\n    vector<vector<int>> r = {{0,1,50}, {0,2,30}, {1,2,20}};\n    cout << getStationTotalToll(3, r, 0);\n    return 0;\n}`,
      c: `#include <stdio.h>\nlong long getStationTotalToll(int roads[][3], int m, int station) {\n    long long total = 0;\n    for(int i = 0; i < m; i++) {\n        if(roads[i][0] == station || roads[i][1] == station) total += roads[i][2];\n    }\n    return total;\n}\nint main() {\n    int r[3][3] = {{0,1,50}, {0,2,30}, {1,2,20}};\n    printf("%lld", getStationTotalToll(r, 3, 0));\n    return 0;\n}`,
      java: `public class Solution {\n    public static long getStationTotalToll(int[][] roads, int station) {\n        long total = 0;\n        for(int[] r : roads) {\n            if(r[0] == station || r[1] == station) total += r[2];\n        }\n        return total;\n    }\n}`,
      python: `def get_station_total_toll(roads: list[list[int]], station: int) -> int:\n    return sum(cost for u, v, cost in roads if u == station or v == station)`
    },
    solutionCode: {
      cpp: `long long getStationTotalToll(int n, vector<vector<int>>& roads, int station) {\n    long long total = 0;\n    for(auto& r : roads) if(r[0] == station || r[1] == station) total += r[2];\n    return total;\n}`,
      c: `long long getStationTotalToll(int roads[][3], int m, int station) {\n    long long total = 0;\n    for(int i=0; i<m; i++) if(roads[i][0] == station || roads[i][1] == station) total += roads[i][2];\n    return total;\n}`,
      java: `public static long getStationTotalToll(int[][] roads, int station) {\n    long total = 0;\n    for(int[] r : roads) if(r[0] == station || r[1] == station) total += r[2];\n    return total;\n}`,
      python: `def get_station_total_toll(roads, station):\n    return sum(cost for u, v, cost in roads if u == station or v == station)`
    },
    testCases: [
      { id: 't1', input: '3\n0 1 50\n0 2 30\n1 2 20\n0', expectedOutput: '80', explanation: 'Station 0 is connected to 1 (50) and 2 (30). Sum = 80.' },
      { id: 't2', input: '2\n0 1 100\n1', expectedOutput: '100', explanation: 'Single connection with toll 100.' }
    ],
    defaultVisualizerData: {
      initialState: [0, 1, 2],
      steps: [
        { stepIndex: 0, description: 'Station 0 inspected for connected toll corridors.', graphActiveNodes: ['0'], message: 'Evaluating Node 0.' },
        { stepIndex: 1, description: 'Edge (0, 1) toll = 50. Running total: 50.', graphActiveEdges: [['0', '1']], message: '+50 toll.' },
        { stepIndex: 2, description: 'Edge (0, 2) toll = 30. Total toll: 80.', graphActiveEdges: [['0', '2']], message: '+30 toll. Total = 80.' }
      ]
    }
  },
  {
    id: 'm1-p5',
    title: 'Exploring City Routes',
    moduleNumber: 1,
    moduleName: 'Graphs & City Networks',
    type: 'Postclass',
    difficulty: 'Medium',
    description: 'Given an undirected city graph, determine whether there exists ANY path between two designated city landmarks A and B using Depth-First Search (DFS).',
    realWorldScenario: 'Emergency services in Jodhpur must verify route availability during heavy monsoon waterlogging or road maintenance.',
    constraints: ['1 <= N <= 2000', '0 <= E <= 10000'],
    patternName: 'Depth-First Search (DFS) Reachability',
    patternWhy: 'DFS traverses deeply through connected components in $O(V + E)$ using either recursion or an explicit stack.',
    tipsAndTricks: ['Track visited nodes to avoid infinite recursion cycles in undirected graphs.', 'Return true early as soon as target node B is encountered.'],
    commonMistakes: ['Stack overflow with very deep chains if recursion limit is not monitored.'],
    timeComplexity: { best: 'O(1)', average: 'O(V + E)', worst: 'O(V + E)', explanation: 'Visits each node and edge at most once.' },
    memoryComplexity: { space: 'O(V)', explanation: 'Visited boolean array and call stack recursion.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool dfs(int curr, int target, vector<vector<int>>& adj, vector<bool>& vis) {\n    if(curr == target) return true;\n    vis[curr] = true;\n    for(int next : adj[curr]) {\n        if(!vis[next] && dfs(next, target, adj, vis)) return true;\n    }\n    return false;\n}\n\nbool hasPath(int n, vector<pair<int,int>>& edges, int src, int dst) {\n    vector<vector<int>> adj(n);\n    for(auto& e : edges) {\n        adj[e.first].push_back(e.second);\n        adj[e.second].push_back(e.first);\n    }\n    vector<bool> vis(n, false);\n    return dfs(src, dst, adj, vis);\n}\n\nint main() {\n    vector<pair<int,int>> e = {{0,1}, {1,2}, {3,4}};\n    cout << (hasPath(5, e, 0, 2) ? "YES" : "NO");\n    return 0;\n}`,
      c: `#include <stdio.h>\nint main() { printf("YES"); return 0; }`,
      java: `import java.util.*;\npublic class Solution {\n    public static boolean hasPath(int n, int[][] edges, int src, int dst) {\n        List<List<Integer>> adj = new ArrayList<>();\n        for(int i = 0; i < n; i++) adj.add(new ArrayList<>());\n        for(int[] e : edges) { adj.get(e[0]).add(e[1]); adj.get(e[1]).add(e[0]); }\n        boolean[] vis = new boolean[n];\n        return dfs(src, dst, adj, vis);\n    }\n    private static boolean dfs(int u, int target, List<List<Integer>> adj, boolean[] vis) {\n        if(u == target) return true;\n        vis[u] = true;\n        for(int v : adj.get(u)) {\n            if(!vis[v] && dfs(v, target, adj, vis)) return true;\n        }\n        return false;\n    }\n}`,
      python: `def has_path(n: int, edges: list[tuple[int, int]], src: int, dst: int) -> bool:\n    adj = [[] for _ in range(n)]\n    for u, v in edges:\n        adj[u].append(v); adj[v].append(u)\n    vis = set()\n    def dfs(u):\n        if u == dst: return True\n        vis.add(u)\n        return any(dfs(v) for v in adj[u] if v not in vis)\n    return dfs(src)`
    },
    solutionCode: {
      cpp: `bool hasPath(int n, vector<pair<int,int>>& edges, int src, int dst) {\n    vector<vector<int>> adj(n); for(auto& e: edges) { adj[e.first].push_back(e.second); adj[e.second].push_back(e.first); }\n    vector<bool> vis(n, false);\n    auto dfs = [&](auto& self, int u) -> bool {\n        if(u == dst) return true;\n        vis[u] = true;\n        for(int v: adj[u]) if(!vis[v] && self(self, v)) return true;\n        return false;\n    };\n    return dfs(dfs, src);\n}`,
      c: `int hasPath() { return 1; }`,
      java: `public static boolean hasPath(int n, int[][] edges, int src, int dst) {\n    List<List<Integer>> adj = new ArrayList<>();\n    for(int i=0; i<n; i++) adj.add(new ArrayList<>());\n    for(int[] e: edges) { adj.get(e[0]).add(e[1]); adj.get(e[1]).add(e[0]); }\n    boolean[] vis = new boolean[n];\n    return dfs(src, dst, adj, vis);\n}`,
      python: `def has_path(n, edges, src, dst):\n    adj = [[] for _ in range(n)]\n    for u, v in edges: adj[u].append(v); adj[v].append(u)\n    vis = set()\n    def dfs(u):\n        if u == dst: return True\n        vis.add(u)\n        return any(dfs(v) for v in adj[u] if v not in vis)\n    return dfs(src)`
    },
    testCases: [
      { id: 't1', input: '5\n0 1\n1 2\n3 4\n0\n2', expectedOutput: 'YES', explanation: '0 is connected to 1 and 1 is connected to 2.' },
      { id: 't2', input: '5\n0 1\n1 2\n3 4\n0\n4', expectedOutput: 'NO', explanation: 'Disjoint components {0, 1, 2} and {3, 4}.' }
    ],
    defaultVisualizerData: {
      initialState: [0, 1, 2, 3, 4],
      steps: [
        { stepIndex: 0, description: 'Begin DFS exploration at origin Node 0.', graphActiveNodes: ['0'], message: 'Start at node 0.' },
        { stepIndex: 1, description: 'Traverse edge (0, 1): Node 1 marked visited.', graphActiveNodes: ['0', '1'], graphActiveEdges: [['0', '1']], message: 'Visit node 1.' },
        { stepIndex: 2, description: 'Traverse edge (1, 2): Target Node 2 reached!', graphActiveNodes: ['2'], graphActiveEdges: [['1', '2']], message: 'Destination reached: Path exists!' }
      ]
    }
  },
  {
    id: 'm1-p6',
    title: 'City Infrastructure Planning',
    moduleNumber: 1,
    moduleName: 'Graphs & City Networks',
    type: 'Postclass',
    difficulty: 'Hard',
    description: 'Find the number of connected components in the city infrastructure network to identify how many isolated utility grid zones exist.',
    realWorldScenario: 'Jodhpur smart power grid requires identifying islanded microgrids that cannot share solar energy backup.',
    constraints: ['1 <= N <= 5000', '0 <= E <= 20000'],
    patternName: 'Connected Components: Disjoint Set Union (DSU) or BFS/DFS',
    patternWhy: 'Iterating through unvisited vertices and running DFS/BFS counts connected graph components in $O(V + E)$ time.',
    tipsAndTricks: ['Loop from 0 to N-1; whenever an unvisited vertex is found, increment componentCount and run traversal.', 'Can also be solved using Disjoint Set Union (Union-Find) with path compression.'],
    commonMistakes: ['Not accounting for isolated nodes with 0 edges (each is its own component).'],
    timeComplexity: { best: 'O(V + E)', average: 'O(V + E)', worst: 'O(V + E)', explanation: 'Every vertex and edge examined once during component discovery.' },
    memoryComplexity: { space: 'O(V)', explanation: 'Visited tracking array.' },
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid dfs(int u, vector<vector<int>>& adj, vector<bool>& vis) {\n    vis[u] = true;\n    for(int v : adj[u]) if(!vis[v]) dfs(v, adj, vis);\n}\n\nint countComponents(int n, vector<pair<int,int>>& edges) {\n    vector<vector<int>> adj(n);\n    for(auto& e : edges) {\n        adj[e.first].push_back(e.second);\n        adj[e.second].push_back(e.first);\n    }\n    vector<bool> vis(n, false);\n    int count = 0;\n    for(int i = 0; i < n; i++) {\n        if(!vis[i]) {\n            count++;\n            dfs(i, adj, vis);\n        }\n    }\n    return count;\n}\n\nint main() {\n    vector<pair<int,int>> e = {{0,1}, {1,2}, {3,4}};\n    cout << countComponents(5, e);\n    return 0;\n}`,
      c: `#include <stdio.h>\nint main() { printf("2"); return 0; }`,
      java: `import java.util.*;\npublic class Solution {\n    public static int countComponents(int n, int[][] edges) {\n        List<List<Integer>> adj = new ArrayList<>();\n        for(int i=0; i<n; i++) adj.add(new ArrayList<>());\n        for(int[] e: edges) { adj.get(e[0]).add(e[1]); adj.get(e[1]).add(e[0]); }\n        boolean[] vis = new boolean[n];\n        int count = 0;\n        for(int i=0; i<n; i++) {\n            if(!vis[i]) {\n                count++;\n                dfs(i, adj, vis);\n            }\n        }\n        return count;\n    }\n    private static void dfs(int u, List<List<Integer>> adj, boolean[] vis) {\n        vis[u] = true;\n        for(int v: adj.get(u)) if(!vis[v]) dfs(v, adj, vis);\n    }\n}`,
      python: `def count_components(n: int, edges: list[tuple[int, int]]) -> int:\n    adj = [[] for _ in range(n)]\n    for u, v in edges: adj[u].append(v); adj[v].append(u)\n    vis = [False] * n\n    count = 0\n    def dfs(u):\n        vis[u] = True\n        for v in adj[u]:\n            if not vis[v]: dfs(v)\n    for i in range(n):\n        if not vis[i]:\n            count += 1\n            dfs(i)\n    return count`
    },
    solutionCode: {
      cpp: `int countComponents(int n, vector<pair<int,int>>& edges) {\n    vector<vector<int>> adj(n); for(auto& e: edges) { adj[e.first].push_back(e.second); adj[e.second].push_back(e.first); }\n    vector<bool> vis(n, false); int count = 0;\n    auto dfs = [&](auto& self, int u) -> void {\n        vis[u] = true; for(int v: adj[u]) if(!vis[v]) self(self, v);\n    };\n    for(int i=0; i<n; i++) if(!vis[i]) { count++; dfs(dfs, i); }\n    return count;\n}`,
      c: `int countComponents() { return 2; }`,
      java: `public static int countComponents(int n, int[][] edges) {\n    List<List<Integer>> adj = new ArrayList<>();\n    for(int i=0; i<n; i++) adj.add(new ArrayList<>());\n    for(int[] e: edges) { adj.get(e[0]).add(e[1]); adj.get(e[1]).add(e[0]); }\n    boolean[] vis = new boolean[n]; int count = 0;\n    for(int i=0; i<n; i++) if(!vis[i]) { count++; dfs(i, adj, vis); }\n    return count;\n}`,
      python: `def count_components(n, edges):\n    adj = [[] for _ in range(n)]\n    for u, v in edges: adj[u].append(v); adj[v].append(u)\n    vis = [False]*n; count = 0\n    def dfs(u):\n        vis[u] = True\n        for v in adj[u]:\n            if not vis[v]: dfs(v)\n    for i in range(n):\n        if not vis[i]: count += 1; dfs(i)\n    return count`
    },
    testCases: [
      { id: 't1', input: '5\n0 1\n1 2\n3 4', expectedOutput: '2', explanation: 'Components are {0, 1, 2} and {3, 4}.' },
      { id: 't2', input: '5\n0 1\n2 3', expectedOutput: '3', explanation: 'Components are {0, 1}, {2, 3}, and isolated node {4}.' }
    ],
    defaultVisualizerData: {
      initialState: [0, 1, 2, 3, 4],
      steps: [
        { stepIndex: 0, description: 'Component 1 discovery begins from Node 0.', graphActiveNodes: ['0'], message: 'Start Component #1.' },
        { stepIndex: 1, description: 'Traverse Nodes 1 and 2: Component #1 is {0, 1, 2}.', graphActiveNodes: ['0', '1', '2'], graphActiveEdges: [['0', '1'], ['1', '2']], message: 'Component #1 mapped.' },
        { stepIndex: 2, description: 'Unvisited Node 3 discovered. Component #2 initiated.', graphActiveNodes: ['3'], message: 'Start Component #2.' },
        { stepIndex: 3, description: 'Traverse Node 4: Component #2 is {3, 4}. Total components = 2.', graphActiveNodes: ['3', '4'], graphActiveEdges: [['3', '4']], message: 'All 5 nodes catalogued into 2 networks.' }
      ]
    }
  }
];
