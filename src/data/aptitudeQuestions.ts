export interface AptitudeQuestion {
  id: number;
  category: 'Quantitative' | 'Logical' | 'Technical CS' | 'Data Structures';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  points: number;
}

export const aptitudeQuestions: AptitudeQuestion[] = [
  {
    id: 1,
    category: 'Quantitative',
    question: 'A can complete a project in 12 days and B in 18 days. If they work together with C, they finish the work in 4 days. In how many days can C alone complete the project?',
    options: ['8 days', '9 days', '10 days', '12 days'],
    correctIndex: 1,
    explanation: '1/C = 1/4 - (1/12 + 1/18) = 1/4 - 5/36 = (9 - 5)/36 = 4/36 = 1/9. Thus, C alone takes 9 days.',
    points: 10
  },
  {
    id: 2,
    category: 'Quantitative',
    question: 'A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?',
    options: ['65 sec', '89 sec', '90 sec', '75 sec'],
    correctIndex: 1,
    explanation: 'Speed = 240 / 24 = 10 m/s. Total distance to cross platform = 240 + 650 = 890 m. Time = 890 / 10 = 89 seconds.',
    points: 10
  },
  {
    id: 3,
    category: 'Quantitative',
    question: 'What is the greatest number that will divide 390, 495, and 300 without leaving a remainder?',
    options: ['5', '15', '25', '35'],
    correctIndex: 1,
    explanation: 'HCF(390, 495, 300): 390 = 15 * 26; 495 = 15 * 33; 300 = 15 * 20. The Greatest Common Divisor is 15.',
    points: 10
  },
  {
    id: 4,
    category: 'Logical',
    question: 'Find the next term in the series: 3, 12, 27, 48, 75, ?',
    options: ['96', '108', '112', '120'],
    correctIndex: 1,
    explanation: 'The pattern is 3 * n^2: 3*(1^2)=3, 3*(2^2)=12, 3*(3^2)=27, 3*(4^2)=48, 3*(5^2)=75, 3*(6^2)=108.',
    points: 10
  },
  {
    id: 5,
    category: 'Technical CS',
    question: 'In an Operating System with virtual memory, what phenomenon occurs when excessive page faults lead to continuous page swapping, degrading system throughput to near zero?',
    options: ['Starvation', 'Thrashing', 'Deadlock', 'Belady’s Anomaly'],
    correctIndex: 1,
    explanation: 'Thrashing occurs when the system spends more time servicing page faults and paging in/out than executing user processes.',
    points: 10
  },
  {
    id: 6,
    category: 'Data Structures',
    question: 'What is the worst-case time complexity of searching for an element in an unbalanced Binary Search Tree with N nodes?',
    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N log N)'],
    correctIndex: 2,
    explanation: 'In the worst case (skewed tree like a linked list), the search degrades to linear traversal, O(N).',
    points: 10
  },
  {
    id: 7,
    category: 'Quantitative',
    question: 'Two cards are drawn from a pack of 52 cards without replacement. What is the probability that both are aces?',
    options: ['1/221', '1/169', '1/26', '4/663'],
    correctIndex: 0,
    explanation: 'P(First Ace) = 4/52 = 1/13. P(Second Ace) = 3/51 = 1/17. Combined = (1/13) * (1/17) = 1/221.',
    points: 10
  },
  {
    id: 8,
    category: 'Logical',
    question: 'Pointing to a gentleman, Deepak said, "His only brother is the father of my daughter\'s father." How is the gentleman related to Deepak?',
    options: ['Father', 'Uncle', 'Grandfather', 'Brother-in-law'],
    correctIndex: 1,
    explanation: 'My daughter\'s father = Deepak himself. Father of Deepak = Deepak\'s father. His brother = Deepak\'s father\'s brother, which is Deepak\'s Uncle.',
    points: 10
  },
  {
    id: 9,
    category: 'Technical CS',
    question: 'Which Normal Form in Relational Database Management Systems eliminates transitive dependencies between non-prime attributes?',
    options: ['First Normal Form (1NF)', 'Second Normal Form (2NF)', 'Third Normal Form (3NF)', 'Boyce-Codd Normal Form (BCNF)'],
    correctIndex: 2,
    explanation: '3NF requires 2NF plus no non-prime attribute should be transitively dependent on any candidate key.',
    points: 10
  },
  {
    id: 10,
    category: 'Data Structures',
    question: 'Which sorting algorithm has a worst-case time complexity of O(N log N) and can be implemented as an in-place sort using a binary heap?',
    options: ['Merge Sort', 'Quick Sort', 'Heap Sort', 'Bubble Sort'],
    correctIndex: 2,
    explanation: 'Heap Sort achieves guaranteed O(N log N) worst-case time and sorts in-place using O(1) auxiliary space.',
    points: 10
  },
  {
    id: 11,
    category: 'Quantitative',
    question: 'A shopkeeper marks an item 40% above cost price and allows a 20% discount on the marked price. What is his net profit percentage?',
    options: ['12%', '16%', '18%', '20%'],
    correctIndex: 0,
    explanation: 'Let CP = 100. MP = 140. SP = 140 * 0.8 = 112. Profit = 112 - 100 = 12%.',
    points: 10
  },
  {
    id: 12,
    category: 'Logical',
    question: 'In a code, "PATNA" is written as "QBUOB". How is "DELHI" written in that same code?',
    options: ['EFMIJ', 'EDMIJ', 'EFMIH', 'CFMHI'],
    correctIndex: 0,
    explanation: 'Each character is shifted forward by +1: D->E, E->F, L->M, H->I, I->J => EFMIJ.',
    points: 10
  },
  {
    id: 13,
    category: 'Technical CS',
    question: 'In TCP/IP networking, what is the purpose of the SYN-ACK packet during connection establishment?',
    options: ['To terminate connection', 'To acknowledge client’s SYN and synchronize server’s sequence number', 'To retransmit lost packets', 'To negotiate SSL certificate'],
    correctIndex: 1,
    explanation: 'The three-way handshake proceeds: Client SYN -> Server SYN-ACK -> Client ACK.',
    points: 10
  },
  {
    id: 14,
    category: 'Data Structures',
    question: 'What is the amortized time complexity of inserting an element into a dynamic array (like std::vector or ArrayList) when capacity is doubled?',
    options: ['O(N)', 'O(1)', 'O(log N)', 'O(N^2)'],
    correctIndex: 1,
    explanation: 'Although resizing takes O(N), it happens infrequently enough that the amortized cost per append is O(1).',
    points: 10
  },
  {
    id: 15,
    category: 'Quantitative',
    question: 'The sum of ages of 5 children born at intervals of 3 years each is 50 years. What is the age of the youngest child?',
    options: ['4 years', '6 years', '8 years', '10 years'],
    correctIndex: 0,
    explanation: 'Let youngest be x. x + (x+3) + (x+6) + (x+9) + (x+12) = 50 => 5x + 30 = 50 => 5x = 20 => x = 4.',
    points: 10
  },
  {
    id: 16,
    category: 'Logical',
    question: 'Statements: All cats are dogs. All dogs are birds. Conclusion I: All cats are birds. Conclusion II: All birds are cats.',
    options: ['Only I follows', 'Only II follows', 'Either I or II follows', 'Neither I nor II follows'],
    correctIndex: 0,
    explanation: 'Cats ⊆ Dogs ⊆ Birds. Therefore, All cats are birds (I is True). All birds are cats is not guaranteed (II is False).',
    points: 10
  },
  {
    id: 17,
    category: 'Technical CS',
    question: 'In C++, what happens when a derived class destructor is called if the base class destructor is NOT declared virtual?',
    options: ['Compilation error', 'Undefined behavior / partial destruction causing memory leaks', 'Both destructors run automatically', 'Program aborts immediately'],
    correctIndex: 1,
    explanation: 'Deleting a derived object through a base pointer without a virtual destructor in the base class leads to undefined behavior and resource leaks.',
    points: 10
  },
  {
    id: 18,
    category: 'Data Structures',
    question: 'Which graph traversal algorithm uses a First-In-First-Out (FIFO) queue and finds the shortest path in an unweighted graph?',
    options: ['Depth First Search (DFS)', 'Breadth First Search (BFS)', 'Dijkstra’s Algorithm', 'Kruskal’s Algorithm'],
    correctIndex: 1,
    explanation: 'BFS traverses level-by-level using a queue, guaranteeing the shortest path in terms of number of edges on unweighted graphs.',
    points: 10
  },
  {
    id: 19,
    category: 'Quantitative',
    question: 'An amount doubles itself in 5 years at simple interest. In how many years will it become 4 times itself at the same rate?',
    options: ['10 years', '15 years', '20 years', '25 years'],
    correctIndex: 1,
    explanation: 'Simple interest earned in 5 years = Principal (P). To become 4P, total interest needed = 3P. Time = 3 * 5 = 15 years.',
    points: 10
  },
  {
    id: 20,
    category: 'Logical',
    question: 'If CLOCK is coded as 341235, what would be the code for LOCK?',
    options: ['4123', '41235', '4125', '3412'],
    correctIndex: 0,
    explanation: 'Direct positional correspondence: C=3, L=4, O=1, C=2, K=3... L=4, O=1, C=2, K=3 => 4123.',
    points: 10
  },
  {
    id: 21,
    category: 'Technical CS',
    question: 'What is the primary difference between a process and a thread in modern operating systems?',
    options: [
      'Threads have separate address spaces; processes share address spaces',
      'Processes have separate address spaces; threads within a process share the same address space',
      'Threads cannot be scheduled independently',
      'Processes use less memory than threads'
    ],
    correctIndex: 1,
    explanation: 'Processes have independent virtual address spaces, while threads within the same process share code, data, and OS resources with their own stacks.',
    points: 10
  },
  {
    id: 22,
    category: 'Data Structures',
    question: 'In a Hash Table with collision handling via separate chaining, what is the worst-case lookup time if all keys hash to the same bucket?',
    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N^2)'],
    correctIndex: 2,
    explanation: 'When all keys collide into a single bucket, the chain becomes a linked list of length N, resulting in O(N) lookup time.',
    points: 10
  },
  {
    id: 23,
    category: 'Quantitative',
    question: 'In how many different ways can the letters of the word "LEADING" be arranged such that vowels always appear together?',
    options: ['360', '720', '480', '5040'],
    correctIndex: 1,
    explanation: 'Vowels: E, A, I (3). Consonants: L, D, N, G (4). Group vowels as 1 unit: 5 units arrange in 5! = 120 ways. Vowels permute internally in 3! = 6 ways. Total = 120 * 6 = 720 ways.',
    points: 10
  },
  {
    id: 24,
    category: 'Logical',
    question: 'A clock shows 8:30. What is the angle between the hour hand and the minute hand?',
    options: ['60°', '75°', '80°', '90°'],
    correctIndex: 1,
    explanation: 'Angle = |30 * H - (11/2) * M| = |30 * 8 - (11/2) * 30| = |240 - 165| = 75 degrees.',
    points: 10
  },
  {
    id: 25,
    category: 'Technical CS',
    question: 'Which of the following sorting algorithms is NOT stable in its standard array implementation?',
    options: ['Merge Sort', 'Insertion Sort', 'Quick Sort', 'Bubble Sort'],
    correctIndex: 2,
    explanation: 'Standard Quick Sort does not preserve the relative order of elements with equal keys during partitioning, making it an unstable sort.',
    points: 10
  }
];
