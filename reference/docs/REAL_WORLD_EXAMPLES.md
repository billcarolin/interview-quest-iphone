# Applied Interview Patterns

The core package contains small algorithm-focused implementations. The `realworld` package shows the same ideas in recognizable engineering scenarios.

| Interview pattern | Applied example | Class |
| --- | --- | --- |
| LRU cache | Keep recently accessed streaming metadata in limited memory | `StreamingCatalogExamples.MetadataCache` |
| Frequency map + top-K heap | Find the most-watched streaming titles | `StreamingCatalogExamples.topKMostWatchedTitles` |
| Sliding window | Find the longest viewer streak without repeating a category | `StreamingCatalogExamples.longestUniqueCategoryStreak` |
| Comparator + tie-breaker | Dispatch urgent support tickets before less urgent tickets, then older tickets first | `SupportTicketExamples.dispatchOrder` |
| Sort then scan | Detect likely duplicate support requests submitted close together | `SupportTicketExamples.hasLikelyDuplicateTickets` |
| Merge intervals | Consolidate overlapping outage windows before customer notification | `ReservationCapacityExamples.consolidateOutageWindows` |
| Min heap for overlapping intervals | Calculate minimum loading stations required for ride reservations | `ReservationCapacityExamples.minimumRideLoadingStations` |
| BFS | Find the delivery-hub path with the fewest hops | `DeliveryNetworkExamples.shortestHubRoute` |
| DFS | Traverse downstream service dependencies | `DeliveryNetworkExamples.allDownstreamServices` |
| Tree postorder | Add asset counts from child categories before computing a parent total | `ContentHierarchyExamples.totalAssets` |
| Tree BFS | Build navigation categories level by level | `ContentHierarchyExamples.navigationLevels` |
| Backtracking DFS | Verify a continuous warehouse-bin SKU scan path | `WarehouseScannerExamples.canScanSkuSequence` |
| ConcurrentHashMap + LongAdder | Track API request counts safely across request threads | `ApiMetricsExamples` |

## How to study

Start with a test case. Before reading the implementation, say which data structure or algorithm you would use and why. Then read the method and explain its complexity aloud.

A useful interview sentence template is:

> I recognize this as a `<pattern>` problem because `<signal in the prompt>`. I would use `<data structure>` so that `<benefit>`. The expected complexity is `<complexity>`.
