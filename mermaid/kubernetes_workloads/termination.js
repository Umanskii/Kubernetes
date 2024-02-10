graph LR
    A[Start] --> B{Pod deletion requested}
    B --> C{Record intended grace period}
    C --> D{Graceful shutdown by kubelet}
    D --> E{Send TERM signal to main process}
    E --> F{Check grace period expiration}
    F -- Expired --> G{Send KILL signal to remaining processes}
    G --> H{Delete pod from API server}
    F -- Not Expired --> I{Check for restart of kubelet or container runtime}
    I -- Restarted --> C
    I -- Not Restarted --> F
    H --> J[End]
