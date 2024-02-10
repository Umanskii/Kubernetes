graph LR
    A[Pod] --> B[Main Application Container]
    A --> C[Init Container 1]
    A --> D[Init Container 2]
    A --> E[...]
    B --> F[Main Application Process]
    C --> G[Initialization Tasks]
    D --> G
    E --> G
