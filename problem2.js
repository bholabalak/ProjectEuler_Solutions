// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
function prob2(){
	v1 = 0;
	v2 = 1;
	sum = 0;
	c=0;
	for(i=0;c<4000000;i++){
		c=v1+v2;
		v1=v2;
		v2=c;

		if(c%2===0){
			sum = sum +c;
		}
	}
	console.log(sum);
}

prob2();