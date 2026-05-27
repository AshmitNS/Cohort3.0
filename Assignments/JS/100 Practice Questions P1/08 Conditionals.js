console.log("");
console.warn("Below is the solution to the section: Conditionals \n");

// 1. Number is positive or negative
/* var input1 = Number(prompt("Pls enter number"))
switch (input1) {
    case isNaN(input1):
        console.log("Pls enter a valid Number");
        break;

    case 0:
        console.log("Number is 0, neither positive nor negative");
        break;

    case input1 > 0:
        console.log("Number is positive");
        break;

    case input1 < 0:
        console.log("Number is negative");
        break;

    default:
        console.log("This is default message");
} */


// 2. Number is even or odd
/* var input2 = Number(prompt("Pls enter number"));

// if (input2 != "" && Number.isInteger(input2)) {This is removed bcz if input is 0, then too this block runs

if (Number.isInteger(input2)) {
    input2 % 2 == 0 ? console.log("Number is even") : console.log("Number is Odd")
}

else {
    console.log("Pls enter a valid integer");
}
 */

// 3. Check whether a person is eligible to vote
/* var age = Number(prompt("Pls enter age"));
// if (Number.isNaN(age) || age === "") { This is removed bcz if input is 0, then too this block runs
if (Number.isNaN(age)) {
    console.log("Pls enter a valid age");
}
else {
    age >= 18 ? console.log("Eligible to vote") : console.log("Not Eligible to vote");
} */


// 4. Largest Among 2 numbers
/* var num_1 = Number(prompt("Pls enter a Number"))
var num_2 = Number(prompt("Pls enter another Number"))


if (isNaN(num_1) || isNaN(num_2)) {
    console.log("Enter a valid input")
}
else if (num_1 > num_2 && num_1 != num_2) {
    console.log(num_1, "is larger");
}
else if (num_2 > num_1 && num_1 != num_2) {
    console.log(num_2, "is larger")
}
else {
    console.log("Both Numbers are equal!!")
} */


// 5. Find the largest among three numbers
/* var num_5_1 = Number(prompt("Pls enter 1 out of 3 numbers"));
var num_5_2 = Number(prompt("Pls enter 2 out of 3 numbers"));
var num_5_3 = Number(prompt("Pls enter 3 out of 3 numbers"));


if (isNaN(num_5_1) || isNaN(num_5_2) || isNaN(num_5_3)) {
    console.log("Pls enter a valid input")
}
else if (num_5_1 == num_5_2 && num_5_2 == num_5_3) {
    console.log("All three numbers are equal!!!")
}
else if (num_5_1 >= num_5_2 && num_5_2 >= num_5_3) {
    console.log(`${num_5_1} is the largest number among ${num_5_1}, ${num_5_2} and ${num_5_3}`);
}
else if (num_5_1 >= num_5_2 && num_5_2 <= num_5_3 && num_5_3 <= num_5_1) {
    console.log(`${num_5_1} is the largest number among ${num_5_1}, ${num_5_2} and ${num_5_3}`)
}
else if (num_5_1 <= num_5_2 && num_5_2 >= num_5_3) {
    console.log(`${num_5_2} is the largest number among ${num_5_1}, ${num_5_2} and ${num_5_3}`)
}
else {
    console.log(`${num_5_3} is the largest number among ${num_5_1}, ${num_5_2} and ${num_5_3}`)
} */

// 6. Check whether a year is a leap year.

// 7. Check whether a number is divisible by both 3 and 5.
/* let num_7 = Number(prompt("Pls enter a Number"))
if (isNaN(num_7)) {
    console.log("Pls enter a valid Number");

}
else if (num_7 == 0) {
    console.log("The number is 0!!!");
}
else {
    num_7 % 3 == 0 && num_7 % 5 == 0 ? console.log("The number is divisible by both 3 and 5") : console.log("The number is not divisible by both 3 and 5");
} */

// 8. Create a simple grading system: 90+ -> A, 75+ -> B, 50+ -> C, < 50 -> Fail 
/* let num_8 = Number(prompt("Pls enter your Marks"))

if (isNaN(num_8)) {
    console.log("Pls enter a valid Number");
}
else if (num_8 >= 90) {
    console.log("You have scored A Grade")
}
else if (num_8 >= 75) {
    console.log("You have scored B Grade")
}
else if (num_8 >= 50) {
    console.log("You have scored C Grade");
}
else {
    console.log("You have failed the exam");
} */

// 9. Check whether a character is a vowel or consonant
/* vowels = "aeiou"
consonants = "bcdfghjklmnpqrstvwxyz"

char_9 = prompt("Pls enter a character")

if (!isNaN(Number(char_9))) {
    console.log("Pls enter a character")
}
else if (char_9.length > 1) {
    console.log("Pls enter single character");
}
else if (vowels.includes(char_9.toLowerCase())) {
    console.log(`${char_9} is a vowel`);
}
else if (consonants.includes(char_9.toLowerCase())) {
    console.log(`${char_9} is a consonant`);
}
else {
    console.log(`${char_9} is a not a vowel nor a consonant`)
}
 */


// 10. Create a calculator using switch statement
/* let input_10_1 = prompt(`Pls enter operation:\n+    for Addition\n-    for Subtraction\n/    for Divison\n*    for Multiplication`)
let input_10_2 = Number(prompt("Pls enter 1st Number"))
let input_10_3 = Number(prompt("Pls enter 2nd Number"))

if (isNaN(input_10_2) || isNaN(input_10_3)) {
    console.log("Invalid Input")
}

else {
    switch (input_10_1) {
        case '+':
            console.log("The sum is", input_10_2 + input_10_3)
            break;
        case '-':
            console.log(input_10_2 - input_10_3)
            break
        case '/':
            console.log(input_10_2 / input_10_3)
            break;
        case '*':
            console.log(input_10_2 * input_10_3)
            break;
        default:
            console.log("Invalid Input")
            break;
    }
} */

// 11. Print the day name based on a number (1–7)
/* let input_11 = Number(prompt("Pls enter a number between 1 - 7"))

if (isNaN(input_11)) {
    console.log("Pls enter a Number");
}
else {
    switch (input_11) {
        case 1:
            console.log("Sunday")
            break;
        case 2:
            console.log("Monday")
            break;
        case 3:
            console.log("Tuesday")
            break;
        case 4:
            console.log("Wednesday")
            break;
        case 5:
            console.log("Thursday")
            break;
        case 6:
            console.log("Friday")
            break;
        case 7:
            console.log("Saturday")
            break;

        default:
            console.log("Invalid Input")
            break;
    }
} */

// 12. Check whether a username is "admin" and password is "1234"
/* let input_11_1 = prompt("Pls enter Username")
let input_11_2 = Number(prompt("Pls enter password"))

input_11_1 === "admin" && input_11_2 === 1234 ? console.log("Welcome Admin. Logging In...") : console.log("Wrong Username or Password")
 */