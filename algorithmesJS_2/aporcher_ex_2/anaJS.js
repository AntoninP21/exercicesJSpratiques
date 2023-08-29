debugger;

function isAnagramic(mot1,mot2){
    let tab1 = mot1.split("");
    let tab1Final = tab1.sort().join("");

    let tab2 = mot2.split("");
    let tab2Final = tab2.sort().join("");

    if (tab1Final==tab2Final){
        return true
    }
    else{
        return false
    }

}
console.log(isAnagramic("niche","chien"))