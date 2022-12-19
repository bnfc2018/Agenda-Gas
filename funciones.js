function doGet() {
  return HtmlService.createTemplateFromFile("web")
    .evaluate()
    .setTitle("Agenda google app script");
}
function obtenerDatosHtml(prm){
  return HtmlService.createHtmlOutputFromFile(prm).getContent();
}