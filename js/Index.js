import { TableService } from './TableService.js'

class Index {

  constructor() {
    this.listenToKeyboardEvents()
  }

  bindEvent(eventType) {
    document.addEventListener(eventType, (event) => {
      if (eventType === 'keypress') {
        event.preventDefault()
      }
      TableService.buildTable(eventType, event)
    })
  }

  listenToKeyboardEvents() {
    const events = [
      'keypress',
      'keydown',
      'keyup'
    ]
    events.forEach(this.bindEvent)
  }
}

new Index()