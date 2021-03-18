// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function lar(v,num){
  if(v%num===0){
    if(num<21){
      lar(v,num+1);
    }
    else{
    console.log(v);
    i=0;
    }
  }
}


function prob5(){
for(i=2;i>1;i++){
lar(i,2);
}
}

prob5();
