/*Billing details validation*/
function paymentsDetails(){
	var fname = document.getElementById("fname").value; 
	var lname = document.getElementById("lname").value;
	var houseno = document.getElementById("houseno").value;
	var streetaddress = document.getElementById("streetaddress").value;
	var province = document.getElementById("province").value;
	var district = document.getElementById("district").value;
	var postcode = document.getElementById("postcode").value;
	var phoneno1 = document.getElementById("phoneno1").value;
	var phoneno2 = document.getElementById("phoneno2").value;
	var email = document.getElementById("email").value;
	var tandc = document.getElementById("tandc");

	if(fname==""||lname==""||houseno==""||streetaddress==""||postcode==""||phoneno1==""||phoneno2==""||email==""||tandc.checked==false||province==""||district==""){
		alert("Check all the fields");
	}

	else{
		alert("Order placed successfully.");
		document.location="#bottom-main";
	}
}

/*Order review validation*/
function cart(){
	var item1Qty = document.getElementById("qty-1").value;
	var item2Qty = document.getElementById("qty-2").value;
	var item3Qty = document.getElementById("qty-3").value;
	
	var item1Sub = item1Qty*5000;
	var item2Sub = item2Qty*3000;
	var item3Sub = item3Qty*2000;

	document.getElementById("text-1").value = item1Sub;
	document.getElementById("text-2").value = item2Sub;
	document.getElementById("text-3").value = item3Sub;

	var total = item1Sub + item2Sub + item3Sub;
	document.getElementById("tot").value = total;
}

/*Payment details validation*/
function payNowFunction(){
	if(document.getElementById("credit-card").checked){
		var cardnumber = document.getElementById("card-number").value;
		var cardholder = document.getElementById("holder-name").value;
		var securitycode = document.getElementById("security-code").value;
		var month = document.getElementById("month").value;
		var year = document.getElementById("year").value;

		if(cardnumber==""||cardholder==""||securitycode==""||month=="MM"||year=="YY"){
			alert("Fill all the card details");
		} else{
			alert("Payment is successfull.Thank you for shopping with us")
		}
	}
}

/*Order cancel button*/ 
function paymentCancel(){
	alert("Order Canceled");
}

/*proceed button vaidation*/
function proceedFunction(){
	if(document.getElementById("cashondelivery").checked)
	alert("Thank you for shopping with us");
}