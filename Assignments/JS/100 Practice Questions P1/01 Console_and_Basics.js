// Console & Basics
console.warn("Below is the solution to the section: Console & Basics\n");

// 1. Print "Hello JavaScript" in the console.
console.log("");
console.log("Hello JavaScript");


// 2. Print your name, age, and city using one console.log().

/* var myName = prompt("Pls enter your name")
var myAge = Number(prompt("Pls enter your age"))
var myCity = prompt("Pls enter your City")

console.log("Your name is ", myName, ". Your Age is ", myAge, " and you live in ", myCity, ' City'); */


// 3. Print a warning message using console.warn().
console.warn("This is Ashmit's code & it can harm you.\n Continue at your own risk ");
console.log("")

// 4. Print an error message using console.error().
try {
    console.log("Your name is ", Ashmit, ". Your Age is ", 20, " and you live in ", Kalyan, ' City');
}
catch (err) {
    console.error("Error Type:", err.name, "\n", " Error Message:", err.message)
}
console.log("This is an intentional error");


// 5. Use console.table() to display an array of 5 numbers.
console.table([100, 200, 300, 400, 500])


