# Ledger Note Web App

This is a simple web-based ledger system that allows users to save and view their last 10 saved entries.

## Features:
- Save **Name, Number, Date, and Timestamp**.
- **Displays last 10 entries** in a **ledger-style format**.
- Uses **Google Apps Script** as a backend to store data in **Google Sheets**.

## How to Deploy:
1. **Set up Google Apps Script**:
   - Go to [Google Apps Script](https://script.google.com/) and create a new project.
   - Replace the default code with:

   ```javascript
   function doPost(e) {
       var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getActiveSheet();
       var data = JSON.parse(e.postData.contents);
       var timestamp = new Date();
       sheet.appendRow([data.name, data.number, data.date, timestamp]);
       return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
   }

   function doGet() {
       var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getActiveSheet();
       var data = sheet.getDataRange().getValues();
       return ContentService.createTextOutput(JSON.stringify(data))
           .setMimeType(ContentService.MimeType.JSON);
   }
   