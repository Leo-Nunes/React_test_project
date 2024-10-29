import { useState } from 'react';

import Perfil from './components/Perfil';
import Formulario from './components/Formulario';
import ReposList from './components/RepoList';

function App() {
  const [formularioEstaVisivel, setFormularioVisivel] = useState(true);

  return (
    <>
      <Perfil nome="Leonardo" endereco="https://github.com/Leo-Nunes.png"/>
      <ReposList />

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioVisivel(!formularioEstaVisivel)} type='button'>Toggle form</button> */}
    </>
  )
}

export default App
