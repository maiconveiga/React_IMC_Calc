import { useState } from 'react'
import styles from './main.module.css'

const Calculadora = () => {
    let [a,setA] = useState(1);
    let [p,setP] = useState(0);
    let imc = (parseFloat(p)/(parseFloat(a)*parseFloat(a))).toFixed(2); 
    
    return (
        <>
            <div className={styles.calculadora}>
                    <input type="text" name="" id="altura" placeholder='Altura 2.00' onChange={evento => setA(evento.target.value)} />
                    <input type="text" name="" id="peso" placeholder='Peso 80.0' onChange={evento => setP(evento.target.value)}/>
                    <span>IMC {imc}</span>
            </div>
            
        </>
    )
}

export default Calculadora
