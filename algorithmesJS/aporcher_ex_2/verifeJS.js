debugger;

let day = 12
let month = "octobre"
let year = 1955

function checkDate(day,month,year){
    const validMonths = ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"];
        const validday =["31","29","31","30","31","30","31","31","30","31","30","31"]
        month=month.toUpperCase();
        if (day>=1 && day<=31) {
            for (i=0; i<validMonths.length; i++ ){
                if ((month == validMonths[i]) && day <= validday[i]) {
                    if (year>=1000 && year<=9999){
                        if ((month == "FEVRIER") && ((year%4!==0 || year%100==0) && (year%400!==0)) && day>28){
                            return false
                        }
                        else{
                            return true
                        }
                    }
                    else{
                        return false
                    }
                }
            }
        }
        else {
            return false;
        }
    }
