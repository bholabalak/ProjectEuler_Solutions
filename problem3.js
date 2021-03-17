// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?
function prime(num){
	for(i=2;i<num/2;i++){
		if(num%i===0){
			return undefined;
		}
	}
	return num;
}

function prob3(){
	v=600851475143;
	for(x=2;x<v/8;x++){
		if(v%x===0){
			if(prime(x)){
			c=x;
			
			}
		}
	}
		console.log(c);
}

prob3();