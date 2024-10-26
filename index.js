//This is the CSV data from the previous assignment 308.3.1
const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;
console.log(csvData)

//Part 1 Refactoring/Restructuring the CSV Data from 308.3.1
const randi = csvData.split('\n');
console.log(randi)
//Part 2 ===============================================

const header = randi[0].split(',');
console.log(header);
const ID = randi[1].split(',');
console.log(ID)
const Name = randi[2].split(',');
console.log(Name);
const Occupation = randi[3].split(',');
console.log(Occupation);
const Age = randi[4].split(',');
console.log(Age);
