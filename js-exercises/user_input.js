var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("How's it going? ", function(answer) {
  console.log("Awesomesauce:", answer);
  rl.close();
});

console.log('NARF');

// answer = await rl.question('Name?')