flowchart LR
    subgraph Kubernetes Cluster
        A[Pod]
        B[PersistentVolume]
        C[PersistentVolumeClaim]
        D[Storage Class]
    end
    A --> E[Container 1]
    A --> F[Container 2]
    E --> H[Volume Mount]
    F --> H
    C --> D
    D --> B
    B --> H
