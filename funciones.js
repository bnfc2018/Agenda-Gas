function doGet() {
  var html = HtmlService.createTemplateFromFile("web")
    .evaluate()
    .setTitle("Creacion de Tablas");

  return html;
}
function obtnerDatosHtml(prm) {
  return HtmlService.createHtmlOutputFromFile(prm).getContent();
}

function obtenerContactos() {
  let aplicacion = SpreadsheetApp;
  let hoja = aplicacion
    .openById("1oz-CmkaDr6tnKH4aL4RgQSqoUb4r6bs-SXL30sjPOxA")
    .getActiveSheet();
  let contactos = hoja.getDataRange().getValues();
  return contactos;
}
