var player1 = Math.floor(Math.random() * 3) + 1;
var emoji1 = "/images/emoji" +player1+ ".png"; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", emoji1);

var player2 = Math.floor(Math.random() * 3) + 1;
var emoji2 = "/images/emoji" +player2+ ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", emoji2);


if (player1 === 1 && player2 === 3){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (player1 === 2 && player2 === 1){
  document.querySelector("h1").innerHTML =  "Player 1 Wins!";
}
else if (player1 === 3 && player2 === 2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (player2 === 1 && player1 === 3){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if (player2 === 2 && player1 === 1){
  document.querySelector("h1").innerHTML =  "Player 2 Wins!";
}
else if (player2 === 3 && player1 === 2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}