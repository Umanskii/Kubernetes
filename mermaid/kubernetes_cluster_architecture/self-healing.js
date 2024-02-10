stateDiagram-v2
    [*] --> Running: Application running
    Running --> [*]: No failures detected
    Running --> DetectingFailure: Failed container or node detected
    DetectingFailure --> Replacing: Failure confirmed, replacing container or node
    Replacing --> Running: Replacement successful
    Replacing --> Failed: Replacement failed
    Failed --> Replacing: Retry replacement
    Failed --> [*]: Maximum retries reached, manual intervention required
