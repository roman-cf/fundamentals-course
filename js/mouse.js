// nur neue Nummer generieren bei Mouseover 
function mytest(){
	function getRandomInt1(max) {
	  return Math.floor(Math.random() * Math.floor(max));
	}

	function getRandomInt2(max) {
	  return Math.floor(Math.random() * Math.floor(max));
	}

document.getElementById("wert2").innerHTML = getRandomInt1(10000);
document.getElementById("wert1").innerHTML = getRandomInt2(10000);
}

//--------------------------------------------------------------------// nur neue Nummer generieren bei Mouseover 
//-------------random extrem kurz--------------
function mytest1(){  
document.getElementById("wert2").innerHTML = Math.floor(Math.random() * Math.floor(10000));
document.getElementById("wert1").innerHTML = Math.floor(Math.random() * Math.floor(10000));
}
//--------------------------------------------------------------------
// Nummern generieren und berechnen
function mytest2(){
	function getRandomInt1(max) {
	  return Math.floor(Math.random() * Math.floor(max));
	}
	zufall1 = getRandomInt1(10000)

	function getRandomInt2(max) {
	  return Math.floor(Math.random() * Math.floor(max));
	}
	zufall2 = getRandomInt2(10000)
		if(zufall1<zufall2) {diff=zufall2-zufall1; mess="untere Zahl ist kleiner"}
		else{diff=zufall1-zufall2; mess="obere Zahl ist kleiner"}

document.getElementById("wert12").innerHTML = zufall1;
document.getElementById("wert11").innerHTML = zufall2;
document.getElementById("wert13").innerHTML = "Die Differenz beträgt: "+ diff + " und "+ mess;

}
//--------------------------------------------------------------------
function mytest3(){
	document.querySelector(".topnav").style.backgroundColor= "red";
}
//---------------------------------------------------------------------
function mytest4(){
	var text9 ="";
	var i;
	for (i=0; i<3; i++){
		text9=(i+ " " +Math.floor(Math.random() * Math.floor(256)))
		console.log(text9)
	}

	//document.getElementById("wert23").innerHTML = text9

}
//-----------------------------------------------------------------------
function mytest5(){
	rgb1 = Math.floor(Math.random() * Math.floor(256));
	rgb2 = Math.floor(Math.random() * Math.floor(256));
	rgb3 = Math.floor(Math.random() * Math.floor(256));

	arrrgb = [rgb1,rgb2,rgb3]
	console.log(arrrgb)
	document.querySelector(".topnav").style.backgroundColor= "rgb("+rgb1+","+rgb2+","+rgb3+")";

}


