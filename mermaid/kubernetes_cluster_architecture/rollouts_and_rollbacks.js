stateDiagram-v2
    [*] --> Deploying
    Deploying --> Running: Application deployed successfully
    Deploying --> Failed: Application deployment failed
    Running --> Updating: New application update detected
    Updating --> Running: Application updated successfully
    Updating --> Rollback: Rollback initiated
    Rollback --> Running: Rollback completed successfully
    Rollback --> Failed: Rollback failed
    Failed --> Deploying: Retry application deployment
