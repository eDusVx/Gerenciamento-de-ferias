import { useState } from 'react';
import './style.css'

const SolicitationForm = () => {
  const [adiantamentoSalario, setAdiantamentoSalario] = useState(false);
  const [outraOpcaoHabilitada, setOutraOpcaoHabilitada] = useState(true);

  function handleCheckboxChange(event) {
    if (event.target.value === "nao") {
      setOutraOpcaoHabilitada(true);
    } else {
      setOutraOpcaoHabilitada(false);
    }
    setAdiantamentoSalario(event.target.value === "sim");
  }

  return (
    <div className="wrapper bg-gray-300">
      <div className="form">
        <div className="inputfield">
          <label>Data de início</label>
          <input type="date" className="input" />
        </div>
        <div className="inputfield">
          <label>Data de retorno</label>
          <input type="date" className="input" />
        </div>
        <div className="inputfield">
          <label>Já adiantou o 13 salário este ano?</label>
          <div>
            <label>
              <input type="radio" name="adiantamento" value="sim" checked={adiantamentoSalario} onChange={handleCheckboxChange} />
              Sim
            </label>
            <label>
              <input type="radio" name="adiantamento" value="nao" checked={!adiantamentoSalario} onChange={handleCheckboxChange} />
              Não
            </label>
          </div>
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
};

export default SolicitationForm;

  
