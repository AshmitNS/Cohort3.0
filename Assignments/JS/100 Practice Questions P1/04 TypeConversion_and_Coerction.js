console.log("");
console.warn("Below is the solution to the section: TypeConversion_and_Coerction \n");

// Ans 1
var a = "50"
var b = Number(a)
console.log(b, typeof (b));



// Ans 2
var c = 100
var d = String(c)
console.log(d, typeof (d));



// Ans 3
var e = "true"
var f = Boolean(e)
console.log(f, typeof (f));
console.log("");


//Ans 4
console.log("\"5\" + 2 =", "5" + 2)
console.log("\"5\" - 2 =", "5" - 2)
console.log("true + 1 =", true + 1)

// Ans 5.1
console.log("");

var test_str = "123abc"
var test_num = Number(test_str)
console.log(test_num);


// Ans 5.2
console.log(parseInt("483 marks were scored by Ashmit in Std 10th"))
