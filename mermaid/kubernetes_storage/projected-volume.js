graph LR
    B[Projected Volume]
    B --> C[Container 1]
    B --> D[Container 2]
    B --> E[Container 3]
    C --> F[Volume Mount]
    D --> F
    E --> F
    G[Volume Source 1] --> B
    H[Volume Source 2] --> B
    I[Volume Source 3] --> B
