graph LR
    A[Pod Disruption] -- Voluntary --> S[Scaling]
    A -- Voluntary --> R[Rolling Updates]
    A -- Voluntary --> D[Pod Deletion]
    A -- Involuntary --> NF[Node Failure]
    A -- Involuntary --> RC[Resource Constraints]
    A -- Involuntary --> NI[Network Issues]
