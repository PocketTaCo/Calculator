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
	}
}

calculator("+", 45, 100);
calculator("-", 45, 100);
calculator("*", 45, 100);
calculator("/", 45, 100);

console.log(output);