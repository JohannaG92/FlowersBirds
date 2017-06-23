var data;
var bird;
var rightAnswer;
var ansToggle = false;

responsiveVoice.setDefaultVoice("Swedish Female");
d3.json("https://codepen.io/JohannaG92/pen/owWGxV?editors=0010.js",function(error,jsonData){
  data = jsonData;
  init();
})

//d3.json("https://codepen.io/JohannaG92/pen/RggOBB?editors=0010.js",function(error,jsonData){
//  data = jsonData;
//  init();
//})

function init(){
	document.getElementById("OKButton").addEventListener("click", getImg);
	getImg();
	document.getElementById("soundButton").addEventListener("click", playSound);
}

function getImg(){
	if (ansToggle == true) {
		var answer = document.getElementById("inputBox").value;
		answer = answer.toLowerCase();
		if (answer == rightAnswer) {
			document.getElementById("facitContainer").innerHTML = "RÄTT!";
			document.getElementById("facitContainer").style.color = "Green";
		}
		else{
			document.getElementById("facitContainer").innerHTML = "Rätt svar: "+rightAnswer;
			document.getElementById("facitContainer").style.color = "Red";
		}
		ansToggle = false;
		document.getElementById("OKButton").innerHTML = "Nästa";
	}
	else{
		document.getElementById("inputBox").value="";
		document.getElementById("OKButton").innerHTML = "OK";
		document.getElementById("facitContainer").innerHTML = "";
		var nrOfBirds = data.length;
		var randomIndex = Math.floor((Math.random() * nrOfBirds));
		bird = data[randomIndex];
		rightAnswer = bird.name;
		rightAnswer = rightAnswer.toLowerCase();
		document.getElementById("latinName").innerHTML = bird.latinname;
	    var img = document.getElementById("birdImage");
	    img.setAttribute("src", bird.url);
	    //var msg = new SpeechSynthesisUtterance(rightAnswer);
		//window.speechSynthesis.speak(msg);
		ansToggle = true;
	}
	
}

function playSound(){
	responsiveVoice.speak(rightAnswer);
}