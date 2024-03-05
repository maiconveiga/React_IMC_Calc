import Cabecalho from './Cabecalho';
import Tabela from './Tabela';
import Calculadora from './Calculadora';
import { useState } from 'react';

function App() {
  const [mostraCalc, setMostraCalc] = useState(true);
  const [mostraTabela, setMostraTabela] = useState(true);
 
  console.log(mostraCalc);
  console.log(mostraTabela);

  return (
    <>
      <Cabecalho/>
      {mostraCalc && (<Calculadora/>)}
      <button type='button' onClick={() => setMostraCalc(!mostraCalc)}>Toggle calculadora</button>
      {mostraTabela && (<Tabela/>)}
      <button type='button' onClick={() => setMostraTabela(!mostraTabela)}>Toggle calculadora</button>
      
    </>
  )
}

export default App
