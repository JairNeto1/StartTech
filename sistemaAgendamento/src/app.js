import express from 'express'
import routes = require ('./router')

class App {
  constructor() {
    this.server = express
    this.middlewares()
    this.routes()
  }
}
middlewares(){
  this.server.use(express.json())
}
Routes() {
  this.server.use(routes)
}

export default new App().server
