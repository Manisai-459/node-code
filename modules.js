const amount = 12;
if(amount < 10)
    console.log("Small number");
else
    console.log("Large Number");
console.log("Hey its my first node app");

// GLOBALS - NO WINDOW !!! we cannot access window query selector
// __dirname
// __filrname
// require - bring in a module (package), it returns an object, so you can use the properties of that object
// const fs = require('fs'); // file system package
// console.log(__dirname);
// console.log(__filename);
// setInterval(()=>{
//     console.log("Hello World!");
// },1000);
// modules - encapusulated code
const names = require('./4-name');
const sayHi = require('./5-utils');
const mani = require('./6-alternativesyntax');
console.log(names)
console.log(sayHi)
console.log(mani)
sayHi('nana');
sayHi(names.john);
sayHi(names.peter);
console.log(mani.items)
console.log(mani.mani.name)
// every file in a node is a module  