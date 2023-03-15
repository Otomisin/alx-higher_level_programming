#!/usr/bin/node
const args = process.argv.slice(2);

if (args.length >= 2) { 
  console.log(`${args[0]} is ${args[1]}`); //This checks if the length of the args array is greater than or equal to 2 (args.length >= 2). If it is, we use string interpolation to print the first two arguments in the specified format using console.log(${args[0]} is ${args[1]}).
} else {
  console.log("Not enough arguments");
}