const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hello! My name is', (name) => {
  // TODO: Log the answer in a database
  rl.question('In my spare time you can find me ', (hobby) => {
    // TODO: Log the answer in a database
    rl.question('Otherwise I\'ll probably be ', (hobby2) => {
      // TODO: Log the answer in a database
      rl.question('I enjoy spending time with ', (bestCompany) => {
        // TODO: Log the answer in a database
        rl.question('Those closest to me would say my best quality is my ', (quality) => {
          // TODO: Log the answer in a database
          rl.question('My pet peeves are ', (petPeeves) => {
            // TODO: Log the answer in a database
            rl.question('I can\'t live without ', (mustHave) => {
              // TODO: Log the answer in a database
              console.log(`Hello! My name is ${name}`);
              console.log(`In my spare time you can find me ${hobby}`);
              console.log(`Otherwise I'll probably be ${hobby2}`);
              console.log(`I enjoy spending time with ${bestCompany}`);
              console.log(`Those closest to me would say my best quality is my ${quality}`);
              console.log(`My pet peeves are ${petPeeves}`);
              console.log(`I can't live without ${mustHave}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});