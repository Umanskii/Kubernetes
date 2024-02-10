graph LR
    A[Start] --> B{Container starts}
    B --> C{Startup Probe}
    C -- Passed --> D{Readiness Probe}
    D -- Passed --> E{Liveness Probe}
    E -- Passed --> F{Container Running}
    E -- Failed --> G{Container Restart}
    G --> C
    D -- Failed --> H{Container Not Ready}
    H --> E
