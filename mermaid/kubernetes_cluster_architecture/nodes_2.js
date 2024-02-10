graph LR
    AW[New Workload Deployment] -- Requires Resources --> AD[Add Node]
    AD -- Provides Sufficient Resources --> SC[Schedule Workload]
    RL[Workload Removal] -- Frees Resources --> RN[Remove Node]
