graph LR
    A[Admin] -- Pre-creates --> B[VolumeSnapshotContents]
    B -- Contains --> C[Real Volume Snapshot]
    C -- Available for use --> D[Cluster Users]

    E[User] -- Requests --> F[PersistentVolumeClaim]
    F -- Specifies --> G[VolumeSnapshotClass]
    G -- Defines parameters --> C
