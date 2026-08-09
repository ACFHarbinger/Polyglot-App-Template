{{- define "polyglot-app-template.name" -}}
{{- .Chart.Name -}}
{{- end -}}

{{- define "polyglot-app-template.labels" -}}
app: {{ include "polyglot-app-template.name" . }}
{{- end -}}
