import { fifaData } from "./fifa.js";
console.log(fifaData);

console.log("its working");

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data
 */
// (a) Home Team name for 2014 world cup final

for (let i = 0; i < fifaData.length; i++) {
  //Create a for loop to loop through data set
  if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final") {
    // IF dataset is === 2014 AND Final
    console.log(fifaData[i]["Home Team Name"]); // LOG HOME TEAM NAME
  }
}

//(b) Away Team name for 2014 world cup final

for (let i = 0; i < fifaData.length; i++) {
  //Create a for loop to loop through data set
  if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final") {
    // IF dataset is === 2014 AND Final
    console.log(fifaData[i]["Away Team Name"]); // LOG AWAY TEAM NAME
  }
}

//(c) Home Team goals for 2014 world cup final

for (let i = 0; i < fifaData.length; i++) {
  //Create a for loop to loop through data set
  if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final") {
    // IF dataset is === 2014 AND Final
    console.log(fifaData[i]["Home Team Goals"]); // LOG HOME TEAM GOALS
  }
}

//(d) Away Team goals for 2014 world cup final

for (let i = 0; i < fifaData.length; i++) {
  //Create a for loop to loop through data set
  if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final") {
    // IF dataset is === 2014 AND Final
    console.log(fifaData[i]["Away Team Goals"]); // LOG AWAY TEAM GOALS
  }
}

//(e) Winner of 2014 world cup final */

for (let i = 0; i < fifaData.length; i++) {
  //Create a for loop to loop through data set
  if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final") {
    // IF dataset is === 2014 AND Final
    console.log(fifaData[i]["Win conditions"]); // LOG WIN CONDITIONS
  }
}
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  let finals = data.filter((game) => game.Stage === "Final");
  return finals;
}

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback, data) {
  let years = callback(data).map((item) => item.Year);
  return years;
}

console.log(getYears(getFinals, fifaData));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(callback, data) {
  let winners = [];
  callback(data).forEach((item) => {
    if (item["Home Team Goals"] > item["Away Team Goals"]) {
      winners.push(item["Home Team Name"]);
    } else {
      winners.push(item["Away Team Name"]);
    }
  });
  return winners;
}
console.log(getWinners(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback, cb2, cb3, data) {
  let winners = callback(cb3, data);
  let years = cb2(cb3, data);
  let winnersByYears = years.forEach((item, index) => {
    console.log(`In ${item}, ${winners[index]} won the world cup!`);
  });
}

console.log(getWinnersByYear(getWinners, getYears, getFinals, fifaData));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
// reduce

function getAverageGoals(data) {
  let homeGoals = Math.round(
    data.reduce((goals, index) => {
      return goals + index["Home Team Goals"] / data.length;
    }, 0)
  );
  let awayGoals = Math.round(
    data.reduce((goals, index) => {
      return goals + index["Away Home Goals"] / data.length;
    }, 0)
  );
  return { home: homeGoals, away: awayGoals };
}
console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
