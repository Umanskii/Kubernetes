flowchart LR
    A[Node Controller] --> B[Monitor Node State]
    C[Replication Controller] --> D[Maintain Replica Count]
    E[Endpoints Controller] --> F[Populate Endpoints]
    G[Jobs Controller] --> H[Monitor Job Creation]
    I[Service Account & Token Controllers] --> J[Create Service Accounts and Tokens]
    K[Namespace Controller] --> L[Ensure Namespace Resources and Permissions]
