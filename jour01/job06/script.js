function fizzbuzz(){
    for (let nombre = 1; nombre <= 151; nombre++) {
        // console.log(nombre);
        if ((nombre % 3 == 0) && (nombre % 5 == 0)) {
            console.log("FizzBuzz");
        } else if (nombre % 3 == 0) {
            console.log("Fizz");
        } else if (nombre % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(nombre);
        }
    }
}
fizzbuzz();
