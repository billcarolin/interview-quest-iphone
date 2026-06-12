# Experiences Connected Products — Technical Interview Guide

This study track is tailored to the supplied Lead Software Engineer description for Experiences Technology & Digital (DXT), Connected Products.

## Strongest technical themes to rehearse aloud

### 1. Real-time edge ingestion
Explain how authenticated devices publish events through MQTT, AWS IoT Core, Kinesis, or Kafka. Cover intermittent connectivity, durable local buffering, stable event IDs, sequence numbers, deduplication, and controlled replay.

### 2. Apache Flink stream processing
Be prepared to distinguish event time from processing time; explain watermarks, windows, keyed state, late-data handling, checkpointing, backpressure, stateful joins, and recovery after failure.

### 3. Guest media and identity reconciliation
Explain how you would ingest the original event durably, correlate asynchronous identity updates by key, emit versioned reconciled events, preserve an audit trail, expire unmatched records deliberately, and make writes idempotent.

### 4. Event-driven architecture
Discuss partitioning, per-key ordering, schema registry compatibility, versioned events, DLQs, poison messages, outbox pattern, at-least-once delivery, idempotent consumers, raw-event archives, scoped replay, and reconciliation against a source of truth.

### 5. AWS architecture
Practice tradeoffs among AWS IoT Core, Kinesis, Kafka, ECS/EKS, Lambda, DynamoDB, S3, CloudWatch, and time-series storage such as Timestream or InfluxDB. Include scaling, hot partitions, cost efficiency, observability, and fault tolerance.

### 6. Operational ownership
Describe metrics and alerts for ingress rate, lag, end-to-end latency, error rates, retry counts, DLQ depth, checkpoint health, downstream dependency failures, and cost. Tie those to SLOs and incident response.

### 7. Privacy and security
Discuss per-device credentials, least-privilege policies, encryption, identifier separation, audit logging, retention limits, and minimizing Guest-related data exposure.

### 8. Hands-on technical leadership
Prepare examples of setting direction across teams, resolving tradeoffs with evidence, unblocking delivery, mentoring engineers, coordinating incident response, and communicating risk to executives.

## Sample end-to-end design outline

```text
Authenticated edge device
    -> MQTT / AWS IoT Core
    -> durable ingestion stream (Kinesis or Kafka)
    -> schema validation and quarantine / DLQ
    -> Flink processing: keyed state, windows, enrichment, reconciliation
    -> versioned consumable events
    -> downstream services and external integrations
    -> S3 raw archive for replay and audit
    -> CloudWatch metrics, alerts, logs, and correlation IDs throughout
```

## Most useful game mode

Choose **Connected Products Run** from the home screen. It selects 12 questions from the role-specific question pool on each playthrough. The Study Deck also lets you filter the new categories individually.
