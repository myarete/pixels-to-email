var fs     = require('fs');
var tidy   = require('htmltidy').tidy;
var insert = require('./template.js').insert;
var parser = require('./parser.js');

var stream = fs.createWriteStream(`index.html`);

var optionsForTidy = { doctype: 'html5',
                       hideComments: false,
                       indent: true };

var optionsForHtml = { title: 'Email',
                       fontColor: '#FFFFFF' }; // will be dynamic

// CREATE OPTIONS FOR FONTS AND COLORS AND STUFF
this.generate = data => {
    optionsForHtml.dynamicData = data;
    this.createHtmlFile(insert(optionsForHtml));
}

this.createHtmlFile = finalHtml => {
    stream.once('open', () => {
        tidy(finalHtml, optionsForTidy, (err, html) => {
            // TODO: Properly handle err
            // stream.write(html.replace(/(\r\n|\n|\r)/gm, ''));
            console.log(parser(html));
            stream.write(html);
            stream.end(console.log('done'));
            // TODO: Success message, port open for dev, paste to clipboard, open vs
        });
    });
}

module.exports = this.generate;
