// import React, {useState} from 'react';
// import './style.css'
// function Registration_form() {
//     return(
//       <div className="form">
//           <div className="form-body">
//               <div className="username">
//                   <label className="form__label" for="nome">Nome </label>
//                   <input className="form__input" type="text" id="nome" placeholder="nome"/>
//               </div>
//               <div className="lastname">
//                   <label className="form__label" for="matricula">Matrícula </label>
//                   <input  type="text" name="" id="matricula"  className="form__input"placeholder="matricula"/>
//               </div>
//               <div className="email">
//                   <label className="form__label" for="email">Email </label>
//                   <input  type="email" id="email" className="form__input" placeholder="Email"/>
//               </div>
//               <div className="password">
//                   <label className="form__label" for="senha">Senha </label>
//                   <input className="form__input" type="password"  id="senha" placeholder="senha"/>
//               </div>
//               <div className="contratacao">
//                 <option value="CLT" selected>CLT</option>
//                 <option value="PJ">PJ</option>
//               </div>
//           </div>
//           <div class="footer">
//               <button type="submit" class="btn">Cadastrar</button>
//           </div>
//       </div>      
//     )       
// }
// export default Registration_form;

import "./style.css"

function Registration_form() {
    return (
        <>
            <h1>Cadastro Colaborador</h1>
            <div className="container-cadastro">

                <div className="container-duplo">

                    <div className="input-duplo">
                        <label htmlFor="">Contratação</label>
                        <select name="" id="">
                            <option value="CLT" selected>CLT</option>
                            <option value="PJ">PJ</option>
                        </select>
                    </div>

                    <div className="input-duplo">
                        <label htmlFor="">Matrícula</label>
                        <input type="text" />
                    </div>

                </div>

                <label htmlFor="">Nome</label>
                <input type="text" placeholder="seu nome aqui" />

                <div className="container-duplo">

                    <div className="input-duplo">
                        <label htmlFor="">CPF</label>
                        <input type="text" name="" id="" placeholder="___.___.___-__" />
                    </div>

                    <div className="input-duplo">
                        <label htmlFor="">Função</label>
                        <select name="" id="">
                            <option value="Funcionario" selected>Funcionário</option>
                            <option value="Gestor">Gestor</option>
                        </select>
                    </div>

                </div>

                <label htmlFor="">Setor</label>
                <select name="" id="">
                    <option value="TI" selected>TI</option>
                    <option value="RH">RH</option>
                    <option value="RH">Contabilidade</option>
                </select>
                <label htmlFor="">Gestor</label>
                <select name="" id="">
                    <option value="">Nenhum</option>
                    <option value="TI">Fulano</option>
                    <option value="RH">Ciclano</option>
                    <option value="RH">Beltrano</option>
                </select>
                <button className="botao">Cadastrar</button>
            </div>
        </>
    )
}

export default Registration_form;