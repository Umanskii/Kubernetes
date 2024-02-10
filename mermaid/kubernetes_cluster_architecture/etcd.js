sequenceDiagram
    participant UserOrComponent
    participant kube-apiserver
    participant etcd

    UserOrComponent ->> kube-apiserver: Send change request
    kube-apiserver ->> etcd: Store change in distributed key-value store
    etcd -->> kube-apiserver: Change committed
    kube-apiserver -->> UserOrComponent: Send response (Change successful)
