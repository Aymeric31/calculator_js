var touches = document.querySelectorAll("#calculatrice span");
var operateur = ["+", "-", "x", "÷"];
var decimalajout = false;

for (var i = 0; i < touches.length; i++) {
	touches[i].onclick = function(e) {
		var input = document.querySelector(".screen");
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		if(btnVal == "C") {
			input.innerHTML = "";
			decimalajout = false;
		}
			else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
}
}



