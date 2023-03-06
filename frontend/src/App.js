import React from 'react';
import { Index_colaborador } from './Pages/colaborador/historico_solicitacoes'
import { Solicitacoes } from './Pages/colaborador/solicitacoes'
// import { Login_gestor } from './Pages/colaborador/login'
// import { Login_colaborador } from './Pages/colaborador/login'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route exact path='/login_colaborador' element={<Login_colaborador />} />
      <Route exact path='/login_gestor' element={<Login_gestor />} /> */}
      <Route exact path='/index_colaborador' element={<Index_colaborador />} />
      <Route exact path='/solicitacoes' element={<Solicitacoes />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
