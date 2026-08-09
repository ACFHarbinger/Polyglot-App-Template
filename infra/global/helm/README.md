# helm/

Helm chart packaging (mostly) of the same resources as `infra/global/k8s/base/`, for
teams that prefer `helm install` over `kubectl apply -k`. Pick one, don't run
both against the same cluster/namespace.

```bash
helm lint infra/global/helm/polyglot-app-template
helm install polyglot-app-template infra/global/helm/polyglot-app-template -f infra/global/helm/polyglot-app-template/values.yaml
```
