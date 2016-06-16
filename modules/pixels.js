var getter = require('pixel-getter');
var sizeOf = require('image-size');
var _      = require('lodash');
// TODO: Include all assets in folder and check for sizes for placement.

var primaryColor = new Array();
var otherColors  = new Array();
var imageWidth   = new String();
var imageHeight  = new String();
var dimensions   = new Object();

/**
 * Returns a promise with array of all pixels from given image.
 * @param {string} target - Same param passed in start().
 */
this.getAllPixels = target => {
    // TODO: Do something with dimensions?
    dimensions = sizeOf(`./${target}`);

    return new Promise((resolve, reject) => {
        getter.get(`${ target }`, (err, pixels) => {
            if (err) {
                // TODO: Make user not have to exit program to re-enter
                // console.log('File not found. Be sure the extension is included.');
                reject(err);
                process.exit();
            }
            // TODO: Change code so that it resolves with a single array instead of [[]]
            resolve(pixels[0]);
        });
    });
}

this.getPixelData = pixels => {
    // console.log(`Scanning colors...`);
    var start = Date.now();
    var colors = new Array();

    // Iterate
    for (var i = 0; i < pixels.length; i++) {

        var p = pixels[i];

        if ( ! colors[p.r])
            colors[p.r] = new Array();

        if ( ! colors[p.r][p.g])
            colors[p.r][p.g] = new Array();

        if ( ! colors[p.r][p.g][p.b]) {
            var color = `${ p.r }, ${ p.g }, ${ p.b }`;
            colors[p.r][p.g][p.b] = { color: color, count: 0 };
        }

        colors[p.r][p.g][p.b].count++;

    };

    // console.log(`Finding most used color...`);
    var max;
    var maxVal = 0;
    for (var r in colors) {
        for (var g in colors[r]) {
            for (var b in colors[r][g]) {
                if (maxVal < colors[r][g][b].count) {
                    maxVal = colors[r][g][b].count;
                    max = colors[r][g][b];
                }
            }
        }
    }

    var primaryColor = max.color;
    var counter = maxVal;

    // Done
    return new Promise((resolve, reject) => {
        var end = Date.now();
        // console.log(`Finished in ${ end - start }ms.`);
        // console.log(`Primary color set to ${ primaryColor } (${ counter } occurences).`);
        resolve({ primaryColor: primaryColor, pixels: pixels, dimensions: dimensions });
    });
}

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
