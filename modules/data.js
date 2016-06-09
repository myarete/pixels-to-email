this.run = pixelData => {
    console.log(pixelData.dimensions);
    var width = pixelData.dimensions.width;
    var height = pixelData.dimensions.height;

    var Locations = new Array();
    console.log('Mapping pixel data...');
    var start = Date.now();

    var deltaPixelGrid = new Array();
    for (var i = 0; i < pixelData.pixels.length; i++) {
        var x = i % width;
        var y = Math.floor(i / width);
        var pixel = pixelData.pixels[i];
        var rgb = [pixel.r << 16 | pixel.g << 8 | pixel.b];

        var pixelGrid = new Array();

        pixelGrid[0] = rgb;
        for (var ii = 1; ii < pixelGrid.length; ii++) {
            var nextPixel = pixelData.pixels[ii];
            pixelGrid[ii] = [nextPixel.r << 16 | nextPixel.g << 8 | nextPixel.b]
        }

        deltaPixelGrid = pixelGrid;

        Locations.push(pixelGrid);


        //Locations.push(location);

    }
    //console.log(Locations);

    console.log('Pixel Grids: ' + Locations.length);
    var end = Date.now();
    console.log(`Finished in ${ end - start }ms.`);
    /*
    for (var i = 0; i < pixelData.pixels.length; i++) {
        var rgb = `${ pixelData.pixels[i].r }, ${ pixelData.pixels[i].g }, ${ pixelData.pixels[i].b }`;
        if (rgb !== pixelData.primaryColor) {

        }
    }
    */
}

this.createObject = data => {
    console.log(data);
}


// var primaryColor, width, height, currentRGB;
//
// this.run = pixelData => {
//     primaryColor = pixelData.primaryColor;
//     width = pixelData.dimensions.width;
//     height = pixelData.dimensions.height;
//
//     for (var i = 0; i < pixelData.pixels.length; i++) {
//         var rgb = `${ pixelData.pixels[i].r }, ${ pixelData.pixels[i].g }, ${ pixelData.pixels[i].b }`;
//
//         if (rgb !== primaryColor) {
//             var quadrants = [
//                 i,
//                 i + 1,
//                 i + 2,
//                 i + width,
//                 i + width + 1,
//                 i + width + 2,
//                 i + (width * 2),
//                 i + (width * 2) + 1,
//                 i + (width * 2) + 2
//             ];
//         }
//     }
// }
//
// this.makeObject = pixel => {
//     var data = [];
//
//     console.log(data);
// }
//
// this.checkForPrimaryColor = quadrants => {
//     // quadrants.
// }

module.exports = this.run;
