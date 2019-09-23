var age = document.getElementById("idage")
var hp = document.getElementById("idhp")
var price = document.getElementById("idprice")

btn.addEventListener("click", function(e) {
	console.log(e.target)
})

//event.preventDefault()


function submitData() {
  age = document.forms["abfrage"]["number_age"].value;
  hp = document.forms["abfrage"]["number_hp"].value;
  price = document.forms["abfrage"]["number_price"].value;
 	
 	inprice = age*((hp/2)+(price/1000)) 

 	message = document.getElementById("wert1");
 	try {
 		if(age==0,hp==0,price==0)throw"Keine Eingabe";
 		if(age<12)throw"Fahrzeug zu alt";
 		if(hp>500)throw"Zu viel PS";
 	}
 	catch(err) {
 		message.innerHTML= "Input " + err;

 	}

	console.log(inprice)
	document.getElementById("wert1").innerHTML = "hallo"
}
