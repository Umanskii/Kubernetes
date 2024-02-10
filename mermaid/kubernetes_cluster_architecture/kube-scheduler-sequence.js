sequenceDiagram
    participant kube-scheduler
    participant kube-apiserver
    participant Node1
    participant Node2
    participant Node3

    kube-scheduler ->> kube-apiserver: Request for scheduling a new pod
    kube-apiserver ->> kube-scheduler: Returns the list of available nodes
    kube-scheduler ->> kube-apiserver: Selects the most suitable node for scheduling
    kube-scheduler ->> Node1: Sends scheduling decision (Pod assigned)
    kube-apiserver -->> kube-scheduler: Confirms scheduling decision
    kube-scheduler ->> Node2: Sends scheduling decision (Pod assigned)
    kube-apiserver -->> kube-scheduler: Confirms scheduling decision
    kube-scheduler ->> Node3: Sends scheduling decision (Pod assigned)
    kube-apiserver -->> kube-scheduler: Confirms scheduling decision
