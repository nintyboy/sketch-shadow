import sketch from 'sketch'
import BrowserWindow, {
  fromId
} from 'sketch-module-web-view'
// import {
//   getWebView
// } from 'sketch-module-web-view/remote'

// documentation: https://developer.sketchapp.com/reference/api/

const webViewIdentifier = `sketch-shadow.webview`


export default function () {

  const webViewOptions = {
    identifier: webViewIdentifier,
    height: 630,
    width: 300,

  }
  const doc = sketch.getSelectedDocument()
  const selectedLayers = doc.selectedLayers

  const browserWindow = new BrowserWindow(webViewOptions);

  // Waits for the browser window to be ready before it shows
  browserWindow.once('ready-to-show', () => {
    browserWindow.show()
  });

  const webContents = browserWindow.webContents

  // print a message when the page loads
  webContents.on('did-finish-load', () => {

  })

  // add a handler for a call from web content's javascript
  webContents.on('nativeLog', s => {
    generateShadow(s);
    browserWindow.close()
  })



  browserWindow.loadURL(require('../resources/webview.html'))

  function generateShadow(input) {

    if (selectedLayers.length === 0) {
      sketch.UI.message("Nothing selected 🤷🏾‍♂️")
      // log(`nothing selected`)
    } else {
      var shape = selectedLayers.layers[0]
      var shadows = []
      var layerOfShadows = input.numberOfShadows
      var finalAlpha = input.alpha
      var finalX = input.maxX
      var maxSpread = input.spread
      var maxBlur = input.blur

      for (var i = 0; i < layerOfShadows; i++) {

        var output = {
          color: "#000000" + Math.floor((finalAlpha / layerOfShadows) * (layerOfShadows - i)),
          blur: (maxBlur / layerOfShadows - i) * i,
          spread: -(maxSpread / layerOfShadows - i) * i,
          y: (finalX / layerOfShadows - i) * i,
        }
        shadows.push({
          color: output.color,
          blur: output.blur,
          spread: output.spread,
          y: output.y,
        })
      }

      shape.style.shadows = shadows

    }

    return;

  }

}

export function onShutdown() {
  const existingWebview = getWebview(webviewIdentifier)
  if (existingWebview) {
    existingWebview.close()
  }
}