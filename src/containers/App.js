import React, {Component} from 'react'
import './App.css';
import NumberForm from  '../components/NumberForm';
import NumberFact from '../components/NumberFact';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      number: '',
      fact: ''
    } 
  }
  fact = () => {
    const number = parseInt(this.state.number)
    isNaN(number) 
    ? this.setState({fact: 'Please enter a valid number.'}) : 
      fetch(`http://numbersapi.com/${number}`)
      .then(resp => resp.text())
      .then(data => this.setState({fact: data}))
      .catch((err) => console.log(err))

    }
   
   
  

  clearSearch = () => {
    this.setState({number: ''})
  }
  numberSearch = (e) => {
    const number = e.target.value
    this.setState({number: number})
  }
  getFact = (e) => {
    e.preventDefault()
      this.fact()
      this.clearSearch()
    }
    

  render() {
    const {fact, number } = this.state
    const {numberSearch, getFact} = this
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
}

export default App;
