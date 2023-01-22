import React from "react";
import styles from './Style.module.css'

type InputProps = {
    type: string,
    text: string,
    name: string, 
    placeholder: string, 
    // handleOnChange: Event, 
    value: string,
}


export const Input = ({type, text, name, placeholder, value}: InputProps) => {
    return(
        <div className={styles.input_control}>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={value}/>
        </div>
    )
}