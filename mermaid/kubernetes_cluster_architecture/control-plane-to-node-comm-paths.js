graph LR
    A[Start] --> B{API server to Kubelet process on each node}
    B --> C{Terminates at Kubelet's HTTPS endpoint}
    C --> D{Perform operations: grab logs, attach to pod's shell, port-forwarding}
    D --> E[End]
    
    F[API server to any node, pod, or service]
    F --> G{Plain HTTP connection -- unauthenticated and unencrypted}
    G --> H{Operations on node, pod, or service}
    H --> I[End]
