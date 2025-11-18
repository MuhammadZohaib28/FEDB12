console.log("DAY 6");

let citizenAge = 2;

if (citizenAge >= 18) {
  console.log("You are eligible to vote. Citizen age is:", citizenAge);
} else {
  console.log("You are not eligible to vote. Citizen age is:", citizenAge);
}

// Nested If Else=

// 80 - 100 A+
// 70 - 79 A
// 60 - 69 B
// 50 - 59 C
// 0 - 49 F

// || - LOGICAL OR OPERATOR

let studentMarks = "32";

if (studentMarks > 100 || studentMarks < 0 || isNaN(studentMarks)) {
  console.log(
    "PLEASE INPUT NUMBERS BETWEEN 0 to 100. INVALID MARKS:",
    studentMarks
  );
} else if (studentMarks >= 80) {
  console.log("Students marks are " + studentMarks + " and grade is A+");
} else if (studentMarks >= 70) {
  console.log("Students marks are " + studentMarks + " and grade is A");
} else if (studentMarks >= 60) {
  console.log("Students marks are " + studentMarks + " and grade is B");
} else if (studentMarks >= 50) {
  console.log("Students marks are " + studentMarks + " and grade is C");
} else {
  console.log("Students marks are " + studentMarks + " and grade is F");
}
