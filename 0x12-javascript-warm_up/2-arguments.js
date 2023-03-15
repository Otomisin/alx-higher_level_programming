#!/usr/bin/node
const args = process.argv.slice(2) // we use process.argv.slice(2) to get the arguments passed to the script and store them in the args array. We use slice(2) to exclude the first two arguments, which are the path to the Node.js executable and the path to the script file.

// Check the number of arguments passed
if (args.length === 0) {
  console.log('No argument')
} else if (args.length === 1) {
  console.log('Argument found')
} else {
  console.log('Arguments found')
}
