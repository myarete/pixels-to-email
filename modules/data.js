this.run = pixelData => {

    var pixels       = pixelData.pixels;
    var dimensions   = pixelData.dimensions;
    var primaryColor = pixelData.primaryColor;
    var coordinates  = new Array();

    for (var i = 0; i < pixels.length; i++) {

        pixels[i].id = pixels[i];

        if (`${pixels[i].r}, ${pixels[i].g}, ${pixels[i].b}` !== primaryColor) {
            coordinates.push(pixels[i]);
        }
    }
    
    console.log(coordinates.length);
    process.exit();
}

this.createObject = data => {
    console.log(data);
}

module.exports = this.run;
