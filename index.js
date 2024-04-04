let randomNumber1 = Math.floor(Math.random() * 6 + 1) ;

var randomImageSource1 = "dice" + randomNumber1 + "_image.png";

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);




var randomNumber2 = Math.floor(Math.random() * 6 + 1) ;

var randomImageSouce2 = "dice" + randomNumber2 + "_image.png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSouce2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🚩Player 1 Wins!";
} else if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}