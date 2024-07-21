// alert("It's Working!");  we could use the alert to check if the html linked the js file

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice = "./images/dice" + randomNumber1 + ".png";
var randomDice2 = "./images/dice" + randomNumber2 + ".png";

var clicked1 = false;
var clicked2 = false;

function checkWinner(clicked1, clicked2, randomNumber1, randomNumber2){
  if(clicked1 === true && clicked2 === true){
    if(randomNumber1 > randomNumber2){
      document.querySelector("h1").innerHTML = "Player1 Wins!"
    }else if(randomNumber1 < randomNumber2){
      document.querySelector("h1").innerHTML = "Player2 Wins!"
    }else{
      document.querySelector("h1").innerHTML = "Draw!"
    }
  }
}

document.querySelectorAll("button.dice")[0].addEventListener("click", function(){
  // alert("Clicked");
  document.querySelector("img.img1").setAttribute("src", randomDice);
  clicked1 = true;
  checkWinner(clicked1, clicked2, randomNumber1, randomNumber2);
});

document.querySelectorAll("button.dice")[1].addEventListener("click", function(){
  // alert("Clicked");
  document.querySelector("img.img2").setAttribute("src", randomDice2);
  clicked2 = true;
  checkWinner(clicked1, clicked2, randomNumber1, randomNumber2);
});


// create a button to start again
document.querySelector("button.again.dice").addEventListener("click", function(){
  location.reload();
});
