class Index {

  constructor() {
    this.listenToKeyboardEvents()
  }

  bindEvent(eventType) {
    document.addEventListener(eventType, (event) => {
      if (eventType === 'keypress') {
        event.preventDefault()
      }
      console.log(`Build table for ${eventType}`)
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