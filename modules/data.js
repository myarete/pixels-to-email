this.run = pixelData => {

    var pixels       = pixelData.pixels;
    var dimensions   = pixelData.dimensions;
    var primaryColor = pixelData.primaryColor;
    var coordinates  = new Array();

    // // Get the coordinates of pixels not primary and attach
    // // array index as uid
    // for (var i = 0; i < pixels.length; i++) {
    //     if (`${pixels[i].r}, ${pixels[i].g}, ${pixels[i].b}` !== primaryColor) {
    //         coordinates.push(i);
    //     }
    // }

    // 468 x 252 for current email.jpg
    var grid = [[]];
    // Put all pixels into 2d array mimicing the image
    var yAxis = 1;
    for (var i = 0; i < pixels.length; i++) {
        if (i !== (dimensions.width * yAxis)) {
            grid[(yAxis - 1)].push(pixels[i]);
        } else {
            yAxis++;
            grid.push([]);
        }
    }

    process.exit();
}

module.exports = this.run;
