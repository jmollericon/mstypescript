/* Module 2: Declare variable types in TypeScript
  Lab start  */

/*  EXERCISE 1
  TODO: Modify the code to add types to the variable declarations.
  The resulting JavaScript should look the same as the original example when you're done. */

let eFirstName: string;
let eLastName: string;
let eFullName: string;
let eAge: number;
let eUkCitizen: boolean;

eFirstName = "Rebecca";
eLastName = "Smith";
eAge = 42;
eUkCitizen = false;
eFullName = eFirstName + " " + eLastName;

if (eUkCitizen) {
  console.log("My name is " + eFullName + ", I'm " + eAge + ", and I'm a citizen of the United Kingdom.");
} else {
  console.log("My name is " + eFullName + ", I'm " + eAge + ", and I'm not a citizen of the United Kingdom.");
}

/* EXERCISE 2
  TODO: You can use types to ensure operation outcomes. Run the code as is and then modify
  it to have strongly typed variables. Then, address any errors you find so that the result
  returned to a is 12. */

let xx: number;
let yy: number;
let aa: number;

xx = 5;
yy = 7;
aa = xx + yy;

console.log(aa);

/* EXERCISE 3
  TODO: In the following code, implement an enum type called Season that represents
  the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so
  you can pass in the season by referencing an item in the enum, for example
  Season.Fall, instead of the literal string "Fall". */

enum Season {
  Fall,
  Winter,
  Spring,
  Summer
}

function whichMonths(season: Season) {
  let monthsInSeason: string;

  switch (season) {
    case Season.Fall:
      monthsInSeason = "September to November";
      break;
    case Season.Winter:
      monthsInSeason = "December to February";
      break;
    case Season.Spring:
      monthsInSeason = "March to May";
      break;
    case Season.Summer:
      monthsInSeason = "June to August";
  }

  return monthsInSeason;
}

console.log(whichMonths(Season.Fall));

/* EXERCISE 4
  TODO: Declare the array as the type to match the type of the items in the array. */

let randomNumbers: Array<number> = [];
let nextNumber: number;

for (let i = 0; i < 10; i++) {
  nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  randomNumbers.push(nextNumber);
}

console.log(randomNumbers);
