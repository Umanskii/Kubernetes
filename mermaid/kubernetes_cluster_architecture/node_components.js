graph LR
    K[Kubelet] --> C[Container Runtime]
    K -- Reports Status and Health --> NSC[Node Status Components]
    K -- Communicates with --> AS[Kubernetes API Server]
    CP[Kubernetes Control Plane] -- Receives Reports --> NSC
    CP -- Provides Instructions --> K
    CP -- Provides Updates --> KP[kube-proxy]
    KP[kube-proxy] -- Routes Network Traffic --> S[Services and Pods]
    KP -- Communicates with --> AS
    K -- Manages Containers --> CR[Container Runtime]
    CR -- Provides Container Management --> K
    KP -- Implements Load Balancing --> S
    NA[Node Add-ons] -- Provide Additional Functionality --> K
