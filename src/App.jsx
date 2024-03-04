import { useState } from 'react'

function App() {

  return (
    <>
      <div className="container">
        <form>
          <label htmlFor="altura">Altura:</label>
          <input type="text" name="" id="altura" placeholder='2.00' />
          <label htmlFor="peso">Peso:</label>
          <input type="text" name="" id="peso" placeholder='80.0' />
        </form>
      </div>

    </>
  )
}

export default App
