graph LR
    A[VolumeSnapshot] -- Creates --> B[VolumeSnapshotContent]
    B -- Specifies --> C[VolumeSnapshotClass]
    C -- Defines --> A
