debugger;

function pgcd(num1,num2){
    
    while(num1%num2!==0){
        let r1 = num1%num2;
        num1=num2;
        let reste = num2%r1;
        num2=reste;

    };
    
}
console.log(pgcd(1078,322))
