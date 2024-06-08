function doGet(e) {
  const sheet = SpreadsheetApp.openById("_________id ของ sheet __________")
    .getSheetByName("__ Tab Sheet____");
  const query = e.parameter.q?.toLowerCase(); // Optional chaining and lowercase
  const data = sheet.getDataRange().getValues();
  const results = data.slice(1) // Skip header row
    .filter(row => !query || row[0].toLowerCase() === query) // Case-insensitive search
    .map(row => Object.fromEntries(row.map((value, index) => ['column' + (index + 1), value])));

  return ContentService
    .createTextOutput(JSON.stringify(results))
    .setMimeType(ContentService.MimeType.JSON);
}
