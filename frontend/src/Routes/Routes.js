import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import index_colaborador from "../Pages/colaborador/historico_solicitacoes";
import solicitacoes from "../Pages/colaborador/solicitacoes";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { index_colaborador }  path="/historico_solicitacoes" exact />
           <Route component = { solicitacoes }  path="/solicitacoes" />
       </BrowserRouter>
   )
}

export default Routes;