export class TableService {

  static addRow(table) {
    this.clearTable(table)
    const [ tbody ] = table.tBodies
    const row = tbody.insertRow(tbody.rows.length)
    return row
  }

  static addCell(table) {
    const row = this.addRow(table)
    return (cellData) => {
      row.insertCell(row.cells.length).innerHTML = !/true/.test(cellData)
        ? cellData
        : `<span>${cellData}</span>`
    }
  }

  static clearTable(table) {
    table.removeChild(table.tBodies[0])
    table.appendChild(document.createElement('tbody'))
  }

  static buildTable(tableId, event) {
    const table = document.getElementById(tableId)

    const cellsData = [
      event.keyCode,
      event.key,
      event.ctrlKey,
      event.altKey,
      event.shiftKey
    ]

    cellsData.forEach(this.addCell(table))
  }
}
