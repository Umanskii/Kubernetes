graph LR
    CP[Kubernetes Control Plane] -- Communicates with --> K[Kubelet]
    K -- Manages Containers --> CR[Container Runtime]
    K -- Receives Instructions from --> CP
    CR -- Starts, Stops, and Manages --> C[Containers]
