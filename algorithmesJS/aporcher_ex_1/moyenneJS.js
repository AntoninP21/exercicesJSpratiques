debugger;
let table = [15,14,16,2,10,11];

function calculateAverage(table) {
    let x=0;
    let moyenne=0;
    for (i=0; i<table.length; i++){
        x=x+table[i];
    }
    moyenne=x/table.length
    return moyenne
}
console.log(calculateAverage(table))
