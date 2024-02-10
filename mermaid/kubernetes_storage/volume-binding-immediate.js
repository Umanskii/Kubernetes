graph LR
  A[StorageClass] -->|volumeBindingMode: Immediate| B((Immediate))
  B --> C{Storage Backends}
  C -->|Topology-Constrained| D(PersistentVolumes)
  D --> E[Unschedulable Pods]
