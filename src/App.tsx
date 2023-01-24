import React from 'react'
import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'
// import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './validators/yupValidators';
import { ValidationError } from './components/validationError';
import {APIanticipate} from "./API/index"



interface FormAnticipate {
	amount: number;
	mdr: number
	installments: number;
}

function App() {
	const { register, handleSubmit, formState: {errors}} = useForm({
		resolver: yupResolver(formSchema)
	});
	const onSubmit = (data: any): void => {
		const calculateData = data
		calculateData.days = [0, 1, 30, 60, 90]
		APIanticipate(calculateData)
	}
	const onError = (error: any) => {

	}
	
	return (
		<main className="App">
			<form onSubmit={handleSubmit(onSubmit, onError)} className='block-insert_values'>
				<h1 className='title-simulate-anticipation'>Simulate your anticipation</h1>
				<div>
					<Input 
						text='Sale value*' 
						type='number' 
						name="amount"
						register={register("amount")}
						placeholder='Insert the sale amount'
						step="0.01"
					/>
				</div>
				{errors?.amount?.type && <ValidationError type={errors.amount.type} field="amount"/>}
				<div className='block-installments'>
					<Input 
						text='How many installments*' 
						type='number' 
						name="installments"
						register={register("installments")}
						placeholder='Number of installments'
					/>
					<p className='p-max_installments'>Maximum of 12 installments</p>
					{errors?.installments?.type && <ValidationError type={errors.installments.type} field="installments"/>}
					
				</div>
				<div>
					<Input 
						text='MDR porcentage*' 
						type='number' 
						name='mdr'
						register={register("mdr")}
						placeholder='What is the rate?'
						step="0.01"
					/>
				</div>
				{errors?.mdr?.type && <ValidationError type={errors.mdr.type} field="mdr"/>}
				<Button type="submit"/>
			</form>
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
  