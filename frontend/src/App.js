import React from 'react';
import { Provider } from 'react-redux';
import { Index_colaborador } from './Pages/colaborador/historico_solicitacoes';
import { Index_gestor } from './Pages/gestor/index_gestor';
import { Solicitacoes } from './Pages/colaborador/solicitacoes';
import { Login } from './Pages/Login/login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/index_gestor' element={<Index_gestor />} />
            <Route exact path='/index_colaborador' element={<Index_colaborador />} />
            <Route exact path='/solicitacoes' element={<Solicitacoes />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
