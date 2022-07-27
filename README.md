# node-image-kubernetes

kind is a tool for running local Kubernetes clusters using Docker container "nodes".
kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI.

If you have [go] \([1.17+][go-supported]) and [docker] installed `go install sigs.k8s.io/kind@{{< stableVersion >}} && kind create cluster` is all you need!

For older versions use `GO111MODULE="on" go get sigs.k8s.io/kind@{{< stableVersion >}}`.

![](site/static/images/kind-create-cluster.png)

kind consists of:
- Go [packages][packages] implementing [cluster creation][cluster package], [image build][build package], etc.
- A command line interface ([`kind`][kind cli]) built on these packages.
- Docker [image(s)][images] written to run systemd, Kubernetes, etc.
- [`kubetest`][kubetest] integration also built on these packages (WIP)
