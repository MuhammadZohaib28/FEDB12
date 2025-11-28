console.log("ARRAY");

let student1 = "Mahibullah";
let student2 = "Amanullah";
let student3 = "Suleman";
let student4 = "Fahim";
let student5 = "Hamid";

let fruit1 = "Apple";

let age = 50;

let fruit2 = "Banana";
let fruit3 = "Orange";
let fruit4 = "Grapes";
let fruit5 = "Pineapple";

//DRY - DON'T REPEAT YOURSELF

let studentsName = ["Mahibullah", "Amanullah", "Suleman", "Fahim"];

console.log(studentsName.sort());

let sortedNames = studentsName.sort((a, b) => b.localeCompare(a));

console.log(sortedNames);

// console.log(studentsName[0]);
// console.log(studentsName[1]);
// console.log(studentsName[2]);
// console.log(studentsName[3]);
// console.log(studentsName[4]);

console.log(studentsName.length);

for (let i = 0; i <= studentsName.length - 1; i++) {
  console.log(studentsName[i]);
}

let numbers = [40, 23, 12, 45, 1, 34, 420, 1234, 5430, 300];

let sortedNums = numbers.sort();

console.log(sortedNums);
