import React, {useState} from 'react';
import './login.css';
import {Link, Redirect} from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth'

import {useSelector, useDispatch} from 'react-redux';

import logo from '../../img/logo.png';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setmsgTipo] = useState();

    const dispatch = useDispatch();


    function autenticar(){
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setmsgTipo("ok");
            setTimeout(() => {
                dispatch({type: 'LOGIN', usuarioEmail: email})
            }, 1000)
            
        })
        .catch(erro => {
            setmsgTipo('erro');
        })

    }


    return (

        <div className ="login-content d-flex align-items-center">
            {
                useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null
            }

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <a href="/" ><img src={logo} onClick={'/'}></img></a>
                    <h1 className="h3 font-weight-normal font-weight-bold">Login</h1>
                </div>
                <div>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2 inputEmail" placeholder="Email"/> 
                </div>
                <div>
                    <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2 inputPassword" placeholder="Senha"/>
                    {/* <i className="far fa-eye password-icon"></i> */}
                </div>
                <button className="btn btn-lg btn-login btn-block my-3" onClick={autenticar} type="button">Entrar</button>
                
                <div className="text-center my-4">
                    {msgTipo == 'ok' && <span><strong>Uau!</strong> Conectou ao sistema!</span>}
                    <br/>
                    {msgTipo == 'erro' && <span><strong>Ah!</strong> Verificar e-mail e senha inseridos!</span>}
                </div>

                <div className="option-login mt-4 text-center">
                    <Link to='/lostpassword' className="mx-2">Recuperar senha</Link>
                    <span>&#9661;</span>
                    <Link to='newuser' className="mx-2">Quero me cadastrar</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;