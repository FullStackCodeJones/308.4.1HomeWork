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
//Part 2 Just Kidding, 'WHAT NOT TO DO"===============================================
//Part 3===============================================

/*const header = randi[0].split(',');
console.log(header);


let rj = 0;
while(rj <randi.length){
    header[rj] = header[rj].toLowerCase();
    rj++
}*/


//=================================


/*const ID = randi[1].split(',');
console.log(ID)
const Name = randi[2].split(',');
console.log(Name);
const Occupation = randi[3].split(',');
console.log(Occupation);
const Age = randi[4].split(',');
console.log(Age);
//Don't pay the code above any mind! 😊
*/
let data = [];
let headers = [];

randi.forEach((string) => {
    //check if first line
    if (string == randi[0]) {
        console.log(string)
        headers = string.toLowerCase().split(',')
        console.log(headers)
    }
    data.push(string.split(','));
})
//Sighhhhhhhhh My Head and eyes hurt 🥺I'm learning though.. kind of😊
////Part 3???=================================================

/*let people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "99", name: "Brett", occupation: "Developer", age: "33" }
];

people.pop();


people.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });


people.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });


console.log(people);


let totalAge = 0;
for (let i = 0; i < people.length; i++) {
    totalAge += parseInt(people[i].age);
}
let averageAge = totalAge / people.length;

console.log("Average Age:", averageAge);*/

//============================💃🏽===Let's Try this again-Home Stretch======💃🏽==========================================

let sortedArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }
];


sortedArray.pop();


const newObject1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
sortedArray.splice(1, 0, newObject1);

const newObject2 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
sortedArray.push(newObject2);

console.log(sortedArray);
//========================Part 5============Is that you?=============🎉🎊🥳🪩

const finalArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

const headers2 = Object.keys(finalArray[0]).join(","); // Get headers
const csvRows = finalArray.map(row => `${row.id},${row.name},${row.occupation},${row.age}`); // Create CSV rows using template literals
const csvString = [headers, ...csvRows].join("\n"); // Combine headers and rows

console.log(csvString);