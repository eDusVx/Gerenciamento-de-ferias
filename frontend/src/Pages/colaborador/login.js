import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
// import "./style.css"

export const Login = () => {

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [msg, setMsg] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function redirecionar() {
        if (login === "admin" || login === "gestor" || login === "funcionario") {
            dispatch({ type: 'LOGIN', role: login });
            navigate("/index_colaborador")
        } else {
            setMsg(true)
        }
    }

    return (
        <div className="container-principal flex top-[30%] left-[20%] w-[100%]">

            {msg === true ?
                (<div className="alert alert-warning w-25 mx-auto" role="alert">
                    Login ou Senha inválidos!
                </div>)
                :
                null
            }

            <div className="Logo m-auto">
                <img src="./images/queroquero.png" width={250} height={82}/>
                <h1>Gerenciamento de férias</h1>
            </div>
            <div className="container-login w-[25%] p-[30px] m-auto flex flex-col rounded-md">
                <input className="text-center mb-[20px] p-[8px] rounded shadow bg-slate-300" type="text" placeholder="Login" value={login} onChange={(evt) => setLogin(evt.target.value)} />
                <input className="text-center mb-[20px] p-[8px] rounded shadow bg-slate-300" type="password" placeholder="*********" value={senha} onChange={(evt) => setSenha(evt.target.value)} />
                <button className="rounded text-center bg-slate-600" to="/home" id="entrar" onClick={redirecionar}>Entrar</button>
            </div>
        </div >
    )
}