function prob4(){
	l=0
for(i = 100; i <= 999; i++){
	for(j = 100; j <= 999; j++){
		if(i*j == (i*j).toString().split('').reverse().join('')){
			k=i*j ;
			if(k>l){l=k}

		}
	}
}

console.log(l);
}

prob4();