import React from 'react'
import styles from './Style.module.css'

type ButtonProps = {
    // onClick: React.MouseEventHandler
    type: 'submit' | 'reset' | 'button';
}

export const Button = ({type, ...rest}: ButtonProps) => {
    return (
        <div className={styles.button_control}>
            <button type={type}>
                calculate
            </button>
        </div>
    )
}