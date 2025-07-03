function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AssetData');
  const data = JSON.parse(e.postData.contents);

  const { assetId, ibc, assetType, date, postedBy } = data;

  sheet.appendRow([assetId, ibc, assetType, date, postedBy]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return HtmlService.createHtmlOutput("Field API is live.");
}
