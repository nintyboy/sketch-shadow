import React, { useState } from 'react'
import styled from 'styled-components'
import InputRange from 'react-input-range';

const Form = styled.form`
    margin: 0 auto;
    padding: 0 20px ;
    @media(min - width: 800px) {
        max - width: 60 %;
    }
    display:flex;
    flex-direction: column; 
    margin-bottom: 10px; 
`;
const Label_container = styled.div`
    display: flex;
    flex-direction: row;
    font-family: "Helvetica Neue", san-serif;
    font-size: 0.9rem;
    margin: 14px 0;
    justify-content: space-between;
`;

const Label = styled.label`
color: #aaaaaa;

.input-range__slider {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #3f51b5;
    border: 1px solid #3f51b5;
    border-radius: 100%;
    cursor: pointer;
    display: block;
    height: 1rem;
    margin-left: -0.5rem;
    margin-top: -0.65rem;
    outline: none;
    position: absolute;
    top: 50%;
    -webkit-transition: box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;
    transition: box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;
    width: 1rem;
}

.input-range__slider:active {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
}

.input-range__slider:focus {
    box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2);
}

.input-range--disabled .input-range__slider {
    background: #cccccc;
    border: 1px solid #cccccc;
    box-shadow: none;
    -webkit-transform: none;
    transform: none;
}

.input-range__slider-container {
    -webkit-transition: left 0.3s ease-out;
    transition: left 0.3s ease-out;
}

.input-range__label {
    color: #aaaaaa;
    font-family: "Helvetica Neue", san-serif;
    font-size: 0.8rem;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    white-space: nowrap;
}

.input-range__label--min,
.input-range__label--max {
    bottom: -1.4rem;
    position: absolute;
}

.input-range__label--min {
    left: 0;
}

.input-range__label--max {
    right: 0;
}

.input-range__label--value {
    /* position: absolute;
    top: -1.8rem; */
    display: none;
}

.input-range__label-container {
    /* left: -50%;
    position: relative; */
    display: none;
}

.input-range__label--max .input-range__label-container {
    left: 50%;
}

.input-range__track {
    background: #eeeeee;
    border-radius: 0.3rem;
    cursor: pointer;
    display: block;
    height: 0.2rem;
    position: relative;
    -webkit-transition: left 0.3s ease-out, width 0.3s ease-out;
    transition: left 0.3s ease-out, width 0.3s ease-out;
}

.input-range--disabled .input-range__track {
    background: #eeeeee;
}

.input-range__track--background {
    left: 0;
    margin-top: -0.15rem;
    position: absolute;
    right: 0;
    top: 50%;
}

.input-range__track--active {
    background: #3f51b5;
}

.input-range {
    height: 1rem;
    position: relative;
    width: 100%;
}

`
const Result = styled.div`
background-color: rgba(239,242,247,1);
font-weight: 600;
color: #3F51B5;
border-radius: 1rem;
padding: 0em 0.8em;
`


function Inputs({label, min, max, initalValue,updateValue}){

    const [value, setValue] = useState(initalValue);

    return(
        <div>
            <Form>
                <Label_container>
    <Label>{label}</Label>
                    <Result>
                        <span>
                            {value}
                        </span>
                    </Result>

                </Label_container>
                <InputRange
                    maxValue={max}
                    minValue={min}

                    value={value}
                    onChange={event => { 
                        setValue(event)
                       
                        }
                    }
                    onChangeComplete={value =>{
                        console.log(value)
                        updateValue(value)
                    } } />
            </Form>
        </div>
    )
}

export default Inputs; 