import { useState } from 'react'
import styles from './main.module.css'

function Calculadora() {

    return (
        <>
            <div className={styles.calculadora}>
                    <input type="text" name="" id="altura" placeholder='Altura 2.00' />
                    <input type="text" name="" id="peso" placeholder='Peso 80.0' />
                    <span>IMC 25.9</span>
            </div>

        </>
    )
}

export default Calculadora
