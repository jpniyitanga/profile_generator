const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable:) ', (name) => {
rl.question('What\'s an activity you like doing? ', (activity) => {
rl.question('What do you listen to while doing that? ', (song) => {
rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) ', (meal) => { 
rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
rl.question('Which sport is your absolute favourite? ', (sport) => {
rl.question('What is your superpower? ', (superpower) => {
  console.log(`Thank you for your valuable feedback: ${name}, ${activity}, ${song}, ${meal}, ${food}, ${sport}, ${superpower}`);

  rl.close();
});
});
});
});
});
});
});

