import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function () {
  const UI = sketch.UI;
  // sketch.UI.message("It's alive 🙌")
  const doc = sketch.getSelectedDocument()
  const selectedLayers = doc.selectedLayers
  if (selectedLayers.length === 0) {
    sketch.UI.message("Nothing selected 🤷🏾‍♂️")
  } else {
    var shape = selectedLayers.layers[0]
    var shadows = []
    var layerOfShadows
    var finalTransparency = 12
    var finalVertical


    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    log("plugin run")
    UI.getInputFromUser("We out 'ere", {
      type: UI.INPUT_TYPE.slider,
      description: "Choose between 1 and 10",
      maxValue: 10,
      minValue: 1,
      increment: 1,

    }, (err, value) => {
      if (err) {
        return
      }
      layerOfShadows = value;
      for (var i = 0; i < layerOfShadows; i++) {
        log(`Shadow depth ${i}`)
        var colorWithAlpha = "#000000" + ((finalTransparency / layerOfShadows) * (layerOfShadows - i))
        shadows.push({
          color: colorWithAlpha,
          blur: layerOfShadows - i,

        })
      }

      shape.style.shadows = shadows


    })
    // log(UI.INPUT_TYPE)
    // sketch.UI.getInputFromUser(
    //   "How many Layers of Shadow?", {
    //     type: sketch.UI.INPUT_TYPE.selection,
    //     possibleValues: options
    //   }, (err, value) => {
    //     if (err) {
    //       // user canceled
    //       return
    //     }
    //     layerOfShadows = value;
    //     for (var i = 0; i < layerOfShadows; i++) {
    //       log(`Shadow depth ${i}`)
    //       shadows.push({
    //         color: '#c0ffee',
    //         blur: 3,
    //       })
    //     }

    //     shape.style.shadows = shadows

    //   }
    // )





  }
}