graph LR
    A[Start] --> B{Pod created}
    B --> C{Pending}
    C --> D{Resources available?}
    D -- Yes --> E{Running}
    E --> F{Containers healthy?}
    F -- Yes --> G{Succeeded}
    G --> H[End -- Pod completes]
    F -- No --> I{Failed}
    I --> H[End -- Pod fails]
    D -- No --> J{Resources become available}
    J --> C
    C --> H[End -- Pod scheduled]
    A --> K{State cannot be determined?}
    K -- Yes --> L{Unknown}
    L --> H[End -- Issue with pod]
    K -- No --> H[End -- Pod completes]
