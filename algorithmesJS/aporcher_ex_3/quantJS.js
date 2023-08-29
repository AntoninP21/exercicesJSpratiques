debugger;
    function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function checkDate(day, month, year) {
    const validMonths = [
        "JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN",

        "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"
    ];
    const validDays = [

        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31

    ];

    month = month.toUpperCase();

    const monthIndex = validMonths.indexOf(month);

    if (monthIndex !== -1) {

        const maxDay = validDays[monthIndex];

        if (month === "FEVRIER" && isLeapYear(year)) {

           let maxDay = 29;
        }
        if (day >= 1 && day <= maxDay) {

            return day;
        }
    }
    return -1;
}