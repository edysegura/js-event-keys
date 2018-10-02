var Index = {
  init: function() {
    Index.setHandles()
  },

  setHandles: function() {
    var tableKeyPress = document.getElementById('keypress')
    var tableKeyDown = document.getElementById('keydown')
    var tableKeyUp = document.getElementById('keyup')

    document.addEventListener('keypress', function(event) {
      event.preventDefault()
      Index.buildTable(event, tableKeyPress)
    })

    document.addEventListener('keydown', function(event) {
      Index.buildTable(event, tableKeyDown)
    })

    document.addEventListener('keyup', function(event) {
      Index.buildTable(event, tableKeyUp)
    })
  },

  buildTable: function(event, table) {
    var tableData = [
      event.keyCode,
      event.key,
      event.ctrlKey,
      event.altKey,
      event.shiftKey
    ]

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
