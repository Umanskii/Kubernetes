graph LR
    A[StatefulSet] -- Manages --> Pod1[Pod 1]
    A -- Manages --> Pod2[Pod 2]
    Pod1 -- Network Identity --> P1[Network Identity: pod-0]
    Pod2 -- Network Identity --> P2[Network Identity: pod-1]
