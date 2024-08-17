const Table = require('cli-table3');
/**
 * 
 * @param {string} tableHeader 
 * @param {*} tableContents 
 * @returns {void}
 */
function generateTable(tableHeader, tableContents) {
    const table = new Table({
        style: {
            head: ['yellow']
        },
        head: [tableHeader],
        colWidths: [40],
        wordWrap: true
    });

    if(!Array.isArray(tableContents)) {
        tableContents = [tableContents]
    }

    table.push.apply(table, tableContents.map((value) => [value]))
    
    console.log(table.toString());
}

module.exports = generateTable;
