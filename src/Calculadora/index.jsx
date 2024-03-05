import { useState } from 'react'
import styles from './main.module.css'

const Calculadora = () => {
    let [a,setA] = useState(1);
    let [p,setP] = useState(0);
    let imc = (parseFloat(p)/(parseFloat(a)*parseFloat(a))).toFixed(2);
    let classificacao = '';

    if( imc == 0){
        classificacao = "Classificação";
    }else if(imc < 18.5){
        classificacao = "Magreza";
    }else if(imc < 24.9){
        classificacao = "Normal";
    }else if(imc < 29.9){
        classificacao = "Sobrepeso";
    }else if(imc < 39.9){
        classificacao = "Obesidade";
    }else{
        classificacao = "Obesidade grave";
    }

    return (
        <>
            <div className={styles.calculadora}>
                    <input type="number"  name="" id="altura" placeholder='Altura' onChange={evento => setA(evento.target.value)} />
                    <input type="number"  name="" id="peso" placeholder='Peso' onChange={evento => setP(evento.target.value)}/>
                    <span>IMC {imc}</span>
                    <span>{classificacao}</span>
            </div>
            
        </>
    )
}

export default Calculadora
