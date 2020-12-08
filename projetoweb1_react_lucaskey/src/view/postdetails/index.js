import React, { useEffect, useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import firebase from '../../config/firebase';
import { useSelector } from 'react-redux';
import './postdetails.css';
import Navbar from '../../components/navbar';


function PostDetails({match}) {

    const [post, setPost] = useState({});
    const [urlImg, setUrlImg] = useState({});
    const usuarioLogado = useSelector(state => state.usuarioEmail);
    const [carregando, setCarregando] = useState(1);
    const [excluido, setExcluido] = useState(0);

    useEffect( () => {
        firebase.firestore().collection('posts').doc(match.params.idPost).get().then( resultado => {
            setPost(resultado.data());
            firebase.firestore().collection('posts').doc(match.params.idPost).update('vizualizacoes', resultado.data().vizualizacoes + 1);
            firebase.storage().ref(`imagens/${resultado.data().imagem}`).getDownloadURL().then( url => {
                setUrlImg(url);
                setCarregando(0);
            });
            // alert('testando');
        })



    }, []);

    function remover() {
        firebase.firestore().collection('posts').doc(match.params.idPost).delete().then( () => {
            setExcluido(1);
        })
    } 


    return (
        <>
            <Navbar />

            {excluido ? <Redirect to="/" /> : null}

            <div className="container-fluid">
                
                {
                    carregando ? <div className="row"><div class="spinner-border text-secondary mx-auto mt-3" role="status"><span class="sr-only">Loading...</span></div></div>
                    :
                    <div>
                        <div className="row">
                            <img src={urlImg} className="container img-banner" alt="Banner" />

                            <div className="col-12 text-right mt-2 vizualizacoes">
                                <i className="fas fa-eye"><span>{post.vizualizacoes + 1}</span></i>
                            </div>

                            <h3 className="mx-auto mt-5 titulo">{post.titulo}</h3>
                        </div>

                        <div className="row mt-5 d-flex justify-content-around">
                            
                            <div className="col-md-3 col-sm-12 p-3 box-info my-2">
                                <i className="fas fa-calendar-alt fa-2x mb-2"></i>
                                <h5><strong>Data</strong></h5>
                                <span className="mt-3">{post.data}</span>
                            </div>
                            <div className="col-md-3 col-sm-12 p-3 box-info my-2">
                                <i class="fas fa-user fa-2x mb-2"></i>
                                <h5><strong>Pessoas</strong></h5>
                                <span className="mt-3">{post.pessoas}</span>
                            </div>
                            <div className="col-md-3 col-sm-12 p-3 box-info my-2">
                                <i class="far fa-clock fa-2x mb-2"></i>
                                <h5><strong>Tempo</strong></h5>
                                <span className="mt-3">{post.hora}</span>
                            </div>
                        </div>

                        <div className="row box-detalhes my-5">
                            <div className="col-12 text-center">
                                <h5><strong>Receita</strong></h5>
                            </div>
                            <div className="col-12 text-center">
                                <p>{post.descricao}</p>
                            </div>
                        </div>

                        {
                            usuarioLogado === post.usuario ?
                            <Link to={`/postedit/${match.params.idPost}`} className="btn-editar"><i className="fas fa-pen-square fa-3x"></i></Link>
                            : null
                        }

                        {
                            usuarioLogado === post.usuario ?
                            <button onClick={remover} type="button" className="btn btn-lg mt-3 mb-5 btn-remover">Remover Post</button>
                            : null
                        }

                    </div>
                }            
            </div>
        </>
    )
}

export default PostDetails;