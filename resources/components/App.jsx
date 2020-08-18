import React, {useState, useEffect} from 'react';
import Preview from './preview'
import Inputs from './inputs'
import styled from 'styled-components'
import Button from './button';

const Wrapper = styled.div`
width: 300px; 
// height: 500px; 
border: 1px solid rgba(0,0,0,0.2);
border-radius: 5px;
overflow: hidden;
background-color: #fff;
// padding-bottom:20px;
`

function clickHandler(){
    console.log("Clicked")
    return;
}

function App(){

    const [layers, setLayers] = useState(6)
    const [x, setX] = useState(30)
    const [y, setY] = useState(0)
    const [blur, setBlur] = useState(80)
    const [spread, setSpread] = useState(0)
    const [transparency, setTransparency] = useState(7)

    // useEffect(()=>{
       
    // })
    


    return <Wrapper>
            <Preview numberOfLayers={layers} blur={blur} X={x} Y={y} alpha={transparency} color="#000000" spread={spread} />
            <Inputs label={"Number of Layers"} min={0} max={10} initalValue={layers} updateValue={setLayers} />
            <Inputs label={"Final X distance"} min={-200} max={200} initalValue={x} updateValue={setX} />
            {/* <Inputs label={"Final Y distance"} min={0} max={200} initalValue={y} updateValue={setY} /> */}
            <Inputs label={"Blur"} min={0} max={300} initalValue={blur} updateValue={setBlur}/>
            <Inputs label={"Spread"} min={0} max={300} initalValue={spread} updateValue={setSpread} />
            <Inputs label={"Final Transparency"} min={1} max={99} initalValue={transparency} updateValue={setTransparency} />
        <Button label="Generate Shadow" numberOfLayers={layers} blur={blur} X={x} Y={y} alpha={transparency} color="#000000" spread={spread} />
        </Wrapper>;
}

export default App;