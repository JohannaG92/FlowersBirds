var data;
var bird;
var rightAnswer;

responsiveVoice.setDefaultVoice("Swedish Female");
d3.json("https://codepen.io/JohannaG92/pen/owWGxV?editors=0010.js",function(error,jsonData){
  data = jsonData;
  init();
})

function init(){
	document.getElementById("OKButton").addEventListener("click", getImg);
	getImg();
}

function getImg(){
	if (document.getElementById("inputBox").value!="") {
		var answer = document.getElementById("inputBox").value;
		answer = answer.toLowerCase();
		if (answer == rightAnswer) {
			document.getElementById("rightans").innerHTML = "RÄTT!";
		}
		else{
			document.getElementById("rightans").innerHTML = "FEL!";
		}
	};
	var nrOfBirds = data.length;
	var randomIndex = Math.floor((Math.random() * nrOfBirds));
	bird = data[randomIndex];
	rightAnswer = bird.name;
	rightAnswer = rightAnswer.toLowerCase();
	document.getElementById("pressedId").innerHTML = rightAnswer;
	document.getElementById("latinName").innerHTML = bird.latinname;
    var img = document.getElementById("birdImage");
    img.setAttribute("src", bird.url);
    //var msg = new SpeechSynthesisUtterance(rightAnswer);
	//window.speechSynthesis.speak(msg);
	responsiveVoice.speak(rightAnswer);
}
