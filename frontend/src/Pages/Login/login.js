import { Link } from "react-router-dom"
import Footer from '../../components/Footer/Footer';
export const Login = () => {
    return (
        <>
            <div className="Logo items-center flex flex-row flex-wrap justify-center mt-[15%]">
                <img src="./images/queroquero.png" width={350}/>
            </div>
            <div className="container-login w-[300px] p-[30px] m-auto flex flex-row flex-wrap rounded-md justify-center">
                <input className="text-center mb-[20px] p-[8px] h-[30px] rounded shadow bg-slate-300" type="text" placeholder="Matrícula"/>
                <input className="text-center mb-[20px] p-[8px] h-[30px] rounded shadow bg-slate-300" type="password" placeholder="*********"/>
                <Link to="/index_gestor">
                    <button className="rounded w-[100px] h-[30px] m-auto text-center bg-slate-500" to="/index_gestor" id="entrar">Entrar</button>
                </Link>
            </div>
            <Footer/>
        </> 
    )
}