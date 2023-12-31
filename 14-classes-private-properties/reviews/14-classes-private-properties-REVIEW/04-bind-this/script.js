class App {
  constructor() {
    this.serverName = 'localhost'

    // Add 'click' event listener to the button
    const btn = document.querySelector('button')
    if (btn) {
      btn.addEventListener('click', this.getServerName.bind(this))
    }
  }

  getServerName() {
    console.log(`Server Name: ${this.serverName}`)
  }
}

new App()
