const Table = require("cli-table3");
/**
 *
 * @param {string} tableHeader
 * @param {*} tableContents
 * @returns {void}
 */
function generateTable(tableHeader, tableContents) {
  const table = new Table({
    style: {
      head: ["yellow"]
    },
    head: [tableHeader],
    colWidths: [35, 15],
    wordWrap: true
  });

  if (!Array.isArray(tableContents)) {
    tableContents = [tableContents];
  }

  tableContents.forEach((row) => table.push(row));

  console.log(table.toString());
}

module.exports = generateTable;
