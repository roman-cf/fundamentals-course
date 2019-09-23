//ex1
function getPrice(a,b,c)
{
	return a+b+c
}
var zahl1 = 2
var zahl2 = 3
var zahl3 = 7

document.getElementById("summe").innerHTML = getPrice(zahl1,zahl2,zahl3) + " ist das Ergebnis";
console.log(getPrice(zahl1,zahl2,zahl3))

//ex2
for (i = 1; i < 10; i++) {
console.log(i);	
document.getElementById("zahl").innerHTML = i + " Zahlen ist der Loop lang";
}