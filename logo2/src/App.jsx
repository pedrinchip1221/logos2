import logosena1 from './imagenes/logosena1.svg'
import logoadso from './imagenes/logoadso.svg'

import './App.css'

function App() {

  return (
    <>
      <div>
        
          <img src={logoadso} className="logo adso" alt="adso logo" />
        
        
          <img src={logosena1} className="logo sena1" alt="sena logo" />
        
      </div>
      
      <textarea
        rows="5"
        cols="50"
        placeholder="copia lo que quieras aqui u.u"
      />

    </>
  )
}

export default App
