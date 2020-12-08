import React, {useState} from 'react';
import './lostpassword.css';
import {Link} from 'react-router-dom';
import firebase from '../../config/firebase';
import 'firebase/auth';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

function LostPassword () {

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recuperarSenha() {
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            setMsg("Email de recuperação de senha enviado para caixa de entrada");
        }).catch(error => {
            setMsg("Por favor, insira um e-mail válido");
        })
    }

    return(
        <>
            <Navbar />
            <form className="text-center form-login mx-auto mt-5">
                <h3 className="mb-3 my-4 font-weight-bold">Recuperação de senha</h3>
                <input onChange={e => setEmail(e.target.value)} className="form-control mb-3 my-2" type="email" placeholder="E-mail" />

                <div className="msg my-8 mb-3">
                    <span>{msg}</span>
                </div>

                <button onClick={recuperarSenha} type="button" className="btn btn-lg mt-4 my-4 btn-block btn-enviar">Recuperar senha</button>

            </form>
            <Footer />
        </>
    )
}

export default LostPassword;

