function roll(){
  var randomNum1 = Math.floor(Math.random()*6) + 1;
  var randomDice1src = "images/dice" + randomNum1 + ".png";
  var dice1 = document.querySelectorAll("img")[0];
  dice1.setAttribute("src", randomDice1src);

  var randomNum2 = Math.floor(Math.random()*6) + 1;
  var randomDice2src = "images/dice" + randomNum2 + ".png";
  var dice2 = document.querySelectorAll("img")[1];
  dice2.setAttribute("src", randomDice2src);

  if(randomNum1 > randomNum2){
    document.querySelector('h1').innerHTML = "Player 1 WINS !!";
  }
  else if(randomNum1 < randomNum2){
    document.querySelector('h1').innerHTML = "Player 2 WINS !!";
  }
  else{
    document.querySelector('h1').innerHTML = "DRAW";
  }
}
