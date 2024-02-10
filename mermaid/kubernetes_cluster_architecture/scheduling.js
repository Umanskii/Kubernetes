graph LR
    A[Start] --> B{Kubernetes scheduler examines pod specifications}
    B --> C{Filter available nodes based on pod requirements}
    C --> D{Assign scores to nodes}
    D --> E{Select node with highest score}
    E --> F{Update pod's status with selected node}
    F --> G{Kubelet receives pod specification}
    G --> H{Create pod's container(s) and configure resources}
    H --> I{Monitor pod's health}
    I --> J{Take action if pod fails or becomes unresponsive}
    J --> K[End]
