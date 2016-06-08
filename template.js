module.exports = {
    insert(opts) {
        return `
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml">
                    <body>
                        <table style="height:100% !important;margin:0 auto;padding:0;background-color:#666;font-family:Arial;" align="center">
                            <tr>
                                <td style="color: ${opts.fontColor}">
                                    ${opts.dynamicData || `Email Content`}
                                </td>
                            </tr>
                        </table>
                    </body>
                </html>
                `
    }
}
