graph LR
  F[Users] -- Requests --> G[PersistentVolumeClaim]
  G -- Specifies --> H((StorageClass))
  H -- Matches --> B(StorageClass)
