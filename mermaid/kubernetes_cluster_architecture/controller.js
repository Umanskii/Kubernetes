flowchart LR
    NC[Node Controller] --> MNL[Manage Node Lifecycle]
    LBC[Load Balancer Controller] --> MLL[Manage Load Balancer Resources]
    PVC[Persistent Volume Controller] --> MSP[Manage Storage Resources]
    RC[Route Controller] --> MNR[Manage Network Routes]
    SC[Service Controller] --> MNS[Manage Kubernetes Services]
