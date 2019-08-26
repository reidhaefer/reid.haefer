{{ if and (not .Site.Params.disable_codefolding) (not .Params.disable_codefolding) (in (string .Content) "</pre>") }} 
  <script>
  $(document).ready(function () {
    window.initializeCodeFolding("show" === {{ if isset .Params "codefolding_show" }}{{ .Params.codefolding_show }}{{ else }}{{ default ("hide") .Site.Params.codefolding_show }}{{ end }});
  });
  </script>
  <script src="{{ "js/codefolding.js" | relURL }}"></script>
{{ end }}