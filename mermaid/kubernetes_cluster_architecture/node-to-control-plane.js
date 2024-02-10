graph LR
    A[Start] --> B{Nodes communicate with control plane}
    B --> C{Receive instructions on containers to run}
    C --> D{Report node status and health}
    D --> E[End]
    
    subgraph Control Plane Components
        F[kubelet]
        G[kube-proxy]
        H[Kubernetes API Server]
    end

    B --> F
    B --> G
    B --> H
