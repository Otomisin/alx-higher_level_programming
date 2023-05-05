// #!/usr/bin/node
const num = Math.floor(Number(process.argv[2])); //  Number() to convert the first argument to a number. If the argument cannot be converted to a number, Number() returns NaN. it also rounds down the number to an integer.
console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`); // The $ sign and curly braces (${}) are used to create a template literal in JavaScrip.  isNaN(num) checks if num is true
