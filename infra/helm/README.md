# helm/

Helm chart packaging (mostly) of the same resources as `infra/k8s/base/`, for
teams that prefer `helm install` over `kubectl apply -k`. Pick one, don't run
both against the same cluster/namespace.

```bash
helm lint infra/helm/polyglot-app-template
helm install polyglot-app-template infra/helm/polyglot-app-template -f infra/helm/polyglot-app-template/values.yaml
```
