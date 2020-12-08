import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './newpost.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar';
import firebase from '../../config/firebase';


function NewPost({match}) {

    const [msgTipo, setMsgTipo] = useState();
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [imagem, setImagem] = useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail);
    const [carregando, setCarregando] = useState(0);
    const [imagemAtual, setImagemAtual] = useState();
    const [imagemNova, setImagemNova] = useState();
    const [pessoas, setPessoas] = useState();

    const storage = firebase.storage();
    const db = firebase.firestore();

    useEffect( () => {
        if(match.params.idPost) {
            firebase.firestore().collection('posts').doc(match.params.idPost).get().then( resultado => {
                setTitulo(resultado.data().titulo);
                setDescricao(resultado.data().descricao);
                setData(resultado.data().data);
                setHora(resultado.data().hora);
                setImagemAtual(resultado.data().imagem);
                setPessoas(resultado.data().pessoas);
            })
        }
    }, [carregando])


    function atualizar() {
        setCarregando(1);
        setMsgTipo(null);

        if (imagemNova) {
            storage.ref(`/imagens/${imagemNova.name}`).put(imagemNova);
        }

        db.collection('posts').doc(match.params.idPost).update({
            titulo: titulo,
            descricao: descricao,
            data: data,
            hora: hora,
            imagem: imagemNova ? imagemNova.name: imagemAtual
        }).then( () => {
            setMsgTipo('ok');
            setCarregando(0);
        }).catch( erro => {
            setMsgTipo('erro');
            setCarregando(0);
        })
    };


    function cadastrar () {
        setCarregando(1)

        storage.ref(`imagens/${imagemNova.name}`).put(imagemNova).then( () => {
            db.collection('posts').add({
                titulo: titulo,
                descricao: descricao,
                data: data,
                hora: hora,
                pessoas: pessoas,
                imagem: imagemNova.name,
                publico: 1,
                criacao: new Date(),
                usuario: usuarioEmail,
                vizualizacoes: 0,
            }).then( () => {
                setMsgTipo('ok');
                setCarregando(0);
            }).catch ( () => {
                setMsgTipo('erro');
                setCarregando(0);
            })
        });

    }

    return(
        <>
            <Navbar />
            <div className="col-12">
                <div className="row p-5">
                    <h3 className="mx-auto font-weight-bold">{match.params.idPost ? 'Atualizar Post' : 'Novo Post'}</h3>
                </div>

                <form>
                    <div className="form-group">
                        <label>Título</label>
                        <input onChange={(e) => setTitulo(e.target.value)} type="text" className="form-control" value={titulo} />
                    </div>
                    <div className="form-group">
                        <label>Receita</label>
                        <textarea onChange={(e) => setDescricao(e.target.value)} className="form-control" row="4" value={descricao}/>
                    </div>
                    <div className="form-group row">
                        <div className="col-4">
                            <label>Data:</label>
                            <input onChange={(e) => setData(e.target.value)} type="date" className="form-control" value={data} />
                        </div>
                        <div className="col-4">
                            <label>Tempo de Preparo</label>
                            <input onChange={(e) => setHora(e.target.value)} type="time" className="form-control" value={hora} />
                        </div>
                        <div className="col-4">
                            <label>Pessoas servidas</label>
                            <input onChange={(e) => setPessoas(e.target.value)} type="number" className="form-control" placeholder="Pessoas" value={pessoas} />
                        </div>

                    </div>
                    <div className="row">
                        <label>Upload de imagem</label>
                        <input onChange={(e) => setImagemNova(e.target.files[0])} type="file" className="form-control input-image" />
                    </div>
                    <div className="text-center my-5 p-4">
                        {
                            carregando ? <div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                            : <button onClick={match.params.idPost ? atualizar: cadastrar} type="button" className="btn btn-lg btn-block mt-3 bm-5 btn-cadastro">{match.params.idPost ? 'Atualizar' : 'Cadastrar Post'}</button>
                        }
                    </div>
                </form>
                <div className="text-center my-4">
                    {msgTipo == 'ok' && <span><strong>Uau!</strong> Post cadastrado com sucesso</span>}
                    <br/>
                    {msgTipo == 'erro' && <span><strong>Ah!</strong> Erro ao cadastrar o post</span>}
                </div>
            </div>
        </>
    )

}

export default NewPost;