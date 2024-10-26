//This is the CSV data from the previous assignment 308.3.1
const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;
console.log(csvData)

//Part 1 Refactoring/Restructuring the CSV Data from 308.3.1
const rows = csvData.split('\n');

