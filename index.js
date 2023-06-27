//icecream = hot ||
console.log("Console is working :)")
document.getElementById("cart-no").innerHTML = 1
let amount = Number(document.getElementById("cart-no").innerHTML)



document.getElementById('hot1').onclick = function (){
	document.getElementById("cart").style.display = "block"
	document.getElementById("cart-no").innerHTML = amount
	amount += 1
}

document.getElementById('hot2').onclick = function (){
	document.getElementById("cart").style.display = "block"
	document.getElementById("cart-no").innerHTML = amount
	amount += 1
}

document.getElementById('hot3').onclick = function (){
	document.getElementById("cart").style.display = "block"
	document.getElementById("cart-no").innerHTML = amount
	amount += 1
}

document.getElementById('hot4').onclick = function (){
	document.getElementById("cart").style.display = "block"
	document.getElementById("cart-no").innerHTML = amount
	amount += 1
}

document.getElementById('hot5').onclick = function (){
	document.getElementById("cart").style.display = "block"
	document.getElementById("cart-no").innerHTML = amount
	amount += 1
}

document.getElementById('hot6').onclick = function (){
	document.getElementById("cart").style.display = "block"
	document.getElementById("cart-no").innerHTML = amount
	amount += 1
}






function more(){
	morecrm.style.display = "block"
	document.getElementById("crm-btn").style.display = "none"
}