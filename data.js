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
  },
  {
    "id": "dxt-flink-event-time-1",
    "category": "Streaming",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "Edge-device events can arrive late or out of order. In Apache Flink, which concept lets windows reflect when the event actually occurred rather than when the processor received it?",
    "choices": [
      "Event time with watermarks",
      "Only wall-clock processing time",
      "A larger Java heap only",
      "A synchronous REST callback"
    ],
    "answer": 0,
    "explanation": "Event time uses timestamps carried by the events. Watermarks estimate how far event time has progressed, allowing Flink to close windows while still tolerating bounded late arrivals.",
    "pattern": "Event time + watermarks",
    "use": "IoT telemetry, delayed edge uploads, real-time Guest-media pipelines",
    "code": "WatermarkStrategy.<Event>forBoundedOutOfOrderness(Duration.ofSeconds(30))"
  },
  {
    "id": "dxt-flink-window-1",
    "category": "Streaming",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "You need a count of attraction-media events per device every five minutes, updated continuously. Which stream-processing concept is central?",
    "choices": [
      "Keyed time windows",
      "Binary-tree inorder traversal",
      "One global database transaction",
      "CSS media queries"
    ],
    "answer": 0,
    "explanation": "Key by device or attraction identifier, then aggregate within a time window. Windowing converts an unbounded stream into bounded slices that can be summarized and emitted.",
    "pattern": "KeyBy + window + aggregate",
    "use": "Telemetry aggregation, operational dashboards, media-event summaries",
    "code": "stream.keyBy(Event::deviceId).window(TumblingEventTimeWindows.of(Duration.ofMinutes(5)))"
  },
  {
    "id": "dxt-flink-checkpoint-1",
    "category": "Streaming",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "A Flink job restarts after a failure. What feature helps restore operator state and resume processing consistently?",
    "choices": [
      "Checkpointing",
      "A larger HTML file",
      "Removing offsets",
      "Random retries without state"
    ],
    "answer": 0,
    "explanation": "Flink checkpoints capture distributed operator state and source positions. On restart, the job restores from a completed checkpoint rather than starting from an arbitrary point.",
    "pattern": "Checkpointed stream state",
    "use": "Fault-tolerant real-time pipelines and stateful aggregation",
    "code": "env.enableCheckpointing(30_000);"
  },
  {
    "id": "dxt-flink-backpressure-1",
    "category": "Streaming",
    "difficulty": "Boss",
    "track": "DXT",
    "type": "multiple",
    "prompt": "A downstream enrichment operator cannot keep up with incoming edge events. What condition should you investigate first?",
    "choices": [
      "Backpressure and the slow operator's throughput",
      "Whether the UI button has rounded corners",
      "Whether every event can be put into one giant transaction",
      "Whether logs should be disabled"
    ],
    "answer": 0,
    "explanation": "Backpressure means downstream processing capacity is lower than upstream production. Inspect operator throughput, latency, queueing, serialization, external calls, and partitioning before simply adding retries.",
    "pattern": "Backpressure diagnosis",
    "use": "High-throughput stream pipelines and overloaded enrichments"
  },
  {
    "id": "dxt-flink-state-1",
    "category": "Streaming",
    "difficulty": "Boss",
    "track": "DXT",
    "type": "multiple",
    "prompt": "You must correlate a Guest media event with a later identity event using a device identifier. What is the most relevant Flink capability?",
    "choices": [
      "Keyed state with timers or stateful joins",
      "Only a stateless map operation",
      "A CSS selector",
      "A single local variable shared by every task"
    ],
    "answer": 0,
    "explanation": "Correlation across time requires durable per-key state. Keyed state stores context for a device or identity key, while timers or windows define how long to wait before emitting or expiring unmatched records.",
    "pattern": "Keyed state + correlation window",
    "use": "Guest media and identity reconciliation",
    "code": "ValueState<PendingMedia> pendingMedia;"
  },
  {
    "id": "dxt-streams-vs-flink-1",
    "category": "Streaming",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "When would Apache Flink be more appropriate than the Java Streams API?",
    "choices": [
      "When processing an unbounded distributed event stream with windows, state, checkpoints, and failure recovery",
      "When sorting five objects already in memory",
      "When formatting a String",
      "When replacing all AWS services"
    ],
    "answer": 0,
    "explanation": "Java Streams is an in-process collection pipeline. Flink is designed for distributed, stateful processing of continuous streams with operational recovery semantics.",
    "pattern": "In-memory pipeline vs distributed stream processor",
    "use": "Choosing the right tool during system design"
  },
  {
    "id": "dxt-kafka-partition-1",
    "category": "Streaming",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "You need ordering for all events from the same edge device while scaling consumers horizontally in Kafka. What should you do?",
    "choices": [
      "Use deviceId as the partition key",
      "Send each device event to a random partition",
      "Put the entire company on one partition forever",
      "Remove keys from every message"
    ],
    "answer": 0,
    "explanation": "Kafka guarantees ordering within a partition. A stable deviceId key routes related events to the same partition while allowing different devices to spread across partitions.",
    "pattern": "Partition by business key",
    "use": "Per-device ordering, scalable stream consumption",
    "code": "new ProducerRecord<>(topic, event.deviceId(), payload)"
  },
  {
    "id": "dxt-schema-evolution-1",
    "category": "Streaming",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "A new producer needs to add an optional field to an event consumed by older services. Which schema-evolution approach is safest?",
    "choices": [
      "Add a backward-compatible optional field and version or validate the schema",
      "Rename required fields silently",
      "Delete old fields immediately",
      "Let each consumer guess the payload format"
    ],
    "answer": 0,
    "explanation": "Versioned schemas and compatibility rules reduce consumer breakage. Adding an optional field is usually safer than removing or renaming required fields without a migration plan.",
    "pattern": "Backward-compatible schema evolution",
    "use": "Versioned event contracts and downstream integration"
  },
  {
    "id": "dxt-dlq-1",
    "category": "Streaming",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "A malformed edge event keeps failing deserialization. What is the strongest operational response?",
    "choices": [
      "Route it to a DLQ or quarantine stream with context, alert, and continue processing healthy events",
      "Retry forever in a tight loop",
      "Drop every event from that device without recording it",
      "Stop monitoring the pipeline"
    ],
    "answer": 0,
    "explanation": "Poison messages should be isolated so one bad payload does not block an entire partition or consumer. Preserve enough context to diagnose, remediate, and replay safely.",
    "pattern": "DLQ / quarantine stream",
    "use": "Poison-message handling and controlled replay"
  },
  {
    "id": "dxt-mqtt-qos-1",
    "category": "IoT / Edge",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "An MQTT client uses QoS 1 delivery. What should downstream consumers assume?",
    "choices": [
      "A message may arrive more than once, so processing must be idempotent",
      "A message can never be duplicated",
      "Ordering across every device is globally perfect",
      "No acknowledgement exists"
    ],
    "answer": 0,
    "explanation": "MQTT QoS 1 is at-least-once delivery. The receiver acknowledges delivery, but duplicates are possible, especially around reconnects or retries.",
    "pattern": "At-least-once edge delivery",
    "use": "MQTT ingestion and duplicate-safe consumers"
  },
  {
    "id": "dxt-edge-offline-1",
    "category": "IoT / Edge",
    "difficulty": "Boss",
    "track": "DXT",
    "type": "multiple",
    "prompt": "A park edge device can temporarily lose connectivity. Which design best avoids losing events?",
    "choices": [
      "Buffer locally with durable sequence IDs, retry with backoff, and deduplicate in the cloud",
      "Assume Wi-Fi is always perfect",
      "Discard local events immediately",
      "Block every Guest interaction until the cloud responds"
    ],
    "answer": 0,
    "explanation": "Edge systems must tolerate intermittent connectivity. Local buffering plus stable IDs or sequence numbers supports retries, ordering checks, deduplication, and later reconciliation.",
    "pattern": "Store-and-forward edge design",
    "use": "Park devices, kiosks, sensors, and offline-tolerant ingestion"
  },
  {
    "id": "dxt-iot-auth-1",
    "category": "IoT / Edge",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "What is a strong default for authenticating edge devices to a cloud ingestion service?",
    "choices": [
      "Unique per-device credentials or certificates with least-privilege policies and rotation",
      "One shared password hard-coded into every device",
      "Public anonymous write access",
      "Credentials committed to source control"
    ],
    "answer": 0,
    "explanation": "Per-device identity limits blast radius and supports revocation, auditability, and rotation. Least privilege ensures devices can publish only to the resources they need.",
    "pattern": "Per-device identity + least privilege",
    "use": "AWS IoT, MQTT clients, edge security"
  },
  {
    "id": "dxt-iot-sequence-1",
    "category": "IoT / Edge",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "Why include a device sequence number in edge events?",
    "choices": [
      "To detect gaps, duplicates, and out-of-order delivery",
      "To make the JSON prettier",
      "To replace all timestamps",
      "To avoid authentication"
    ],
    "answer": 0,
    "explanation": "A monotonic sequence per device provides a simple reconciliation signal. The cloud can detect missing, duplicate, or reordered observations even when connectivity is unreliable.",
    "pattern": "Sequence-based reconciliation",
    "use": "Edge ingestion correctness and replay diagnostics"
  },
  {
    "id": "dxt-identity-recon-1",
    "category": "Architecture",
    "difficulty": "Boss",
    "track": "DXT",
    "type": "multiple",
    "prompt": "A Guest media event arrives before identity is known. What is a robust reconciliation approach?",
    "choices": [
      "Store the event under a correlation key, join when identity arrives, emit a versioned reconciled event, and expire unmatched state deliberately",
      "Throw away every unmatched event immediately",
      "Block all ingestion until identity is known",
      "Mutate downstream databases silently with no audit trail"
    ],
    "answer": 0,
    "explanation": "Separate ingestion from reconciliation. Preserve the original event, correlate asynchronously, emit an auditable reconciled result, and define expiry or manual-review behavior for unmatched records.",
    "pattern": "Asynchronous identity reconciliation",
    "use": "Guest media, device association, late-arriving identity data"
  },
  {
    "id": "dxt-identity-idempotency-1",
    "category": "Architecture",
    "difficulty": "Boss",
    "track": "DXT",
    "type": "multiple",
    "prompt": "A reconciliation job reprocesses the same media-to-Guest match after a retry. How should the target system prevent duplicate side effects?",
    "choices": [
      "Use an idempotency key or unique constraint based on the reconciliation identity",
      "Trust retries never happen",
      "Append duplicate records and clean them manually later",
      "Hold a global lock forever"
    ],
    "answer": 0,
    "explanation": "Retries and replay are normal. A stable idempotency key or uniqueness rule turns repeated delivery into the same business outcome rather than duplicate state changes.",
    "pattern": "Idempotent reconciliation write",
    "use": "Replay-safe identity and media processing"
  },
  {
    "id": "dxt-kinesis-shards-1",
    "category": "AWS",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "A Kinesis stream starts throttling during peak park traffic. Which capacity concept should you inspect?",
    "choices": [
      "Shard count, partition-key distribution, and per-shard throughput",
      "The font size in the dashboard",
      "Whether every event is routed to one hot partition key",
      "Only the EC2 instance hostname"
    ],
    "answer": 0,
    "explanation": "Kinesis capacity is affected by shards and how records are distributed. A hot partition key can overload one shard even if aggregate traffic seems reasonable.",
    "pattern": "Shard capacity + partition distribution",
    "use": "Scaling AWS streaming ingestion during bursts"
  },
  {
    "id": "dxt-dynamo-key-1",
    "category": "AWS",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "What is the biggest design risk when choosing a DynamoDB partition key for high-volume device events?",
    "choices": [
      "Creating hot partitions with uneven traffic",
      "Making the table too relational",
      "Using too many CSS classes",
      "Not having a Java main method"
    ],
    "answer": 0,
    "explanation": "A good key distributes requests evenly while still supporting access patterns. A single attraction or tenant key can become hot during bursts unless the model spreads writes deliberately.",
    "pattern": "DynamoDB access-pattern-first key design",
    "use": "High-volume event metadata and device state"
  },
  {
    "id": "dxt-aws-lambda-vs-ecs-1",
    "category": "AWS",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "Which workload is generally a better fit for ECS or EKS than Lambda?",
    "choices": [
      "A continuously running, stateful or high-throughput stream-processing service",
      "A short event-triggered image resize",
      "A lightweight scheduled cleanup",
      "A small webhook handler"
    ],
    "answer": 0,
    "explanation": "Lambda is strong for short-lived event-driven functions. Long-running stream processors with predictable throughput, connection management, and more control often fit containers better.",
    "pattern": "Compute-platform tradeoff",
    "use": "Choosing Lambda, ECS, or EKS for production components"
  },
  {
    "id": "dxt-s3-replay-1",
    "category": "AWS",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "Why might you archive raw edge events to S3 even after processing them successfully?",
    "choices": [
      "For replay, audit, reconciliation, and future reprocessing",
      "To make every request slower",
      "To replace observability",
      "Because S3 guarantees all business logic is correct"
    ],
    "answer": 0,
    "explanation": "A durable raw archive gives you a recovery path when transformations change, a defect is discovered, or downstream data must be rebuilt.",
    "pattern": "Immutable raw-event archive",
    "use": "Replayability, auditability, and data recovery"
  },
  {
    "id": "dxt-cloudwatch-1",
    "category": "AWS",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "Which telemetry set is most useful for a real-time ingestion pipeline?",
    "choices": [
      "Ingress rate, processing latency, consumer lag, error rate, retries, DLQ depth, and checkpoint health",
      "Only CPU once per day",
      "Only HTTP 200 counts",
      "No logs because they cost money"
    ],
    "answer": 0,
    "explanation": "Operational ownership requires visibility into flow, delay, failure, recovery, and backlog. Metrics should reveal both current health and whether the pipeline is falling behind.",
    "pattern": "Pipeline observability",
    "use": "CloudWatch dashboards, alerts, SLOs, incident response"
  },
  {
    "id": "dxt-cost-1",
    "category": "AWS",
    "difficulty": "Boss",
    "track": "DXT",
    "type": "multiple",
    "prompt": "A stream-processing design works but costs too much. What is the strongest engineering response?",
    "choices": [
      "Measure cost drivers, review retention and payload size, tune parallelism, reduce unnecessary calls, and validate against SLOs",
      "Turn off monitoring first",
      "Remove retries blindly",
      "Assume cloud cost cannot be optimized"
    ],
    "answer": 0,
    "explanation": "Cost efficiency is an architectural quality attribute. Optimize from measurements while protecting reliability and latency objectives rather than cutting blindly.",
    "pattern": "Cost-aware architecture",
    "use": "AWS optimization without sacrificing Guest experience"
  },
  {
    "id": "dxt-observability-trace-1",
    "category": "Architecture",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "An event travels from device to broker to processor to downstream service. What makes it easiest to trace end to end?",
    "choices": [
      "A correlation ID propagated through logs, metrics dimensions, and events",
      "A different random identifier at every hop with no relationship",
      "Only local console prints",
      "Turning off structured logging"
    ],
    "answer": 0,
    "explanation": "Correlation IDs allow responders to follow a single business flow across edge, ingestion, transformation, and downstream systems.",
    "pattern": "End-to-end correlation ID",
    "use": "Distributed tracing and production debugging"
  },
  {
    "id": "dxt-slo-1",
    "category": "Architecture",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "For a Guest-facing connected-products platform, what does an SLO define?",
    "choices": [
      "A measurable reliability or performance target such as latency or successful processing percentage",
      "A Java class naming rule only",
      "A requirement to use one database",
      "A substitute for monitoring"
    ],
    "answer": 0,
    "explanation": "An SLO turns reliability expectations into measurable targets. Good SLOs guide alerts, capacity planning, error budgets, and tradeoff discussions.",
    "pattern": "Service-level objective",
    "use": "Operational standards and high-visibility platform ownership"
  },
  {
    "id": "dxt-privacy-1",
    "category": "Security",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "Guest media and identity reconciliation may involve privacy-relevant data. Which design principle is strongest?",
    "choices": [
      "Minimize collected data, separate identifiers where possible, encrypt data, enforce least privilege, audit access, and define retention",
      "Copy all raw data into every downstream service",
      "Give broad admin access to simplify debugging",
      "Keep data forever by default"
    ],
    "answer": 0,
    "explanation": "Sensitive pipelines should deliberately reduce exposure. Minimize, isolate, encrypt, authorize narrowly, audit access, and retain only as long as required.",
    "pattern": "Privacy by design",
    "use": "Guest identity, media metadata, secure downstream integration"
  },
  {
    "id": "dxt-api-versioning-1",
    "category": "Architecture",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "A downstream consumer cannot migrate immediately when an API response changes. What is the safest strategy?",
    "choices": [
      "Maintain a versioned contract and a deprecation window with migration guidance",
      "Break the consumer without notice",
      "Change field meanings silently",
      "Require every consumer to deploy at the same second"
    ],
    "answer": 0,
    "explanation": "Versioning and deprecation windows let teams evolve independently. Communicate timelines, compatibility rules, and observability for old-version usage.",
    "pattern": "Versioned API contract",
    "use": "Cross-team integration and safe platform evolution"
  },
  {
    "id": "dxt-lead-tradeoff-1",
    "category": "Leadership",
    "difficulty": "Boss",
    "track": "DXT",
    "type": "multiple",
    "prompt": "Two teams disagree: one wants faster delivery, the other wants a more resilient architecture before launch. What should the lead engineer do?",
    "choices": [
      "Make the tradeoffs explicit, use risk and SLO data, identify a safe incremental path, document the decision, and assign follow-up work",
      "Choose whichever team speaks loudest",
      "Avoid making a decision",
      "Add features until everyone forgets the issue"
    ],
    "answer": 0,
    "explanation": "A hands-on lead arbitrates tradeoffs with evidence and ownership. The goal is not theoretical perfection; it is a safe, explainable delivery plan with clear residual risk.",
    "pattern": "Cross-team tradeoff arbitration",
    "use": "Roadmap-to-delivery ownership and conflicting priorities"
  },
  {
    "id": "dxt-lead-incident-1",
    "category": "Leadership",
    "difficulty": "Boss",
    "track": "DXT",
    "type": "multiple",
    "prompt": "A critical event pipeline is dropping records during a high-visibility incident. What is the strongest lead response?",
    "choices": [
      "Stabilize impact, establish incident roles, preserve data, communicate clearly, restore service, reconcile affected records, and run a blameless follow-up",
      "Start rewriting the entire platform during the incident",
      "Wait for someone else to own it",
      "Focus only on who caused the problem"
    ],
    "answer": 0,
    "explanation": "Operational leadership separates mitigation from root-cause work. Preserve recoverability, communicate status, restore service safely, and follow through on reconciliation and prevention.",
    "pattern": "Incident command + reconciliation",
    "use": "Critical platform ownership and operational outcomes"
  },
  {
    "id": "dxt-system-design-1",
    "category": "Architecture",
    "difficulty": "Boss",
    "track": "DXT",
    "type": "multiple",
    "prompt": "You are designing a platform for edge-device events that become Guest-media events. Which high-level flow is strongest?",
    "choices": [
      "Authenticated device ingestion -> durable stream -> validation/quarantine -> Flink transformation and reconciliation -> versioned events -> downstream consumers -> raw archive and observability",
      "Device -> direct writes into every downstream database",
      "One synchronous request that blocks until every downstream system succeeds",
      "Manual spreadsheet upload only"
    ],
    "answer": 0,
    "explanation": "The durable, observable event pipeline decouples producers and consumers, isolates bad data, supports replay, and lets stateful stream processing produce reliable downstream events.",
    "pattern": "End-to-end connected-products event platform",
    "use": "A likely system-design discussion for this role"
  },
  {
    "id": "dxt-replay-selective-1",
    "category": "Architecture",
    "difficulty": "Boss",
    "track": "DXT",
    "type": "multiple",
    "prompt": "A transformation bug affected only two hours of events for one attraction. What is the safest replay strategy?",
    "choices": [
      "Fix and deploy the processor, replay the affected scope into idempotent consumers, monitor results, and reconcile against the source of truth",
      "Replay every historical event blindly",
      "Delete the raw archive",
      "Disable duplicate protection"
    ],
    "answer": 0,
    "explanation": "Selective replay limits blast radius. Correct the defect first, target the known window or keys, ensure idempotency, and verify downstream state after processing.",
    "pattern": "Scoped replay + reconciliation",
    "use": "Production repair without creating a second incident"
  },
  {
    "id": "dxt-flink-late-data-1",
    "category": "Streaming",
    "difficulty": "Boss",
    "track": "DXT",
    "type": "multiple",
    "prompt": "Some valid events arrive after a Flink window has emitted its result. What should the design decide explicitly?",
    "choices": [
      "Allowed lateness and whether to update results, route late events to a side output, or reconcile later",
      "That late events are impossible",
      "That every window stays open forever",
      "That timestamps should be removed"
    ],
    "answer": 0,
    "explanation": "Late data is a business decision as much as a technical one. Define a bounded tolerance and a clear handling path so results remain explainable and operationally manageable.",
    "pattern": "Late-data policy",
    "use": "Event-time windows and delayed edge uploads"
  },
  {
    "id": "dxt-schema-registry-1",
    "category": "Streaming",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "What is the main benefit of a schema registry in an event-driven platform?",
    "choices": [
      "It centralizes event schema definitions and compatibility validation for producers and consumers",
      "It stores every binary attachment forever",
      "It replaces all monitoring",
      "It guarantees business requirements never change"
    ],
    "answer": 0,
    "explanation": "A schema registry makes contracts discoverable and enforceable. Compatibility checks catch unsafe changes before they break downstream consumers.",
    "pattern": "Schema registry + compatibility checks",
    "use": "Clean, versioned event schemas across teams"
  },
  {
    "id": "dxt-java-threadpool-1",
    "category": "Java",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "Why use a bounded queue with an ExecutorService for a high-volume ingestion worker pool?",
    "choices": [
      "To apply backpressure and avoid unbounded memory growth when producers outrun workers",
      "To guarantee every task completes instantly",
      "To remove the need for metrics",
      "To make thread count irrelevant"
    ],
    "answer": 0,
    "explanation": "A bounded queue makes overload visible and forces an explicit rejection or throttling policy instead of allowing memory usage to grow without limit.",
    "pattern": "Bounded worker queue + rejection policy",
    "use": "Java ingestion workers and controlled overload behavior",
    "code": "new ThreadPoolExecutor(core, max, 60, SECONDS, new ArrayBlockingQueue<>(capacity), handler)"
  },
  {
    "id": "dxt-java-ordering-1",
    "category": "Java",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "Multiple worker threads process events for the same device. What risk appears if per-device ordering matters?",
    "choices": [
      "Concurrent workers may reorder related events unless work is partitioned or serialized by key",
      "Java automatically guarantees global order across all threads",
      "The database will always infer the correct sequence",
      "No risk exists if events contain strings"
    ],
    "answer": 0,
    "explanation": "Concurrency improves throughput but can violate ordering. Route the same key to the same partition, use keyed processing, or serialize per-key work where the business requires it.",
    "pattern": "Concurrency vs key ordering",
    "use": "Per-device event processing correctness"
  },
  {
    "id": "dxt-timestream-1",
    "category": "AWS",
    "difficulty": "Core",
    "track": "DXT",
    "type": "multiple",
    "prompt": "Which data shape is a natural fit for a time-series database such as Timestream or InfluxDB?",
    "choices": [
      "Timestamped device measurements queried over time ranges",
      "A static CSS stylesheet",
      "A single immutable logo file",
      "An unstructured interview transcript only"
    ],
    "answer": 0,
    "explanation": "Time-series databases are optimized for measurements indexed by time, device, and dimensions, with queries such as trends, rollups, and recent windows.",
    "pattern": "Time-series storage",
    "use": "Sensor telemetry, device-health metrics, operational analytics"
  },
  {
    "id": "refresh-streams-1",
    "category": "Java Streams",
    "difficulty": "Find the bug",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "What is wrong with this Java Stream code?",
    "code": "List<String> names = users.stream()\n    .map(user -> user.getName())\n    .filter(name -> name.length() > 3)\n    .collect(Collectors.toList());",
    "choices": [
      "It can throw NullPointerException if user or name is null",
      "Collectors.toList() is invalid",
      "map() must always come after filter()",
      "Streams cannot process Strings"
    ],
    "answer": 0,
    "explanation": "If user is null or getName() returns null, name.length() can throw NullPointerException. Filter nulls before dereferencing.",
    "pattern": "Java Streams",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-streams-2",
    "category": "Java Streams",
    "difficulty": "Best snippet",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "Which snippet safely collects active user emails?",
    "choices": [
      "users.stream()\n    .map(User::getEmail)\n    .collect(Collectors.toList());",
      "users.stream()\n    .filter(Objects::nonNull)\n    .filter(User::isActive)\n    .map(User::getEmail)\n    .filter(Objects::nonNull)\n    .collect(Collectors.toList());",
      "users.map(User::getEmail).collect();",
      "users.stream()\n    .collect(User::getEmail);"
    ],
    "answer": 1,
    "explanation": "The best version filters null users, filters active users, maps emails, removes null emails, and collects results.",
    "pattern": "Java Streams",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-streams-3",
    "category": "Java Streams",
    "difficulty": "What happens?",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "What does this print?",
    "code": "List<Integer> nums = List.of(1, 2, 3, 4);\nint result = nums.stream()\n    .filter(n -> n % 2 == 0)\n    .mapToInt(n -> n * 10)\n    .sum();\nSystem.out.println(result);",
    "choices": ["20", "40", "60", "100"],
    "answer": 2,
    "explanation": "The even numbers are 2 and 4. They become 20 and 40. The sum is 60.",
    "pattern": "Java Streams",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-concurrency-1",
    "category": "Concurrency",
    "difficulty": "Find the bug",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "What is the bug in this counter?",
    "code": "private int count = 0;\n\npublic void increment() {\n    count++;\n}",
    "choices": [
      "count++ is not atomic",
      "int cannot be incremented",
      "The method must return int",
      "The variable must be public"
    ],
    "answer": 0,
    "explanation": "count++ is read-modify-write. In multithreaded code, use AtomicInteger, synchronization, or a lock.",
    "pattern": "Concurrency",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-concurrency-2",
    "category": "Concurrency",
    "difficulty": "Best snippet",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "Which is the safest simple counter for concurrent access?",
    "choices": [
      "private int count;\npublic void increment() { count++; }",
      "private final AtomicInteger count = new AtomicInteger(0);\npublic void increment() { count.incrementAndGet(); }",
      "private Integer count = 0;\npublic void increment() { count++; }",
      "private volatile int count;\npublic void increment() { count++; }"
    ],
    "answer": 1,
    "explanation": "AtomicInteger makes the increment atomic. volatile improves visibility but does not make count++ atomic.",
    "pattern": "Concurrency",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-concurrency-3",
    "category": "Concurrency",
    "difficulty": "Find the bug",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "What is the main problem with this ExecutorService code?",
    "code": "ExecutorService executor = Executors.newFixedThreadPool(4);\nexecutor.submit(() -> processOrder(order));",
    "choices": [
      "The executor is never shut down",
      "Fixed thread pools cannot run lambdas",
      "submit always blocks forever",
      "processOrder must be static"
    ],
    "answer": 0,
    "explanation": "Long-lived app-managed executors need lifecycle management. For short-lived use, shut down the executor or use framework-managed pools.",
    "pattern": "Concurrency",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-collections-1",
    "category": "Collections",
    "difficulty": "What happens?",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "What prints here?",
    "code": "Map<String, Integer> map = new HashMap<>();\nmap.put(\"a\", 1);\nmap.put(\"a\", 2);\nSystem.out.println(map.get(\"a\"));",
    "choices": ["1", "2", "null", "Compilation error"],
    "answer": 1,
    "explanation": "HashMap keys are unique. The second put replaces the value for key \"a\".",
    "pattern": "Collections",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-collections-2",
    "category": "Collections",
    "difficulty": "Find the bug",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "What is the likely runtime issue?",
    "code": "List<String> names = new ArrayList<>();\nnames.add(\"Bill\");\nnames.add(\"Nick\");\n\nfor (String name : names) {\n    if (name.startsWith(\"B\")) {\n        names.remove(name);\n    }\n}",
    "choices": [
      "ConcurrentModificationException",
      "NullPointerException",
      "StackOverflowError",
      "No issue"
    ],
    "answer": 0,
    "explanation": "Removing during enhanced for-loop iteration can cause ConcurrentModificationException. Use Iterator.remove() or removeIf().",
    "pattern": "Collections",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-spring-1",
    "category": "Spring Boot",
    "difficulty": "Find the bug",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "Why might this dependency be null?",
    "code": "@RestController\npublic class UserController {\n    private UserService userService;\n\n    public List<User> getUsers() {\n        return userService.findAll();\n    }\n}",
    "choices": [
      "UserService was never injected",
      "RestController cannot use services",
      "findAll() must be static",
      "List cannot be returned from a controller"
    ],
    "answer": 0,
    "explanation": "The field is never injected. Prefer constructor injection with a final field.",
    "pattern": "Spring Boot",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-spring-2",
    "category": "Spring Boot",
    "difficulty": "Best snippet",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "Which is preferred constructor injection?",
    "choices": [
      "@Autowired\nprivate UserService userService;",
      "private final UserService userService;\n\npublic UserController(UserService userService) {\n    this.userService = userService;\n}",
      "private UserService userService = new UserService();",
      "public UserController() {}"
    ],
    "answer": 1,
    "explanation": "Constructor injection makes dependencies explicit, testable, and compatible with final fields.",
    "pattern": "Spring Boot",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-rest-1",
    "category": "REST API Design",
    "difficulty": "Best answer",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "Which endpoint is most RESTful for partially updating a user email?",
    "choices": [
      "GET /updateUserEmail?id=123",
      "POST /userEmailUpdate",
      "PATCH /users/123",
      "DELETE /users/123/email"
    ],
    "answer": 2,
    "explanation": "PATCH /users/123 is appropriate for a partial update to the user resource.",
    "pattern": "REST API Design",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-sql-1",
    "category": "SQL",
    "difficulty": "Find the bug",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "What problem can this query cause?",
    "code": "SELECT *\nFROM orders\nWHERE YEAR(created_at) = 2026;",
    "choices": [
      "It may prevent index usage on created_at",
      "YEAR() is not allowed in SQL",
      "SELECT * always fails",
      "WHERE cannot use dates"
    ],
    "answer": 0,
    "explanation": "Wrapping an indexed column in a function can make the predicate non-sargable. Prefer a date range.",
    "pattern": "SQL",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-sql-2",
    "category": "SQL",
    "difficulty": "Best snippet",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "Which query is more index-friendly?",
    "choices": [
      "SELECT *\nFROM orders\nWHERE YEAR(created_at) = 2026;",
      "SELECT *\nFROM orders\nWHERE created_at >= '2026-01-01'\n  AND created_at < '2027-01-01';",
      "SELECT *\nFROM orders\nWHERE created_at LIKE '2026%';",
      "SELECT *\nFROM orders\nORDER BY created_at;"
    ],
    "answer": 1,
    "explanation": "A range predicate can use an index on created_at efficiently.",
    "pattern": "SQL",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-eda-1",
    "category": "Event-Driven Architecture",
    "difficulty": "Find the bug",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "What is the architectural risk?",
    "code": "orderRepository.save(order);\npaymentEventPublisher.publish(new PaymentRequestedEvent(order.getId()));",
    "choices": [
      "The database save may succeed but event publishing may fail",
      "Events cannot contain IDs",
      "Repositories cannot be used before publishers",
      "This must be synchronous REST"
    ],
    "answer": 0,
    "explanation": "This can create inconsistency. The transactional outbox pattern helps coordinate state changes and events.",
    "pattern": "Event-Driven Architecture",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-sysdesign-1",
    "category": "System Design",
    "difficulty": "Best answer",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "A service receives duplicate events. What should you design for?",
    "choices": [
      "Assume duplicates never happen",
      "Make consumers idempotent",
      "Restart Kafka",
      "Use only synchronous APIs"
    ],
    "answer": 1,
    "explanation": "Distributed systems often produce duplicate messages. Consumers should safely handle repeated events.",
    "pattern": "System Design",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-agentic-1",
    "category": "Agentic AI",
    "difficulty": "Find the bug",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "What is risky about this agent design?",
    "code": "const answer = await llm.call(userPrompt);\nawait database.run(answer);",
    "choices": [
      "The LLM output is being executed without validation",
      "LLMs cannot access databases",
      "The database must call the LLM first",
      "await cannot be used here"
    ],
    "answer": 0,
    "explanation": "Never blindly execute LLM output. Use tool schemas, validation, permissions, and human review for risky actions.",
    "pattern": "Agentic AI",
    "use": "Technical Refresh"
  },
  {
    "id": "refresh-rag-1",
    "category": "RAG",
    "difficulty": "Best answer",
    "track": "Refresh",
    "section": "Technical Refresh",
    "type": "multiple",
    "prompt": "A RAG answer is confidently wrong. What should you check first?",
    "choices": [
      "Whether retrieval returned the right source chunks",
      "Whether the frontend is React",
      "Whether the database is relational",
      "Whether the model has enough RAM"
    ],
    "answer": 0,
    "explanation": "Bad retrieval often causes bad grounded answers. Inspect retrieved chunks, ranking, chunking, metadata filters, and reranking.",
    "pattern": "RAG",
    "use": "Technical Refresh"
  },
  {
    "id": "review-completablefuture-1",
    "category": "CompletableFuture",
    "difficulty": "Find the bug",
    "track": "Refresh",
    "section": "Code Review Mode",
    "type": "multiple",
    "prompt": "What is the hidden issue?",
    "code": "CompletableFuture.supplyAsync(() -> callRemoteService())\n    .thenApply(response -> transform(response));",
    "choices": [
      "No error handling path is defined",
      "thenApply cannot transform values",
      "supplyAsync is synchronous",
      "CompletableFuture requires Spring Boot"
    ],
    "answer": 0,
    "explanation": "In real systems, add exceptionally/handle/whenComplete, timeouts, and consider a custom executor.",
    "pattern": "CompletableFuture",
    "use": "Code Review Mode"
  },
  {
    "id": "review-hashmap-1",
    "category": "HashMap",
    "difficulty": "Find the bug",
    "track": "Refresh",
    "section": "Code Review Mode",
    "type": "multiple",
    "prompt": "Why is this broken as a cache key?",
    "code": "class UserKey {\n    String tenantId;\n    String userId;\n}\n\nMap<UserKey, User> cache = new HashMap<>();",
    "choices": [
      "UserKey does not override equals() and hashCode()",
      "HashMap cannot use objects as keys",
      "Map values cannot be User objects",
      "tenantId must be an int"
    ],
    "answer": 0,
    "explanation": "HashMap key lookup depends on equals and hashCode. Without them, logically identical keys may not match.",
    "pattern": "HashMap",
    "use": "Code Review Mode"
  },
  {
    "id": "review-sqljoins-1",
    "category": "SQL Joins",
    "difficulty": "Best answer",
    "track": "Refresh",
    "section": "Code Review Mode",
    "type": "multiple",
    "prompt": "You need all users, even users with no orders. Which join?",
    "choices": [
      "INNER JOIN orders",
      "LEFT JOIN orders",
      "RIGHT JOIN users",
      "CROSS JOIN orders"
    ],
    "answer": 1,
    "explanation": "LEFT JOIN keeps all rows from users and matches orders when present.",
    "pattern": "SQL Joins",
    "use": "Code Review Mode"
  },
  {
    "id": "review-spring-tx-1",
    "category": "Spring Transactions",
    "difficulty": "Find the bug",
    "track": "Refresh",
    "section": "Code Review Mode",
    "type": "multiple",
    "prompt": "Why might @Transactional not apply here?",
    "code": "@Service\npublic class BillingService {\n    public void bill() {\n        saveInvoice();\n    }\n\n    @Transactional\n    public void saveInvoice() {\n        invoiceRepository.save(invoice);\n    }\n}",
    "choices": [
      "Self-invocation bypasses the Spring proxy",
      "@Transactional only works on controllers",
      "Repositories cannot be transactional",
      "The method name is too long"
    ],
    "answer": 0,
    "explanation": "Spring proxy-based AOP does not intercept a method call from the same instance. Put the transactional method on another bean or annotate the outer method.",
    "pattern": "Spring Transactions",
    "use": "Code Review Mode"
  },
  {
    "id": "review-rest-status-1",
    "category": "REST Status Codes",
    "difficulty": "Best answer",
    "track": "Refresh",
    "section": "Code Review Mode",
    "type": "multiple",
    "prompt": "A POST creates a resource successfully. Best status code?",
    "choices": [
      "200 OK only",
      "201 Created",
      "404 Not Found",
      "409 Conflict always"
    ],
    "answer": 1,
    "explanation": "201 Created is the clean REST response for successful resource creation, usually with a Location header.",
    "pattern": "REST Status Codes",
    "use": "Code Review Mode"
  }
];
