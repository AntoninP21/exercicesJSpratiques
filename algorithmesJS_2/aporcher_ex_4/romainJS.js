debugger;

function romanNumeral(num){
    let tabrom=[[4000,"MMMM"], [3000,"MMM"],[2000,"MM"],[1000,"M"],[900,"CM"],[500,"D"],[400,"DC"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]]
    let romain=""
    if(num>=0 && num<5000){
        
        for(i=0;i<16;i++){
            
            if(num >=tabrom[i][0]){
                num=num-tabrom[i][0];    
                romain=romain+tabrom[i][1];
        }
    }
}
return romain
}
console.log(romanNumeral(3501))