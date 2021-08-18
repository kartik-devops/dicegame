var randomnumber = Math.floor(Math.random()*6)+1;
var randomdiceimage = "dice"+randomnumber+".png";
var randomdiceimagesrc = "images/"+randomdiceimage;
var imageone  = document.querySelectorAll("img")[0];
imageone.setAttribute("src",randomdiceimagesrc);


var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomdiceimagesrc2 = "images/dice"+randomnumber2+".png";
var image2  = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceimagesrc2);

if(randomnumber > randomnumber2)
{
   document.querySelector("h1").innerHTML = " 🚩 Player 1 wins";
}

else if(randomnumber === randomnumber2)
{
  document.querySelector("h1").innerHTML = "🚩 Draw !!! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩"
}
