graph LR
  A[StorageClass] -->|volumeBindingMode: WaitForFirstConsumer| B((WaitForFirstConsumer))
  B --> C(Pods using PersistentVolumeClaim)
  C -->|Scheduling Constraints| D[PersistentVolumes]
