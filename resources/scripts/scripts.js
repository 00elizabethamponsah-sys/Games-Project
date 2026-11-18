//INDEX.HTML
function user(name, age, email) {
 console.log('Name:' + name);
 console.log('Age: ' + age);
 console.log('Email: ' + email);
}
user('Elizabeth', 18,'elizabethatgmail');

//TICTACTOE
let gameActive = true;

let characterX = {
  color: "springgreen"
};
console.log(characterX);

let characterO = {
  color: "#A78BFA"
}
console.log(characterO);

for (let i = 1; i < 10; i++){
  console.log(i);
};

function placeXorO (X, O) {
  if ('' === null) {
    return 'X';
  } else {
    return 'O';
  }
}
placeXorO('X', 'O');

//SCORES
let players = {
  computer: null,
  user: null
};

function printScore() {
  let userWins = true;
  if(userWins) {
    return 'You Win! + 100'
  }else if(userDoesNotWin) {
    console.log('Its a Tie!');
  }else{
    console.log('You lose');
  }
};
printScore();

//SNAKE
let scell = Array(10).fill('');
let sgameActive = true; 

let snake = {
  color: "springgreen",
  food: "apple",
  foodColor: 'red'
};
console.log(snake);

function moveSnake() {
  let upbutton = 'clicked'
  if (upbutton === "clicked") {
    return "move snake up";
  }else if(downbutton === "clicked"){
    console.log('move snake down');
  }else if(leftbutton === "clicked"){
    console.log('move snake left');
  }else if(rightbutton === "clicked")
    console.log('move snake right');
}
moveSnake();

 
//to randomly place food for the snake
for (let i = 1; i < 101; i++){
  console.log(i);
};

//SCORES
function printScores() {
  let suserWins = true;
  if (suserWins) {
    return 'You Win! + 100'
  }else{
    console.log('You lose');
  }
};
printScores();