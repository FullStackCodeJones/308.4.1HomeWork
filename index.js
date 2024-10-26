//CSV Data
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//Parse CSV data into a 2D array
const rows = csvData.split('\n');
const columnCount = rows[0].split(',').length;
const tableData = rows.map(row => row.split(','));

