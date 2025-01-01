var points = 0;
var addOwned = 1;
var addBought = 0;
var addCost = 10;
var addMult = 1;
var genOwned = 0;
var genBought = 0;
var genCost = 100;
var multText = "Mult: x";
var accelOwned = 0;
var accelCost = 100000;

//game loop

		window.setInterval(function(){

		if (genOwned <= 0) { //initial number go up
			pointUp(addOwned)
		} else if (accelOwned <= 0){ //multiplied number go up
			var multPoints = Math.floor(addOwned * addMult);
			pointUp(multPoints);
		} else {
			pointUp(Math.floor((addOwned * addMult) * (accelOwned * 100)));
		}
		//generator number go up
		addOwned = addOwned + genOwned;
	}, 1000);

window.setInterval(function(){
	document.getElementById("points").innerHTML = points;
	document.getElementById('addOwned').innerHTML = addOwned;
	document.getElementById('genOwned').innerHTML = genOwned;
	if (genOwned > 0){
		addMult = Math.trunc(addMult*100)/100;
		document.getElementById('addBoughtText').innerHTML = "Bought: ";
		document.getElementById('addBought').innerHTML = addBought;
		document.getElementById('addMult').innerHTML = addMult;
		document.getElementById('multText').innerHTML = multText;
	}
}, 1);
function pointUp(n) {
	points = points + n;
	document.getElementById("points").innerHTML = points;
};

function adder() {
	if (points >= Math.floor(10 * Math.pow(1.1,addBought))) {
		addCost = Math.floor(10 * Math.pow(1.1,addBought));
		addOwned += 1;
		addBought += 1;
		addMult += 0.1;
		points -= addCost;
		document.getElementById('addOwned').innerHTML = addOwned;
	}
	var nextCost = Math.floor(10 * Math.pow(1.1,addBought));
	document.getElementById('addCost').innerHTML = nextCost;
};

function buyMaxAdd(){
	while (points >= Math.floor(10 * Math.pow(1.1,addBought))) {
		addCost = Math.floor(10 * Math.pow(1.1,addBought));
		points -= addCost;
		addBought += 1;
		addOwned += 1;
		addMult += 0.1
	}
	var nextCost = Math.floor(10 * Math.pow(1.1,addBought));
	document.getElementById('addCost').innerHTML = nextCost;
	document.getElementById('addOwned').innerHTML = addOwned;
};

function addGen(n) {
	if (points >= Math.floor(100 * Math.pow(1.5,genBought))) {
		genCost = Math.floor(100 * Math.pow(1.5,genBought));
		points -= genCost;
		genBought += 1;
		genOwned += 1;
	}
	var nextCost = Math.floor(100 * Math.pow(1.5, genOwned));
	document.getElementById('genCost').innerHTML = nextCost;
	document.getElementById('genOwned').innerHTML = genOwned;
};

function buyMaxGen(){
	while (points >= Math.floor(100 * Math.pow(1.5,genBought))) {
		genCost = Math.floor(100 * Math.pow(1.5,genBought));
		points -= genCost;
		genBought += 1;
		genOwned += 1;
	}
	var nextCost = Math.floor(100 * Math.pow(1.5,genBought));
	document.getElementById('genCost').innerHTML = nextCost;
	document.getElementById('genOwned').innerHTML = genOwned;
};

function accel(n) {
	if (points >= accelCost && accelOwned <= 9) {
		points -= accelCost;
		accelCost *= 2;
		accelOwned += 1;
		addMult += 100;
		document.getElementById('accelOwned').innerHTML = accelOwned;
		document.getElementById('accelCost').innerHTML = accelCost;
	} else if (points >= accelCost && accelOwned > 9){
		document.getElementById('accelCost').innerHTML = "ERROR";
		return;
	}
	document.getElementById('accelOwned').innerHTML = accelOwned;
};