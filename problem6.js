//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
function prob6(n){
var sumofsq=0,sum=0;
	for(i=1;i<n+1;i++){
		sumofsq = sumofsq + (i*i);
		sum = sum+i;
	}
	console.log((sum*sum)-sumofsq);
}

prob6(100);