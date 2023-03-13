import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Index_colaborador } from './Pages/colaborador/historico_solicitacoes';
import { Cadastro_colaborador } from './Pages/gestor/cadastro_colaborador';
import { Index_gestor } from './Pages/gestor/index_gestor'
import { Solicitacoes } from './Pages/colaborador/solicitacoes';
import { Colabroadores } from './Pages/gestor/colaboradores';
import { Aprovacoes } from './Pages/gestor/aprovacoes';
import { Login } from './Pages/Login/login';
import { Perfil_colaborador } from './Pages/Perfil/Perfil_colaborador'
import { Perfil_gestor } from './Pages/Perfil/Perfil_gestor'


function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/colaboradores' element={<Colabroadores />} />
            <Route exact path='/aprovacoes' element={<Aprovacoes />} />
            <Route exact path='/index_gestor' element={<Index_gestor />} />
            <Route exact path='/cadastro_colaborador' element={<Cadastro_colaborador />} />
            <Route exact path='/index_colaborador' element={<Index_colaborador />} />
            <Route exact path='/solicitacoes' element={<Solicitacoes />} />
            <Route exact path='/perfil_gestor' element={<Perfil_gestor />} />
            <Route exact path='/perfil_colaborador' element={<Perfil_colaborador />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
