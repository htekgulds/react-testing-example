require('babel-register')()

let jsdom = require('jsdom').jsdom
let exposedProperties = ['window', 'navigator', 'document']

global.document = jsdom()
global.window = document.defaultView
Object.keys(document.defaultView).forEach(key => {
  if (typeof global[key] === 'undefined') {
    exposedProperties.push(key)
    global[key] = document.defaultView[key]
  }
})

global.navigator = {
  userAgent: 'node.js'
}

documentRef = document