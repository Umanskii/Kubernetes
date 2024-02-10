graph LR
  A[Code in Pods] --> B(Pods)
  B --> C(Service)
  C --> D((Clients))
  B -- Pod goes down --> E(Service)
  E --> F(New Pod)
  F --> C
  D --> C
