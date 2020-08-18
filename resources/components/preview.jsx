import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
width: 100%;
height: 180px; 
background-color: #EFF2F7;
overflow: hidden;
display: flex;
align-items:center;
justify-content:center;
`

const Card = styled.div`
width: 5em;
height:5em;
background-color: #fff; 
border-radius: 0.2em;
justify-content: center;
transition: 0.2s;
`
// function generateShadowLayer(numberofLayers,x,y,blur,spread, color, alpha){
//     var output = {
//           color: "#000000" + Math.floor((finalTransparency / layerOfShadows) * (layerOfShadows - i)),
//           blur: (maxBlur / layerOfShadows - i) * i,
//           spread: -(maxSpread / layerOfShadows - i) * i,
//           y: (finalVertical / layerOfShadows - i) * i,
//         }

// }

function Preview(props) {
    
    const [shadow, setShadow] = useState(["10px 0px 0px 0px rgba(0, 0, 0, 0.034)"])
    

    useEffect(()=>{
        // console.log(`count changed: ${props.NumberOfLayers}`)
        console.log(`Number of Layers : ${props.numberOfLayers}`)
        console.log(`Blur amount: ${props.blur}`)
        console.log(`Transparency: ${props.alpha}`)
        //     styles = '0 2.8px 2.2px rgba(0, 0, 0, 0.034)'
        //     styles += `0 2.8px 2.2px rgba(0, 0, 0, 0.34)`
        console.log(`[preview] useEffect triggered`) 
        // setStyles("")
        setShadow(shadow => [])

        let xStep = (props.X / (props.numberOfLayers)).toFixed(2)
        let yStep = Math.floor(props.Y / props.numberOfLayers)
        let blurStep = props.blur / props.numberOfLayers
        let spreadStep = Math.floor(props.spread / props.numberOfLayers)
        let alphaStep = ((props.alpha / props.numberOfLayers) / 100).toFixed(2)

        console.log(`
        ---------- Setup values ------------
        x: ${xStep}
        y: ${yStep}
        blur: ${blurStep}
        spread: ${spreadStep}
        alpha: ${alphaStep} 
        -------------------------------------
        `)
        for(let i= 0; i < props.numberOfLayers; i++){
           

            if(i === 0 ){
                
                setShadow(shadow => [...shadow, `${yStep}px ${xStep}px ${blurStep.toFixed(2)}px ${spreadStep}px rgba(0,0,0,${alphaStep})`])
                // console.log(`First shadow element: ${shadow.toString()}`)
                
            }else if(i >  0 ){
                // console.log(`Blur amount: ${blurStep}`)
                // console.log(`blur: ${(props.blur / props.numberOfLayers) * i}`)
                setShadow(shadow => [...shadow, `${(yStep *(i + 1)).toFixed(2)}px ${Math.round((xStep * (i + 1)).toFixed(2))}px ${(blurStep * (i + 1)).toFixed(2)}px ${(spreadStep * (i + 1)).toFixed(2)}px rgba(0, 0, 0, ${(alphaStep * (i + 1)).toFixed(2)})`])
                // console.log(`added shadow element: ${shadow.toString()}`)
            
            } else{
                
            }


        } 
        

    },[props])
    console.log(`final shadow element: ${shadow}`)
    return (
        <Wrapper>
            <Card style={{
                boxShadow: shadow
            }}/>
        </Wrapper>
    );
}


export default Preview; 