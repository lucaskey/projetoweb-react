import React, {useEffect, useState} from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar';
import {useSelector} from 'react-redux';
import PostCard from '../../components/postcard';
import firebase from '../../config/firebase';
import Footer from '../../components/footer';

function Home({match}) {

    const [posts,setPosts] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    var listaPosts =[];

    useEffect( () => {

        if (match.params.parametro) {
            firebase.firestore().collection('posts').where('usuario', '==', usuarioEmail).get().then(async (resultado) => {
                await resultado.docs.forEach( doc => {
                    if(doc.data().titulo.indexOf(pesquisa) >= 0) {
                        listaPosts.push({
                            id: doc.id, 
                            ... doc.data()
                        })
                    }
                })
    
                setPosts(listaPosts);
    
            })
        }else{
            firebase.firestore().collection('posts').get().then(async (resultado) => {
                await resultado.docs.forEach( doc => {
                    if(doc.data().titulo.indexOf(pesquisa) >= 0) {
                        listaPosts.push({
                            id: doc.id, 
                            ... doc.data()
                        })
                    }
                })

                setPosts(listaPosts);

            })
        }

        
    });

    return(
        <>
            <Navbar />
            {/* <h1>{useSelector(state => state.usuarioEmail)}</h1>
            <h1>{useSelector(state => state.usuarioLogado)}</h1> */}
            {/* esta entre chaves{} por que e um jsx */}

            <div className="row p-3 container"> 
                <h2 className="mx-auto p-5">Posts Publicados</h2>
                <input type="text" onChange={ (e) => setPesquisa(e.target.value)} className="form-control text-center" placeholder="Pesquisar pelo titulo..." />
                
            </div>
            
            <div className="row p-4">
                {
                    posts.map( item => <PostCard key={item.id} id={item.id} titulo={item.titulo} descricao={item.descricao} vizualizacoes={item.vizualizacoes} imagem={item.imagem} />)
                }

            </div>
            <Footer />
        </>
    )
}

export default Home;