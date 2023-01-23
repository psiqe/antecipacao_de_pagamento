import React from "react";
import { Field, FieldValue, FieldValues, UseFormRegisterReturn, UseFormRegister, RegisterOptions } from "react-hook-form";
import styles from './Style.module.css'

interface InputProps{
    type: string,
    text: string,
    name: string, 
    placeholder: string,
    register?:  UseFormRegisterReturn
    // register: UseFormRegister<FieldValues | any>
    // options: RegisterOptions
}


export const Input = ({type, text, name, placeholder, register}: InputProps) => {
    return(
        <div className={styles.input_control}>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type} 
                placeholder={placeholder}
                {...register} 
            />
        </div>
    )
}