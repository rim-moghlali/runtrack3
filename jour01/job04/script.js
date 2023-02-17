var bissextile = (year) => { 
    let date = new Date(year,1,29);
    let leap = date.getDate() === 29 ? true : false;
    return leap;
};

var annee = 2023;
console.log(`${annee} is a leap year ?`, bissextile(annee));
