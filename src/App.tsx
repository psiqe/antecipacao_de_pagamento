import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'

function App() {
  return (
    <main className="App">
    	<div className='block-insert_values'>
			<h1 className='title-simulate-anticipation'>Simulate your anticipation</h1>
			<Input text='Sale value*' type='number' name='Sale Value' placeholder='Insert the sale amount' value=''/>	
			<div className='block-installments'>
				<Input text='How many installments*' type='number' name='installments' placeholder='Number of installments' value=''/>
				<p className='p-max_installments'>Maximum of 12 installments</p>
			</div>
			<Input text='MDR porcentage*' type='number' name='MDR' placeholder='What is the rate?' value=''/>
        </div>
      	<div className='block-return_receive'>
			<h2>You Receive</h2>
			<div className='line'></div>
			<p className='p-receive-today'>Today:</p>
			<p className='p-receive'>Tomorrow:</p>
			<p className='p-receive'>In 15 days:</p>
			<p className='p-receive'>In 30 days:</p>
			<p className='p-receive'>In 90 days:</p>
	    </div>
    </main>
  )
}
  
  export default App
  