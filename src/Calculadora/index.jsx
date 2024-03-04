import { useState } from 'react'
import styles from './main.module.css'

const Calculadora = () => {
    let [a,setA] = useState(1);
    let [p,setP] = useState(0);
    let imc = (parseFloat(p)/(parseFloat(a)*parseFloat(a))).toFixed(2); 
    
    return (
        <>
            <div className={styles.calculadora}>
                    <input type="number"  name="" id="altura" placeholder='Altura' onChange={evento => setA(evento.target.value)} />
                    <input type="number"  name="" id="peso" placeholder='Peso' onChange={evento => setP(evento.target.value)}/>
                    <span>IMC {imc}</span>
            </div>
            
        </>
    )
}

export default Calculadora
