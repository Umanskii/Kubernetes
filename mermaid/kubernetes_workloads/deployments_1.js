graph LR
    A[Deployment] -- Manages --> RS1[ReplicaSet 1]
    A -- Manages --> RS2[ReplicaSet 2]
    RS1 -- Manages --> P1[Pod 1]
    RS1 -- Manages --> P2[Pod 2]
    RS2 -- Manages --> P3[Pod 3]
    RS2 -- Manages --> P4[Pod 4]
    DC[Deployment Controller] -- Monitors --> A
    DC -- Monitors --> RS1
    DC -- Monitors --> RS2
