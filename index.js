var readline        = require('readline');
var getPixelData    = require('./pixels.js');
var getData         = require('./data.js');

// Terminal Env
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

/**
 * Gets data and instantiates run().
 * @param {string} targetName - User inputted file name.
 */
rl.question('Name of your file? ', target => {
    getPixelData(target).then(pixelData => {
        getData(pixelData);
    });
});
