graph LR
    A[Pod Starts]
    A -- Runs --> B[Pod Running]
    B -- Terminates --> C[Pod Terminating]
    C -- Deletes Volume --> D[Pod Terminated]
