console.log("File is running");

// npm init initilizes my file as a script package

// npm install name-of-package

// npm install == npm i

// to import package

const colors = require('colors');
console.log(colors.rainbow("Hello"));

const validator = require('validator');

if(validator.isEmail("ff@gmail.com"))
{
    console.log(colors.green("Is an email"));
}
else
{
    console.log(colors.red("Not an email"));
}