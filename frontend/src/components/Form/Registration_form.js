import './style.css'

const Registration_form = () => {
    return (
    <>
    <div class="wrapper">
    <div class="form">
       <div class="inputfield">
          <label>Nome completo</label>
          <input type="text" class="input" placeholder="nome" required></input>
       </div>   
       <div class="inputfield">
          <label>Matrícula</label>
          <input type="text" class="input" placeholder="matrícula" required></input>
       </div>  
        <div class="inputfield">
          <label>Contrato</label>
          <div class="custom_select">
            <select>
              <option value="">Select</option>
              <option value="CLT">CLT</option>
              <option value="PJ">PJ</option>
            </select>
          </div>
       </div> 
        <div class="inputfield">
          <label>E-mail</label>
          <input type="text" class="input" placeholder="email" required></input>
       </div> 
       <div class="inputfield">
          <label>Senha temporária</label>
          <input type="password" class="input" placeholder="********" required></input>
       </div> 
      <div class="inputfield">
          <label>Data de admissão</label>
          <input type="date" class="input"></input>
       </div> 
      <div class="inputfield">
          <label>Função</label>
          <input type="text" class="input" placeholder="função" required></input>
       </div> 
      <div class="inputfield">
        <input type="submit" value="Registrar" class="btn"></input>
      </div>
    </div>
</div>	
    </>
    )
}

export default Registration_form;
  
