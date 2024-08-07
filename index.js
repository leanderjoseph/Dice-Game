var ranNum1 = Math.floor((Math.random() * 6 + 1));
var ranNum2 = Math.floor((Math.random() * 6 + 1));

var ranDice1 = "images/dice" + ranNum1 + ".png";
var ranDice2 = "images/dice" + ranNum2 + ".png";


$(".img1").attr("src",ranDice1)
$(".img2").attr("src",ranDice2)

if(ranNum1 > ranNum2){
    $("h1").text("Player 1 wins!")
} else if (ranNum1 < ranNum2){
    $("h1").text("Player 2 wins!")
} else{
    $("h1").text("It's a Draw!")
}