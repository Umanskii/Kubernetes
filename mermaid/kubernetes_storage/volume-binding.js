graph TD
  A[StorageClass] -->|volumeBindingMode| B((Immediate))
  B --> C{Storage Backends}
  C -->|Topology-Constrained| D(PersistentVolumes)
  D --> E[Unschedulable Pods]

  A -->|volumeBindingMode| F((WaitForFirstConsumer))
  F --> G(Pods using PersistentVolumeClaim)
  G -->|Scheduling Constraints| H[PersistentVolumes]
