import React, {useState} from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './newUser.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

function NewUser(){
    
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    function cadastrar(){
        setCarregando(1);
        setMsgTipo(null);
        
        if(!email || !senha){
            setMsgTipo('erro');
            setMsg('Preencha todos os campos!');
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            setCarregando(0);
            setMsgTipo('ok');
        }).catch(erro => {
            setCarregando(0);
            setMsgTipo('erro');
            switch(erro.message) {
                case 'Password should be at least 6 characters':
                    setMsg('A senha deve conter pelo menos 6 caracteres.');
                    break;
                case 'The email address is already in use by another account.':
                    setMsg('Este E-mail está sendo usado por outra conta.');
                    break;
                case 'The email address is badly formatted.':
                    setMsg('Formato do e-mail inválido.');
                    break;
                default:
                    setMsg('Não foi possível cadastrar. Por favor, tente mais tarde.');
                    break;
            }
            // alert(erro);
        });

    }

    return(
        <>
            <Navbar/>
            <div className="form-cadastro">
                <form className="text-center form-login mx-auto mt-5">
                    <h1 className="h3 mb-4 text-black font-weight-bold">Cadastro</h1>

                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="E-mail"></input>
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha"></input>
                    
                    {
                        carregando ? <div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                        : <button onClick={cadastrar} type="button" className="btn btn-lg mt-4 btn-block btn-cadastro">Cadastrar</button>
                    }

                    <div className="text-black text-center my-4">
                        {
                            msgTipo == 'ok' && <span> Usuário cadastrado com sucesso!</span>
                        }
                        
                        <br/>
                        {
                            msgTipo == 'erro' && <span>{msg}</span>

                        }
                    </div>

                </form>


            </div>
            <Footer />
            
        </>
    )
}

export default NewUser;