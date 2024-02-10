graph LR
    B[Persistent Volume]
    B --> C[Container 1]
    B --> D[Container 2]
    B --> E[Container 3]
    C --> F[Volume Mount]
    D --> F
    E --> F
    G[PersistentVolume] --> H[PersistentVolumeClaim]
    H --> B
