/*

console.log("File is running");

// npm init -y initilizes my file as a script package

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

*/

// npm init -y

// npm install express
const colors = require('colors');
const validator = require('validator');
const express = require('express'); // importing express package
const morgan = require('morgan');

const app = express(); // creates express application

app.use(express.static('public'));

app.use(morgan('dev'));

app.get("/about", (request, response) =>
{
    response.sendFile(__dirname + "/views/about-me.html")
});

// exercise 2:
// Create a /homepage route
// for this route if the request is sent a file should be sent back
// the file should be in the views folder called home.html
// it should contain an h1 that says welcome to my site [NAME]

app.get("/homepage", (request, response) =>
{
    response.sendFile(__dirname + "/views/homepage.html")
});

// does not work
app.get("/num", (request, response) =>
{
    response.send(`<h1>Number: ${request.params}</h1>`)
});

app.listen(3000, () =>
{
    console.log('Listening on port 3000')
});