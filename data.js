window.QUESTION_BANK = [
  {
    "id": "alg-lru-1",
    "category": "Algorithms",
    "difficulty": "Warm-up",
    "type": "multiple",
    "prompt": "A metadata cache has a fixed capacity. When it fills up, which item should an LRU cache evict?",
    "choices": [
      "The newest item",
      "The least recently used item",
      "A random item",
      "The item with the largest value"
    ],
    "answer": 1,
    "explanation": "LRU means Least Recently Used. A cache keeps hot entries and evicts the entry that has gone unused the longest.",
    "pattern": "HashMap + access-order list",
    "use": "CDN metadata, API response caches, local object caches",
    "code": "LinkedHashMap<>(capacity, 0.75f, true)"
  },
  {
    "id": "alg-lru-2",
    "category": "Algorithms",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "Why combine a HashMap with a doubly linked list in a hand-built LRU cache?",
    "choices": [
      "To sort keys alphabetically",
      "To make lookup and recency updates O(1)",
      "To avoid storing values",
      "To make the cache thread-safe automatically"
    ],
    "answer": 1,
    "explanation": "The map finds a node in constant time. The doubly linked list removes and reinserts that node in constant time when its recency changes.",
    "pattern": "HashMap + doubly linked list",
    "use": "Bounded caches with fast reads and evictions"
  },
  {
    "id": "alg-topk-1",
    "category": "Algorithms",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "You need the 10 most-watched titles from millions of viewing events. Which pattern fits best?",
    "choices": [
      "HashMap frequency count + min heap of size 10",
      "DFS + recursion",
      "Merge intervals",
      "Binary search tree only"
    ],
    "answer": 0,
    "explanation": "Count occurrences in a HashMap, then keep only the K best entries in a min heap. This avoids sorting every item.",
    "pattern": "Frequency map + min heap",
    "use": "Trending titles, top API endpoints, most frequent errors",
    "code": "if (heap.size() > k) heap.poll();"
  },
  {
    "id": "alg-interval-1",
    "category": "Algorithms",
    "difficulty": "Warm-up",
    "type": "multiple",
    "prompt": "Production outage windows overlap: [1,3], [2,6], [8,10]. What is the merged result?",
    "choices": [
      "[1,3], [2,6], [8,10]",
      "[1,6], [8,10]",
      "[1,10]",
      "[2,3], [8,10]"
    ],
    "answer": 1,
    "explanation": "Sort by start time. Because [1,3] overlaps [2,6], extend the first interval end to 6. [8,10] stays separate.",
    "pattern": "Sort + sweep",
    "use": "Outage windows, PTO ranges, reservation blocks"
  },
  {
    "id": "alg-meeting-1",
    "category": "Algorithms",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "To calculate the minimum number of reservation agents needed for overlapping appointments, what does the min heap store?",
    "choices": [
      "Customer names",
      "Appointment start times",
      "Active appointment end times",
      "Every appointment object forever"
    ],
    "answer": 2,
    "explanation": "The earliest end time tells you whether a resource can be reused. Heap size tracks current concurrent demand.",
    "pattern": "Sort by start + min heap of end times",
    "use": "Meeting rooms, support agents, reservation counters, worker capacity"
  },
  {
    "id": "alg-window-1",
    "category": "Algorithms",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "Which technique solves longest substring without repeating characters efficiently?",
    "choices": [
      "Sliding window with latest-seen indexes",
      "Nested loops only",
      "Topological sort",
      "Union-find"
    ],
    "answer": 0,
    "explanation": "Expand the right edge. When a duplicate appears inside the current window, move the left edge past the previous occurrence.",
    "pattern": "Sliding window",
    "use": "Unique session streaks, event-window analysis, fraud-sequence analysis"
  },
  {
    "id": "alg-islands-1",
    "category": "Algorithms",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "A warehouse map contains clusters of connected occupied bins. Which classic interview problem is the closest match?",
    "choices": [
      "LRU Cache",
      "Number of Islands",
      "Merge Intervals",
      "Top K Frequent"
    ],
    "answer": 1,
    "explanation": "Treat each occupied bin as land. Each DFS or BFS flood fill marks one connected component.",
    "pattern": "Grid traversal / connected components",
    "use": "Map regions, clusters, connected machines, occupied-bin groups"
  },
  {
    "id": "alg-tree-1",
    "category": "Algorithms",
    "difficulty": "Warm-up",
    "type": "multiple",
    "prompt": "Which traversal produces sorted output when run on a binary search tree?",
    "choices": [
      "Preorder",
      "Inorder",
      "Postorder",
      "Level order only"
    ],
    "answer": 1,
    "explanation": "Inorder traversal visits Left -> Root -> Right. On a BST, that yields values in sorted order.",
    "pattern": "Tree traversal",
    "use": "BST sorted output, hierarchies, AST processing"
  },
  {
    "id": "alg-graph-1",
    "category": "Algorithms",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "You need the fewest hops between two delivery hubs in an unweighted graph. Use:",
    "choices": [
      "DFS",
      "BFS",
      "Heap sort",
      "Postorder traversal"
    ],
    "answer": 1,
    "explanation": "BFS explores layer by layer, so the first time you reach the destination is the shortest number of unweighted hops.",
    "pattern": "Breadth-first search",
    "use": "Fewest-hop routes, friend degrees, dependency distance"
  },
  {
    "id": "alg-word-1",
    "category": "Algorithms",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "Why does Word Search temporarily mark a board cell and then restore it?",
    "choices": [
      "To sort the grid",
      "To backtrack safely without reusing a cell in the same path",
      "To reduce memory to zero",
      "To make DFS breadth-first"
    ],
    "answer": 1,
    "explanation": "The algorithm explores one candidate path, marks cells used by that path, and restores them when trying another route.",
    "pattern": "DFS + backtracking",
    "use": "Puzzles, route exploration, constraint search"
  },
  {
    "id": "java-sort-1",
    "category": "Java",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "Tasks should sort by priority descending, then submittedAt ascending. Which comparator expresses that intent?",
    "choices": [
      "Comparator.comparing(Task::priority)",
      "Comparator.comparing(Task::priority).reversed().thenComparing(Task::submittedAt)",
      "Comparator.comparing(Task::submittedAt).reversed()",
      "Collections.shuffle(tasks)"
    ],
    "answer": 1,
    "explanation": "Reverse only the priority comparator, then use the timestamp as a natural ascending tie-breaker so older equal-priority tasks run first.",
    "pattern": "Comparator + tie-breaker",
    "use": "Schedulers, ticket queues, leaderboard ranking",
    "code": "Comparator.comparing(Task::priority).reversed().thenComparing(Task::submittedAt)"
  },
  {
    "id": "java-sort-2",
    "category": "Java",
    "difficulty": "Warm-up",
    "type": "multiple",
    "prompt": "After sorting [9, 4, 1, 7], what is the minimum adjacent difference?",
    "choices": [
      "1",
      "2",
      "3",
      "5"
    ],
    "answer": 1,
    "explanation": "Sorted input is [1,4,7,9]. Adjacent differences are 3, 3, and 2. The minimum is 2.",
    "pattern": "Sort then scan",
    "use": "Closest values, duplicate detection, smallest gaps"
  },
  {
    "id": "java-streams-1",
    "category": "Java",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "A live telemetry window needs only recent events, converted to speeds, sorted descending. Which Streams pipeline is most appropriate?",
    "choices": [
      "filter -> map -> sorted -> toList",
      "peek -> reduce only",
      "flatMap -> parallel forever",
      "sort the database schema"
    ],
    "answer": 0,
    "explanation": "Streams are excellent for readable transformations over a current in-memory event window: filter, transform, sort, collect.",
    "pattern": "Streams pipeline",
    "use": "Telemetry snapshots, dashboard summaries, current-window analytics",
    "code": ".filter(this::recent).map(Event::speed).sorted(reverseOrder()).toList()"
  },
  {
    "id": "java-queue-1",
    "category": "Java",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "Several worker threads must safely consume jobs produced by another thread. Which queue is the best fit?",
    "choices": [
      "ArrayList",
      "BlockingQueue",
      "HashSet",
      "StringBuilder"
    ],
    "answer": 1,
    "explanation": "BlockingQueue is thread-safe and naturally coordinates producers and consumers. Workers can block until work is available.",
    "pattern": "ExecutorService + BlockingQueue",
    "use": "Worker pools, dispatchers, batch processing, ingestion pipelines",
    "code": "BlockingQueue<Job> queue = new LinkedBlockingQueue<>();"
  },
  {
    "id": "java-concurrent-1",
    "category": "Java",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "Many request threads increment per-endpoint counters. Which approach avoids a single coarse lock?",
    "choices": [
      "ConcurrentHashMap<String, LongAdder>",
      "Plain HashMap and hope",
      "TreeMap only",
      "LinkedList with recursion"
    ],
    "answer": 0,
    "explanation": "ConcurrentHashMap supports concurrent access, and LongAdder performs well under contention for counters.",
    "pattern": "ConcurrentHashMap + LongAdder",
    "use": "Metrics, request counts, per-key aggregations"
  },
  {
    "id": "spring-config-1",
    "category": "Spring",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "Why use Spring Cloud Config in a distributed system?",
    "choices": [
      "To hard-code every property into each service",
      "To centralize externalized configuration across services and environments",
      "To replace every database",
      "To avoid version control"
    ],
    "answer": 1,
    "explanation": "Config Server gives services a central source for environment-specific settings. Config clients import their settings during startup.",
    "pattern": "Spring Cloud Config",
    "use": "Shared configuration, environment overrides, safer operational changes",
    "code": "spring.config.import: optional:configserver:http://localhost:8888"
  },
  {
    "id": "spring-cb-1",
    "category": "Spring",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "An inventory dependency keeps failing. What should a circuit breaker do after the failure threshold is crossed?",
    "choices": [
      "Keep hammering the dependency indefinitely",
      "Open the circuit and return fallback behavior quickly",
      "Delete the service database",
      "Increase every timeout forever"
    ],
    "answer": 1,
    "explanation": "When the circuit opens, calls fail fast or use a fallback. This prevents cascading failures and gives the dependency time to recover.",
    "pattern": "Circuit breaker",
    "use": "Remote API resilience, downstream protection, graceful degradation"
  },
  {
    "id": "spring-jpa-1",
    "category": "Spring",
    "difficulty": "Warm-up",
    "type": "multiple",
    "prompt": "What does a Spring Data JPA repository provide for an entity?",
    "choices": [
      "CRUD operations and query support",
      "Only CSS generation",
      "A message broker",
      "A mobile simulator"
    ],
    "answer": 0,
    "explanation": "Repository interfaces reduce persistence boilerplate. You get CRUD methods and can add derived queries such as findByStatus.",
    "pattern": "Spring Data JPA repository",
    "use": "Database integration, entity persistence, derived queries",
    "code": "interface OrderRepository extends JpaRepository<CustomerOrder, Long> {}"
  },
  {
    "id": "dist-eventual-1",
    "category": "Architecture",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "What does eventual consistency mean in a distributed system?",
    "choices": [
      "Every service always commits in one global transaction",
      "Services may temporarily disagree but converge after propagation and retries",
      "Messages can never be retried",
      "Databases are unnecessary"
    ],
    "answer": 1,
    "explanation": "A service may commit first and publish an event. Downstream services update shortly afterward. The system converges without requiring global locking.",
    "pattern": "Eventual consistency",
    "use": "Orders, notifications, analytics, fulfillment, distributed workflows"
  },
  {
    "id": "dist-idem-1",
    "category": "Architecture",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "A message broker can redeliver events. What should the consumer assume?",
    "choices": [
      "Duplicates are impossible",
      "Duplicates will happen, so processing must be idempotent",
      "The queue should be removed",
      "Every consumer needs a distributed lock across the company"
    ],
    "answer": 1,
    "explanation": "At-least-once delivery is common. Use event IDs, unique constraints, processed-message tables, and safe state transitions.",
    "pattern": "Idempotent consumer",
    "use": "Payments, fulfillment, email dispatch, event replay"
  },
  {
    "id": "dist-outbox-1",
    "category": "Architecture",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "What problem does the Outbox Pattern solve?",
    "choices": [
      "Atomicity between a database state change and intent to publish an event",
      "Sorting integer arrays",
      "Rendering CSS",
      "Increasing heap memory only"
    ],
    "answer": 0,
    "explanation": "Write the business row and an outbox row in the same database transaction. A separate publisher delivers the outbox event later.",
    "pattern": "Transactional outbox",
    "use": "Reliable event publication without a distributed transaction"
  },
  {
    "id": "dist-saga-1",
    "category": "Architecture",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "A payment fails after inventory was reserved. In a saga, what usually happens?",
    "choices": [
      "The whole distributed world rolls back magically",
      "A compensating action releases inventory",
      "The system ignores the failure",
      "Every service shares one database transaction"
    ],
    "answer": 1,
    "explanation": "Sagas coordinate long-running transactions through forward steps and compensating actions rather than a global rollback.",
    "pattern": "Saga",
    "use": "Orders, bookings, payments, fulfillment workflows"
  },
  {
    "id": "dist-replay-1",
    "category": "Architecture",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "Before replaying events after a production incident, what is the most important safety check?",
    "choices": [
      "Consumers are idempotent",
      "Every event has a funny name",
      "The UI has dark mode",
      "Offsets are never recorded"
    ],
    "answer": 0,
    "explanation": "Blind replay into a non-idempotent consumer can double-charge, duplicate emails, or corrupt state. Fix the consumer first, then replay selectively and reconcile.",
    "pattern": "Safe event replay",
    "use": "DLQ redrive, Kafka offset reset, archived event recovery"
  },
  {
    "id": "lead-design-1",
    "category": "Leadership",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "A junior engineer disagrees with your design. What is the strongest senior-engineer response?",
    "choices": [
      "Dismiss it quickly",
      "Listen, evaluate the tradeoffs, incorporate valid points, and explain the final reasoning",
      "Escalate immediately",
      "Avoid discussing architecture with junior engineers"
    ],
    "answer": 1,
    "explanation": "Good technical leadership combines humility with clear decision-making. A valid concern can improve the design; a rejected proposal still deserves a clear explanation.",
    "pattern": "Collaborative architecture leadership",
    "use": "Design reviews, mentoring, cross-team alignment"
  },
  {
    "id": "lead-perf-1",
    "category": "Leadership",
    "difficulty": "Core",
    "type": "multiple",
    "prompt": "What should you do first when an engineer appears to be underperforming?",
    "choices": [
      "Publicly criticize them",
      "Speak privately to understand blockers, expectations, and unrecognized work",
      "Immediately remove them from the team",
      "Ignore it indefinitely"
    ],
    "answer": 1,
    "explanation": "Start with curiosity and facts. Then provide support, define measurable expectations, add check-ins, and coordinate appropriately with the manager.",
    "pattern": "Supportive accountability",
    "use": "Mentoring, team leadership, performance recovery"
  },
  {
    "id": "scenario-traffic-1",
    "category": "Architecture",
    "difficulty": "Boss",
    "type": "multiple",
    "prompt": "Holiday traffic spikes overwhelm a synchronous reservation dependency. Which combination is the strongest first design response?",
    "choices": [
      "Longer timeouts only",
      "Caching where safe, circuit breaker, queueing for async work, metrics and load tests",
      "Remove monitoring",
      "Use one giant database lock"
    ],
    "answer": 1,
    "explanation": "Protect the dependency, degrade gracefully, smooth bursty work asynchronously where business rules allow it, and verify capacity using observability and load testing.",
    "pattern": "Resilience under load",
    "use": "Reservation spikes, ticket drops, seasonal traffic"
  },
  {
    "id": "scenario-api-1",
    "category": "Architecture",
    "difficulty": "Boss",
    "type": "multiple",
    "prompt": "When should you prefer an event over a synchronous REST call?",
    "choices": [
      "When downstream work can happen asynchronously and loose coupling improves resilience",
      "Whenever you want the caller to wait for an immediate answer",
      "Only for CSS files",
      "Never"
    ],
    "answer": 0,
    "explanation": "Events are useful when producers do not need an immediate downstream response and the workflow benefits from decoupling, retries, and fan-out.",
    "pattern": "REST vs events tradeoff",
    "use": "Notifications, analytics, fulfillment, workflow progression"
  },
  {
    "id": "scenario-cache-1",
    "category": "Algorithms",
    "difficulty": "Boss",
    "type": "multiple",
    "prompt": "A service caches title metadata, tracks trending titles, and finds longest unique category streaks. Which three patterns map correctly?",
    "choices": [
      "LRU + Top K + Sliding Window",
      "DFS + Saga + JPA",
      "Merge Intervals + Outbox + Postorder",
      "Optional + Config Server + Word Search only"
    ],
    "answer": 0,
    "explanation": "LRU handles bounded hot metadata. Top K ranks frequent titles. Sliding window finds a longest segment without duplicate categories.",
    "pattern": "Pattern composition",
    "use": "Streaming catalog analytics"
  },
  {
    "id": "scenario-support-1",
    "category": "Java",
    "difficulty": "Boss",
    "type": "multiple",
    "prompt": "A task dispatcher must prioritize severity, process older equal-priority tasks first, and safely feed workers. Which combination fits?",
    "choices": [
      "Comparator tie-breaker + BlockingQueue + ExecutorService",
      "Word Search + inorder traversal",
      "LRU + CSS grid",
      "Saga only"
    ],
    "answer": 0,
    "explanation": "Comparator logic establishes queue order. A BlockingQueue safely coordinates producer and worker threads. ExecutorService manages the pool.",
    "pattern": "Priority dispatch worker pool",
    "use": "Job schedulers, customer-support work queues"
  }
];
