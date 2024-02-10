graph LR
    A[DaemonSet] -- Runs on --> Node1[Node 1]
    A -- Runs on --> Node2[Node 2]
    A -- Runs on --> Node3[Node 3]
    A -- Runs on --> Node4[Node 4]
    Node1 -- Spins up --> Pod1[Pod 1]
    Node2 -- Spins up --> Pod2[Pod 2]
    Node3 -- Spins up --> Pod3[Pod 3]
    Node4 -- Spins up --> Pod4[Pod 4]
