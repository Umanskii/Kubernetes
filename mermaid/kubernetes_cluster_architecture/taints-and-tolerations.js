graph LR
    A[Start] --> B{Apply taint to a node}
    B --> C{Node has taint label}
    C --> D{Pod is created}
    D --> E{Pod has toleration label}
    E --> F{Check if pod tolerates node's taint}
    F --> G{Pod scheduled on the node}
    G --> H[End]
