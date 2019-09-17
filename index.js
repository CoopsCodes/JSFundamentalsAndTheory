//! Statements

//* A group of words, numbers, and operators that performs a specific task is a statement.

//* The a and b are 'variables', while the number 2 is a 'literal value'.
//* While the '=' and '*' are called 'operators'.
//* These make up statements.

a = b * 2;

//! Expressions

//* Breaking down the above example further.
//* '2' is a 'literal value expression'.
//* b is a 'variable expression', which means to retrieve its current value.
//* 'b * 2' is an 'arithmetic expression', which means to do the multiplication. alternatively also called a 'general expression'.
//* 'a = b * 2' is an 'assignment expression', which means so assign the result of 'b * 2' to the variable 'a'.

//! Types

//* Data types such as Numbers, Strings, Booleans etc are known as 'primitive' values.
//* As data types aren't declared they can be.
//! Coerced

//* coercion used in the below example is where the variable 'a' is a String, but in variable 'b' it is converted into a number by the Number function.

var a = "42";
var b = Number(a);
console.log(a); // "42"
console.log(b); // 42

//! Variables
//* Some languages that enforce Data Types are Static Typed, where JS is Dynamically Typed.

var amount = 100.0;
multiplication = amount * 2;
console.log(multiplication);

convertToString = "$" + String(multiplication);
console.log(convertToString);

//! Blocks
//* A block of code encompasses a block of code within { Curly Braces } as represented below.

{
  cost = amount * 2;
  console.log(cost); // 199.98
}

//! Conditionals
//*
