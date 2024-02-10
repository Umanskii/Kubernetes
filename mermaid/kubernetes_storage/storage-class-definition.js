graph LR
  A[Administrator] -- Creates --> B(StorageClass)
  B -- Contains --> C((Provisioner))
  B -- Contains --> D{Parameters}
  C --> E((Storage System))
  D --> E
