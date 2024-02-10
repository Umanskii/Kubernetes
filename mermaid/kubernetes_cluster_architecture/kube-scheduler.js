graph LR
    A[Start] --> B{Are there available nodes?}
    B -- Yes --> C{Filter nodes based on resource requirements}
    C -- Filtered nodes --> D{Score nodes based on various factors}
    D -- Scored nodes --> E{Select node with the highest score}
    E --> F[End]
    B -- No --> G[End]
