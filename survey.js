// const ac = new AbortController();
// const signal = ac.signal;

// rl.question('What is your favorite food? ', { signal }, (answer) => {
//   console.log(`Oh, so your favorite food is ${answer}`);
// });

// signal.addEventListener('abort', () => {
//   console.log('The food question timed out');
// }, { once: true });

// setTimeout(() => ac.abort(), 10000);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hello! My name is', (answer) => {
  // TODO: Log the answer in a database
  rl.question('In my spare time you can find me ', (answer) => {
    // TODO: Log the answer in a database
    rl.question('Otherwise I\'ll probably be ', (answer) => {
      // TODO: Log the answer in a database
      rl.question('I enjoy spending time with ', (answer) => {
        // TODO: Log the answer in a database
        rl.question('Those closest to me would say my best quality is my ', (answer) => {
          // TODO: Log the answer in a database
          rl.question('My pet peeves are ', (answer) => {
            // TODO: Log the answer in a database
            rl.question('I can\'t live without ', (answer) => {
              // TODO: Log the answer in a database
            
            rl.close();
            })
          })
        })
      })
    })
  })
});