import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Footer from '../../components/Footer/Footer';

export const Login = () => {

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [msg, setMsg] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function redirecionar() {
        if (login === "admin" || login === "gestor" || login === "funcionario") {
            dispatch({ type: 'LOGIN', role: login });
            navigate("/index_gestor")
        } else {
            setMsg(true)
        }
    }

    return (
        <div className="container-principal">
            <div className="Logo items-center flex flex-row flex-wrap justify-center mt-[15%]">
                <img src="./images/queroquero.png" width={380}/>
            </div>
            <div className="container-login w-[300px] p-[30px] m-auto flex flex-row flex-wrap rounded-md justify-center">
                <input className="text-center mb-[20px] p-[8px] h-[30px] rounded shadow bg-slate-300" type="text" placeholder="Matrícula" value={login} onChange={(evt) => setLogin(evt.target.value)} />
                <input className="text-center mb-[20px] p-[8px] h-[30px] rounded shadow bg-slate-300" type="password" placeholder="*********" value={senha} onChange={(evt) => setSenha(evt.target.value)} />
                <button className="rounded w-[100px] h-[30px] m-auto text-center bg-slate-500" to="/index_gestor" id="entrar" onClick={redirecionar}>Entrar</button>
            </div>
            {msg === true ?
                (<div className="alert alert-warning w-[60px] mx-auto" role="alert">
                    <h1>Dados de login inválidos</h1>
                </div>)
                :
                null
            }
            <Footer/>
        </div > 
    )
}