import { useState } from 'react';
import './style.css'

const Solicitation_form = () => {
    const [adiantamentoSalario, setAdiantamentoSalario] = useState(false);
    const [outraOpcaoHabilitada, setOutraOpcaoHabilitada] = useState(false);

  function handleCheckboxChange(event) {
    setAdiantamentoSalario(event.target.checked);
    setOutraOpcaoHabilitada(event.target.checked);
  }

  return (
    <div className="wrapper">
      <div className="form">
        <div className="inputfield">
          <label>Data de inícios</label>
          <input type="date" className="input" />
        </div>
        <div className="inputfield">
          <label>Data de retorno</label>
          <input type="date" className="input" />
        </div>
        <div className="inputfield">
          <label>Já adiantou o 13 salário este ano?</label>
          <input type="checkbox" className="checkbox" checked={adiantamentoSalario} onChange={handleCheckboxChange} />
        </div>
        <div className="inputfield">
          <label>Solicitar adiantamento de 13 salário</label>
          <input type="checkbox" className="checkbox" disabled={!outraOpcaoHabilitada} />
        </div>
        <div className="inputfield">
          <label>Comentários</label>
          <textarea placeholder="Insira seu comentário" className="textarea" />
        </div>
        <div className="inputfield">
          <input type="submit" value="Registrar" className="btn" />
        </div>
      </div>
    </div>
  );
}

export default Solicitation_form;
  
