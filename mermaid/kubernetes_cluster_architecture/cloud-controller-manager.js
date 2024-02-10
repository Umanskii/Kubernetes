graph LR
    A[Start] --> B{Monitor cluster and cloud provider APIs}
    B --> C{Compare cluster state with cloud provider state}
    C -- Deviation detected --> D{Take appropriate action}
    D --> E[End]
    C -- No deviation --> E[End]
    
    subgraph cloud-controller-manager
        F[Cloud Provider-specific Controllers]
    end

    B --> F
