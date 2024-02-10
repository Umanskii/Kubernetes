graph LR
    A[Start] --> B{Monitor cluster state}
    B --> C{Compare current state to desired state}
    C -- Deviation detected --> D{Take appropriate action}
    D --> E[End]
    C -- No deviation --> E[End]
    
    subgraph kube-controller-manager
        F[Replication Controller]
        G[Endpoints Controller]
        H[Namespace Controller]
        I[Service Accounts Controller]
    end

    B --> F
    B --> G
    B --> H
    B --> I
