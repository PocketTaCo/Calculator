var output;
function calculator(x, y, z) {
	if(x=="+") {
		output = y+z;
	}else if(x=="-"){
		output = y-z
	}else if(x=="*"){
		output = y*z
	}else if(x=="/"){
		output = y/z
	}else {
			output = "why are you adding the wrong number my guy????";
	}
}

calculator("*", 1473, 3346);

console.log(output);