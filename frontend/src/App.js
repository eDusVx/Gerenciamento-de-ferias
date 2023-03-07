import React from 'react';
import { Provider } from 'react-redux';
import { Index_colaborador } from './Pages/colaborador/historico_solicitacoes';
import { Solicitacoes } from './Pages/colaborador/solicitacoes';
import { Login } from './Pages/colaborador/login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { store, persistor } from './Store/index';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/index_colaborador' element={<Index_colaborador />} />
            <Route exact path='/solicitacoes' element={<Solicitacoes />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
