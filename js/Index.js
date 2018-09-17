var Index = {
  init: function() {
    Index.setHandles()
  },

  setHandles: function() {
    var tableKeyPress = document.getElementById('keypress')
    var tableKeyDown = document.getElementById('keydown')
    var tableKeyUp = document.getElementById('keyup')

    document.addEventListener('keypress', function(event) {
      Index.buildTable(event, tableKeyPress)
      event.preventDefault()
    })

    document.addEventListener('keydown', function(event) {
      Index.buildTable(event, tableKeyDown)
    })

    document.addEventListener('keyup', function(event) {
      Index.buildTable(event, tableKeyUp)
    })
  },

  buildTable: function(pageEvent, table) {
    var tableData

    if (table.id === 'keypress') {
      tableData = [
        pageEvent.charCode ? pageEvent.charCode : pageEvent.keyCode,
        String.fromCharCode(pageEvent.charCode),
        pageEvent.ctrlKey,
        pageEvent.altKey,
        pageEvent.shiftKey
      ]
    } else {
      tableData = [
        pageEvent.keyCode,
        pageEvent.ctrlKey,
        pageEvent.altKey,
        pageEvent.shiftKey
      ]
    }

    Index.clearTable(table)

    var tbody = table.tBodies[0]
    var row = tbody.insertRow(tbody.rows.length)

    for (var i = 0; i < tableData.length; i++) {
      row.insertCell(row.cells.length).innerHTML =
        String(tableData[i]) !== 'true'
          ? tableData[i]
          : '<span>' + tableData[i] + '</span>'
    }
  },

  clearTable: function(table) {
    table.removeChild(table.tBodies[0])
    table.appendChild(document.createElement('tbody'))
  }
}

window.onload = Index.init
