class App {
  constructor() {
    this.serverName = 'localhost'
    // Add event listener to the button
    document
      .querySelector('button')
      .addEventListener('click', this.getServerName.bind(this))
  }
  getServerName() {
    console.log(this.serverName)
  }
}

const app = new App()
// app.getServerName()
