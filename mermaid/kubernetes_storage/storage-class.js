erDiagram
  persistentvolume }|..|| storageclass : "belongs to"
  storageclass ||--|| provisioner : has
  storageclass ||--|| parameters : has
  storageclass ||--|| reclaimpolicy : has
  storageclass {
    string provisioner
    string parameters
    string reclaimPolicy
  }
  provisioner {
    string name
  }