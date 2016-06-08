this.run = pixelData => {
    for (var i = 0; i < pixelData.pixels.length; i++) {
        var rgb = `${ pixelData.pixels[i].r }, ${ pixelData.pixels[i].g }, ${ pixelData.pixels[i].b }`;
        if (rgb !== pixelData.primaryColor) {
            var _width = 0;
            var _height = 0;

            _width++

            console.log(_width);
        }
    }
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
