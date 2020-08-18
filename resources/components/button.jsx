import React from 'react'
import styled from 'styled-components'

const Btn = styled.div`
    display: flex;
    justify-content: center;
    background-color: #3F51B5;
    width: 100%;
    padding: 15px 0;
    font-family: sans-serif;
    font-weight: 500;
    color: #fff;
    border-radius: 3px;
    :hover{
        background-color: #2D3A82;
        cursor: pointer;
    }
`
const Wrapper = styled.div`
    margin: 20px 20px;
`

function Button({label, X, Y, numberOfLayers, blur, spread, alpha, color}){

    function outputShadow(){
        console.log(`Clicked`)
        let output = {
            maxX : X, 
            maxY: Y, 
            numberOfShadows: numberOfLayers, 
            blur: blur, 
            spread: spread, 
            alpha: alpha, 
            color: color,
        }
        console.log(`[outputShadow] ${output}`)
        window.postMessage('nativeLog', output)
        
    }

    return(
        <Wrapper>
            <Btn onClick={outputShadow}>{label}</Btn>
        </Wrapper>
        
    )
}

export default Button;