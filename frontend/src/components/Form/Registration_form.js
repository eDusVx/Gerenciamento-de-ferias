import './style.css'

const RegistrationForm = () => {
    return (
   <>
      <div className="wrapper bg-gray-300">
         <div className="form">
               <div className="inputfield">
                  <label>Nome completo</label>
                  <input type="text" className="input" placeholder="nome" required></input>
               </div>   
               <div className="inputfield">
                  <label>Matrícula</label>
                  <input type="text" className="input" placeholder="matrícula" required></input>
               </div>  
               <div className="inputfield">
                  <label>Contrato</label>
               <div className="custom_select">
                  <select>
                     <option value="">Select</option>
                     <option value="CLT">CLT</option>
                     <option value="PJ">PJ</option>
                  </select>
               </div>
               </div> 
               <div className="inputfield">
                  <label>E-mail</label>
                  <input type="text" className="input" placeholder="email" required></input>
               </div> 
               <div className="inputfield">
                  <label>Senha temporária</label>
                  <input type="password" className="input" placeholder="********" required></input>
               </div> 
               <div className="inputfield">
                  <label>Data de admissão</label>
                  <input type="date" className="input"></input>
               </div> 
               <div className="inputfield">
                  <label>Função</label>
                  <input type="text" className="input" placeholder="função" required></input>
               </div> 
               <div className="inputfield">
               <input type="submit" value="Registrar" className="btn"></input>
               </div>
         </div>
      </div>	
    </>
    )
}

export default RegistrationForm;
  
