import sketch from 'sketch'
import BrowserWindow, {
  fromId
} from 'sketch-module-web-view'
import {
  getWebView
} from 'sketch-module-web-view/remote'

// documentation: https://developer.sketchapp.com/reference/api/

const webViewIdentifier = `sketch-shadow.webview`


export default function () {

  const UI = sketch.UI;
  const webViewOptions = {
    identifier: webViewIdentifier,
    height: 240,
    width: 180,
    show: false
  }

  const browserWindow = new BrowserWindow(webViewOptions);

  // Waits for the browser window to be ready before it shows
  browserWindow.once('ready-to-show', () => {
    browserWindow.show()
  });

  const webContents = browserWindow.webContents

  // print a message when the page loads
  webContents.on('did-finish-load', () => {
    UI.message('UI loaded!')
  })

  // add a handler for a call from web content's javascript
  webContents.on('nativeLog', s => {
    UI.message(s)
    webContents
      .executeJavaScript(`setRandomNumber(${Math.random()})`)
      .catch(console.error)
  })

  browserWindow.loadURL(require('../resources/webview.html'))


  // const UI = sketch.UI;
  // const doc = sketch.getSelectedDocument()
  // const selectedLayers = doc.selectedLayers



  // if (selectedLayers.length === 0) {
  //   sketch.UI.message("Nothing selected 🤷🏾‍♂️")
  // } else {
  //   var shape = selectedLayers.layers[0]
  //   var shadows = []
  //   var layerOfShadows
  //   var finalTransparency = 12
  //   var finalVertical = 100
  //   var maxSpread = 0
  //   var maxBlur = 80


  //   const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  //   log("plugin run")
  //   UI.getInputFromUser("We out 'ere", {
  //     type: UI.INPUT_TYPE.slider,
  //     description: "Choose between 1 and 10",
  //     maxValue: 10,
  //     minValue: 1,
  //     increment: 1,

  //   }, (err, value) => {
  //     if (err) {
  //       return
  //     }
  //     layerOfShadows = value;

  //     for (var i = 0; i < layerOfShadows; i++) {

  //       var colorWithAlpha = Math.floor((finalTransparency / layerOfShadows) * (layerOfShadows - i))
  //       var output = {
  //         color: "#000000" + Math.floor((finalTransparency / layerOfShadows) * (layerOfShadows - i)),
  //         blur: (maxBlur / layerOfShadows - i) * i,
  //         spread: -(maxSpread / layerOfShadows - i) * i,
  //         y: (finalVertical / layerOfShadows - i) * i,
  //       }
  //       log(`-----------------`)
  //       log(`Shadow Layer: ${layerOfShadows - i}`)
  //       log(`Amount of Layers: ${layerOfShadows}`)
  //       log(`alpha ${colorWithAlpha}`)
  //       log(`color: ${output.color}`)
  //       log(`blur: ${output.blur}`)
  //       log(`spread: ${output.spread}`)
  //       log(`y: ${output.y}`)
  //       log(`-----------------`)
  //       shadows.push({
  //         color: output.color,
  //         blur: output.blur,
  //         spread: output.spread,
  //         y: output.y,
  //       })
  //     }

  //     shape.style.shadows = shadows


  //   })

  // }
}

export function onShutdown() {
  const existingWebview = getWebview(webviewIdentifier)
  if (existingWebview) {
    existingWebview.close()
  }
}