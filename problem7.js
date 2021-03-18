// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?


function prob7(n){
	p=0,v1=0;
	for(i=2;i>1;i++){
	v=0;
		for(j=2;j<i+1;j++){
			if(i%j===0){
				v++;
			}
		}
		if(v===1){
			p++;
			
		}	
		if(p===n){
			v1=i;
			break;
		}
	}
	return v1;
}

console.log(prob7(10001));