import React, {useState} from 'react'
import './App.css';
import NumberForm from  '../components/NumberForm';
import NumberFact from '../components/NumberFact';
import ErrorBoundary from '../components/ErrorBoundary';

function App () {

  const [number, setNumber] = useState('')
  const [fact, setFact] = useState('')

  const facts = () => {
    const userNumber = parseInt(number)
    isNaN(userNumber) 
    ? setFact('Please enter a valid number.') : 
      fetch(`http://numbersapi.com/${userNumber}`)
      .then(resp => resp.text())
      .then(data => setFact(data))
      .catch((err) => console.log(err))

    }
   
   
  const clearSearch = () => {
    setNumber('')
  }
 const  numberSearch = (e) => {
    setNumber(e.target.value)
  }
 const  getFact = (e) => {
      e.preventDefault()
      facts()
      clearSearch()
    }
    
    return (
      <div className='app'>
        <h1 id='app-logo'>(Z)</h1>
        <h1 id='app-title'>Integar Facts</h1>
        <h3 id='app-subtitle'>Learn interesting number facts</h3>
        <ErrorBoundary>
        <NumberForm numberSearch ={numberSearch} getFact = {getFact} number={number}></NumberForm>
        <NumberFact fact = {fact}></NumberFact>
        </ErrorBoundary>
      </div>
    
    )
  }


export default App;
