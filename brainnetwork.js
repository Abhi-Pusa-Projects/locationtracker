console.log("this is the brain network");

const brain = require('brain.js');
const net = new brain.NeuralNetwork();

// [ R, G, B ]
net.train([
  // Red (255, 0, 0)
  { input: [ 1, 0, 0 ], output: { light: 1 } },
  // Yellow (255, 255, 0)
  { input: [ 1, 1, 0 ], output: { dark: 1 } },
  // Dark grey (51, 51, 51)
  { input: [ 0.2, 0.2, 0.2 ], output: { light: 1 } }
]);

// Dark Blue (0, 0, 128)
console.log(net.run([ 0, 0, 0.5 ]));
// {"light":0.9852000787823519,"dark":0.014587141745708729}

//natural la

const classifier = new require('natural-brain').BrainJSClassifier();

classifier.addDocument('my unit-tests failed.', 'software');
classifier.addDocument('tried the program, but it was buggy.', 'software');
classifier.addDocument('tomorrow we will do standup.', 'meeting');
classifier.addDocument('can you play some new music?', 'music');

classifier.train();

console.log(classifier.classify('did the tests pass?')); // -> software
console.log(classifier.classify('Lets meet tomorrow?')); // -> meeting
console.log(classifier.classify('Can you play some stuff?')); // -> music