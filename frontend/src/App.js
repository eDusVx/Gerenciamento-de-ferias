import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { IndexColaborador } from './Pages/colaborador/historico_solicitacoes';
import { CadastroColaborador } from './Pages/gestor/cadastro_colaborador';
import { IndexGestor } from './Pages/gestor/index_gestor'
import { Solicitacoes } from './Pages/colaborador/solicitacoes';
import { Colabroadores } from './Pages/gestor/colaboradores';
import { Aprovacoes } from './Pages/gestor/aprovacoes';
import { Login } from './Pages/Login/login';
import { PerfilColaborador } from './Pages/Perfil/Perfil_colaborador'
import { PerfilGestor } from './Pages/Perfil/Perfil_gestor'


function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/colaboradores' element={<Colabroadores />} />
            <Route exact path='/aprovacoes' element={<Aprovacoes />} />
            <Route exact path='/index_gestor' element={<IndexGestor />} />
            <Route exact path='/cadastro_colaborador' element={<CadastroColaborador />} />
            <Route exact path='/index_colaborador' element={<IndexColaborador />} />
            <Route exact path='/solicitacoes' element={<Solicitacoes />} />
            <Route exact path='/perfil_gestor' element={<PerfilGestor />} />
            <Route exact path='/perfil_colaborador' element={<PerfilColaborador />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
