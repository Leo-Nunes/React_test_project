import { useState } from 'react';

import Perfil from './components/Perfil';
import Formulario from './components/Formulario';
import ReposList from './components/RepoList';

function App() {
  const [formularioEstaVisivel, setFormularioVisivel] = useState(true);
  const [nomeUsuario, setNomeUsurio] = useState('');

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsurio(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioVisivel(!formularioEstaVisivel)} type='button'>Toggle form</button> */}
    </>
  )
}

export default App
