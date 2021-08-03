// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
function prob1(n){
	sum=0;
        sum=(3*(n/3)*((n/3)+1)/2)+(5*(n/5)*((n/5)+1)/2)-(15*(n/15)*((n/15)+1)/2);
        console.log(sum);
}

prob1(10);
