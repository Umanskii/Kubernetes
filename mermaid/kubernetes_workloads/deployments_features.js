graph LR
    A[Deployment] -- Rolling Updates --> RU[Rolling Updates]
    A -- Scaling --> S[Scaling]
    A -- Self-healing --> SH[Self-healing]
    A -- Canary Deployments --> CD[Canary Deployments]
    A -- Blue/Green Deployments --> BG[Blue/Green Deployments]
