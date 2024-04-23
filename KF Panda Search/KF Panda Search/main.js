// KF Panda Search

//variables for elements
var themeInput = document.getElementById("theme-in");
var themeBtn = document.getElementById("theme-btn");
var searchInput = document.getElementById("search-input");
var searchBtn = document.getElementById("search-btn");
var cImage = document.getElementById("img");
var cName = document.getElementById("character-name");
var cQuote = document.getElementById("character-quote");
var div = document.getElementById("div");
var body = document.getElementById("body");
var header = document.getElementById("header");

//global variables
var Character = "Po";
var Theme = "white";

//event listeners

themeBtn.addEventListener("click", changetheme);
searchBtn.addEventListener("click", changeCharacter);

//functions

function changeCharacter() {
  Character = searchInput.value;
  searchInput.value = "";
  Character = Character.toLowerCase();

  if (Character === "po") {
    cName.innerHTML = "Po";
    cQuote.innerHTML = "Buddy, I am the Dragon Warrior";
    cImage.src = "img/po.png";
  } else if (Character === "tigress") {
    cName.innerHTML = "Tigress";
    cQuote.innerHTML = "Stop being a wimp.";
    cImage.src = "img/tigress.png";
  } else if (Character === "monkey") {
    cName.innerHTML = "Monkey";
    cQuote.innerHTML =
      "If you beat me, I will go. If not, then it is you who must leave, without your pants!";
    cImage.src = "img/monkey.png";
  } else if (Character === "oogway") {
    cName.innerHTML = "Oogway";
    cQuote.innerHTML =
      "One often meets his destiny on the road he takes to avoid it.";
    cImage.src = "img/Oogway.png";
  } else if (Character === "shifu") {
    cName.innerHTML = "Shifu";
    cQuote.innerHTML =
      "Well done students, if you were trying to disapoint me!";
    cImage.src = "img/shifu.png";
  } else if (Character === "tai lung") {
    cName.innerHTML = "Tai lung";
    cQuote.innerHTML =
      "Finally, a worthy opponent! Our battle will be legendary!";
    cImage.src = "img/tai-lung.png";
  } else if (Character === "kai") {
    cName.innerHTML = "Kai";
    cQuote.innerHTML =
      "I fought by his side. I loved him like a brother. And he... Betrayed me.";
    cImage.src = "img/kai.png";
  } else if (Character === "shen") {
    cName.innerHTML = "Shen";
    cQuote.innerHTML =
      "My father's throne. He used to let me play here at his side, promising one day this throne would be mine!";
    cImage.src = "img/shen.png";
  } else if (Character === "viper") {
    cName.innerHTML = "Viper";
    cQuote.innerHTML = "I don't need to bite to fight!";
    cImage.src = "img/viper.png";
  } else if (Character === "soothsayer") {
    cName.innerHTML = "Soothsayer";
    cQuote.innerHTML =
      "Even with his poor eyesight, he can see the truth. Why is it that you cannot?";
    cImage.src = "img/soothsayer.png";
  } else if (Character === "storming ox") {
    cName.innerHTML = "Storming Ox";
    cQuote.innerHTML = "Ahhhhhhhh!";
    cImage.src = "img/storming-ox.png";
  } else if (Character === "crane") {
    cName.innerHTML = "Crane";
    cQuote.innerHTML = "Excuse me, when have I ever made that noise?";
    cImage.src = "img/crane.png";
  } else if (Character === "mantis") {
    cName.innerHTML = "Mantis";
    cQuote.innerHTML =
      "Who am I to judge a warrior based on his size? I mean... look at me!";
    cImage.src = "img/mantis.png";
  } else if (Character === "croc") {
    cName.innerHTML = "Croc";
    cQuote.innerHTML = "The only hero in this town is a dead one!";
    cImage.src = "img/croc.png";
  } else if (Character === "mr. ping") {
    cName.innerHTML = "Mr. Ping";
    cQuote.innerHTML = " ... Noodles.";
    cImage.src = "img/mr-ping.png";
  } else if (Character === "boss wolf") {
    cName.innerHTML = "Boss Wolf";
    cQuote.innerHTML =
      "Guess nobody told you: If you mess with the wolf, you get the fangs.";
    cImage.src = "img/boss-wolf.png";
  } else {
    cName.innerHTML = "?";
    cQuote.innerHTML = "Please select a valid Kung Fu Panda character.";
    cImage.src = "img/question-mark.png";
  }
}

function changetheme() {
  Theme = themeInput.value;
  Theme = Theme.toLowerCase();

  if (Theme === "white" || Theme === "light" || Theme === "bright") {
    body.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    header.style.color = "rgba(0, 0, 0, 0.7)";
  } else if (Theme === "black" || Theme === "dark") {
    body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    header.style.color = "rgb(255, 255, 255)";
  } else if (Theme === "random") {
    body.style.backgroundColor = `rgba(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255}, 0.7)`;
    header.style.color = `rgba(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255}, 0.7)`;
  }
}
