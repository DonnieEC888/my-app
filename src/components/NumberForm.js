import React from 'react'
import './css/NumberForm.css'


const NumberForm = ({numberSearch, getFact,number}) => {
    return(
        <div id='form'>
        <input id='number' type="text" placeholder='Enter a number...' onChange={numberSearch} value={number}/>
        <button id='button' onClick = {getFact}>Get Fact!</button>
        </div>

    )
}

export default NumberForm;

