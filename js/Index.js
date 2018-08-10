var Index = {
  init: function() {
    Index.setHandles()
  },

  setHandles: function() {
    var tableKeyPress = document.getElementById('keypress')
    var tableKeyDown = document.getElementById('keydown')
    var tableKeyUp = document.getElementById('keyup')

    document.addEventListener('keypress', function(e) {
      Index.buildTable(e, tableKeyPress)
      e.preventDefault()
    })

    document.addEventListener('keydown', function(e) {
      Index.buildTable(e, tableKeyDown)
    })

    document.addEventListener('keyup', function(e) {
      Index.buildTable(e, tableKeyUp)
    })
  },

  buildTable: function(pageEvent, table) {
    var tableData

    //json com os dados do evento
    if (table.id == 'keypress') {
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
        tableData[i].toString() != 'true'
          ? tableData[i]
          : '<span>' + tableData[i] + '</span>'
    }
  },

  clearTable: function(table) {
    table.removeChild(table.tBodies[0])
    table.appendChild(document.createElement('tbody'))
  }
}

//inicializacao
window.onload = Index.init
