// Question no 1:

/*
let num1= parseInt(prompt("Enter first number"));
let num2= parseInt(prompt("Enter second number"));

let sum= num1 + num2

document.write("Addition <br><br>")
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");


// Question no 2: (Subtraction)

let number1= parseInt(prompt("Enter first number"));
let number2= parseInt(prompt("Enter second number"));

let sub= number1 - number2

document.write("Subtraction <br><br>")
document.write("Sum of " + number1 + " and " + number2 + " is " + sub + "<br><br>");


// Question no 2: (Multiplication)


let num01= parseInt(prompt("Enter first number"));
let num02= parseInt(prompt("Enter second number"));

let multiply= num01 * num02

document.write("Multiplication <br><br>")
document.write("Multiplication of " + num01 + " and " + num02 + " is " + multiply + "<br><br>");


// Question no 2: (Division)

let firstNum= parseInt(prompt("Enter first number"));
let secondNum= parseInt(prompt("Enter second number"));

let Division= firstNum / secondNum

document.write("Division <br><br>")
document.write("Division of " + firstNum + " and " + secondNum + " is " + Division + "<br><br>");


// Question no 2: (Modulus)

let firstNumber= parseInt(prompt("Enter first number"));
let secondNumber= parseInt(prompt("Enter second number"));

let Modulus= firstNumber % secondNumber

document.write("Modulus <br><br>")
document.write("Modulus of " + firstNumber + " and " + secondNumber + " is " + Modulus + "<br><br>");
*/


// Question no 3: 


// a. Declare a variable

var number;

// b. Show the value of variable after declaration

document.write("<p>Value after variable declaration is: " + number + "</p>");
    
// c. Initialize the variable with some number

number = 5;    

//d. Show the initial value of the variable

document.write("<p>Initial value: " + number + "</p>");

//  e. Increment the variable

number++;

// f. Show the value after increment

document.write("<p>Value after increment is: " + number + "</p>");
    

// g. Add 7 to the variable

number += 7;
    
// h. Show the value after addition

document.write("<p>Value after addition is: " + number + "</p>");


// i. Decrement the variable

number--;

// j. Show the value after decrement

document.write("<p>Value after decrement is: " + number + "</p>");


// k. Show the remainder after dividing the variable's value by 3

var remainder = number % 3;


// l. Output the remainder

document.write("<p>The remainder is: " + remainder + "</p>");


// Question no 4: 

var ticketPrice= 600

var noOfTickets= 5

var totalCost= ticketPrice * noOfTickets

document.write("Total Cost to buy " + noOfTickets + " tickets to a movie is " + totalCost + "PKR");


// Question no 5:


var number= 5

document.write("<h2> Table of " + number + "</h2>");

for (var i = 1; i <=10; i++) {

    document.write(number + "x" + i + "=" + (number*i) + "<br>");

}

document.write("<br><br>")

// Question no 6: (Convert into to Fahrenheit)


var celsiusTemperature= 25

var fahrenheit = (( celsiusTemperature * (9/5))+32);

document.write(celsiusTemperature + "°C is " + fahrenheit + "°F" );

document.write("<br><br>")
// Question no 6: (Convert into to Celsius temperature)

var fahrenheitTemperature = 70

var Celsius = ((fahrenheitTemperature - 32) * (5/9));

document.write(fahrenheitTemperature + "°F is " + Celsius + "°C");


document.write("<br><br>")

// Question no 7:

var priceItem1 = 650

var priceItem2 = 100

var quantityItem1 = 3

var quantityItem2 = 7

var shippingCharges = 100

document.write("<h2> Shopping Cart</h2>");


document.write("Price of Item 1 is " + priceItem1 + "<br>");
document.write("Quantity of Item 1 is " + quantityItem1 + "<br>");
document.write("Price of Item 2 is " + priceItem2 + "<br>");
document.write("Quantity of Item 2 is " + quantityItem2 + "<br>");
document.write("Shipping charges " + shippingCharges + "<br><br>");

document.write("Total Cost of your order is " + ((priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges));


// Question no 8:

var totalMarks = 980
var obtainedMarks = 804

var percentage = (obtainedMarks/totalMarks) * 100

document.write("<h2>Marks Sheet</h2>");

document.write("Total Marks:" + totalMarks + "<br>");
document.write("Marks Obtained:" + obtainedMarks + "<br>");
document.write("Percentage:" + percentage + "<br>");


// Question no 9:

var dollar = 10;

var saudiRiyal = 25;

var dollarToRs = (104.80);

var riyalToRs = (28);

var totalPKR = ((dollarToRs * dollar) + (riyalToRs * saudiRiyal));

document.write("<h2> Currency in PKR </h2>");

document.write("Total Currency in PKR: " + totalPKR);

document.write("<br><br>")

// Question no 10:

var oneNum = 10;

//a: b : c

oneNum = (((oneNum + 5) * 10 ) / 2 )


document.write(oneNum);


document.write("<br><br>")
// Question no 11:

 var currentYear = 2024;

 var birthYear = 1995;

 var age = (currentYear - birthYear);

 document.write("<h2>Age Calculator</h2>");

 document.write("Current Year: " + currentYear + "<br>");
 document.write("Birth Year: " + birthYear + "<br>");
 document.write("Your Age Is: " + age + "<br>");



 document.write("<br><br>")
 // Question no 12:
 
var radius = 20;

var circumference = ((2 * 3.142) * radius);

var area = ((3.142 * radius) * 2);

document.write("<h2> The Geometrizer </h2>");

document.write("Radius of a Circle: " + radius + "<br>");
document.write("The Circumference is: " + circumference + "<br>");
document.write("The Area Is: " + area + "<br>");


document.write("<br><br>")
 // Question no 13:

 // a:

 var favSnack = "Chocolate Chip";

 // b:

 var currentAge = 15;

 // c:

 var maxAge = 65;

 // d:

 var perDayAmount = 3;

 // e:

 var remainingAge = (maxAge - currentAge);

 var remainingDays = (remainingAge * 365);

 var totalAmount = (remainingDays * perDayAmount);

 document.write("<h2>The Lifetime Supply Calculator</h2>")

 document.write("Favourite Snack: " + favSnack + "<br>");

 document.write("Current Age: " + currentAge + "<br>");

 document.write("Estimated Maximum Age: " + maxAge + "<br>");

 document.write("Amount Of Snack Per Day: " + perDayAmount + "<br>");

 document.write("You Will need " + totalAmount +" " + favSnack + " to last You until the ripe old age of " + maxAge + "<br>");

 
