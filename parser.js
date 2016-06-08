



module.exports = (function(htmlToParse) {

    // /<table>(.*?)<\/table>/g

    var charsToDelete = [];

    // var html = `${htmlToParse}`.split(/(?=(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))/);
    // var html = htmlToParse.split('(?!^)');

    var html = htmlToParse.replace('=\r\n', '');

    // for (var i = 0, len = htmlToParse.length; i < len; i++) {
    //     var area = htmlToParse[(i - 1)] + htmlToParse[i] + htmlToParse[(i + 1)];
    //     if(htmlToParse[i] === '=' && htmlToParse[(i + 1)] === '\n') {
    //         charsToDelete.push(i);
    //     }
    // }

    // var newHtml = htmlToParse.replace(/<([^}]*)>(.*?)<\/([^}]*)>/, 'ay');

    return html;

});
