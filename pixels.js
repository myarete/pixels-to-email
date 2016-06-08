var getter   = require('pixel-getter');
var sizeOf   = require('image-size');
var _        = require('lodash');
// TODO: Include all assets in folder and check for sizes for placement.

var primaryColor = [];
var otherColors  = [];
var imageWidth   = '';
var imageHeight  = '';

/**
 * Returns a promise with array of all pixels from given image.
 * @param {string} target - Same param passed in start().
 */
this.getAllPixels = target => {
    // TODO: Do something with dimensions?
    // var dimensions = sizeOf(`./${target}`);

    return new Promise((resolve, reject) => {
        getter.get(`${ target }`, (err, pixels) => {
            if (err) {
                // TODO: Make user not have to exit program to re-enter
                console.log('File not found. Be sure the extension is included.');
                reject(err);
                process.exit();
            }
            // TODO: Change code so that it resolves with a single array instead of [[]]
            resolve(pixels[0]);
        });
    });
};

this.getPixelData = pixels => {
    console.log(`Scanning colors...`);
    var start = Date.now();
    var colors = [];

    // Iterate
    for (var i = 0; i < pixels.length; i++) {
        var color = `${ pixels[i].r }, ${ pixels[i].g }, ${ pixels[i].b }`;

        if (!_.find(colors, { color : color })) {
            // If the value doesn't exist in the colors array, add it with a count property
            colors.push({ color : color, count : 0 });
        } else {
            // If it does exist, add to the count
            _.find(colors, { color : color }).count++;
        }
    };

    var primaryColor = '';
    var counter = 0;
    console.log(`Finding most used color...`);
    for (var i = 0; i < colors.length; i++) {
       /**
        *  If the count value of the current color object is
        *  greater than the counter variable, make that count the
        *  new counter value and reassign correlating color property to
        *  the primaryColor variable.
        */
        if (colors[i].count > counter) {
            counter = colors[i].count;
            primaryColor = colors[i].color;
        }
    }

    // Done
    return new Promise((resolve, reject) => {
        var end = Date.now();
        console.log(`Finished (${ end - start }).`);
        console.log(`Primary color set to ${ primaryColor } (${ counter } occurences).`);
        resolve({ primaryColor: primaryColor, pixels: pixels });
    });
};

// TODO: Check for avg pixel color then change 255 values to match (or track all color changes?)
// TODO: Check img dimensions for grid and determine how many pixels per line

/**
 * Loads up the declared arrays with whatever value
 * @param {string} target - Same param passed in start().
 */
this.run = target => {
    return new Promise((resolve, reject) => {
        this.getAllPixels(target)
            .then(pixels => {
                resolve(this.getPixelData(pixels));
            });
    });
}

module.exports = this.run;
