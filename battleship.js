//DECLARE variables
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

//LOOP
while (isSunk == false) {
    guess = prompt("Ready Aim Shot! (input a number range of 0 to 6)");
    if (guess < 0 || guess >6) {
      alert("it's not avaliable");

    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
          hits = hits + 1;
          alert("hit!!")
          if (hits == 3) {
            isSunk = true;
            alert("you win the game!!")

          }
        }  else {
          alert("miss!")
        }
    }
}
var stats = "you guessed " + guesses + " times, " + "Accuracy is " + (3/guesses) * 100 + "%";
alert(stats);
