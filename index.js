//CSV Data
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//Parse CSV data into a 2D array
const rows = csvData.split('\n');
const columnCount = rows[0].split(',').length;
const tableData = rows.map(row => row.split(','));

//Convert each row into an object with keys from headers
const headers = tableData[0];  // ["ID", "Name", "Occupation", "Age"]
const objects = tableData.slice(1).map(row => {
    const obj = {};
    headers.forEach((header, index) => {
        obj[header.toLowerCase()] = row[index]; // lowercase keys for consistency
    });
    return obj;
});
console.log("Array of objects:", objects);