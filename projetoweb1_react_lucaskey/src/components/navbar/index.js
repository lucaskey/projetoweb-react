import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.png';


import {useDispatch, useSelector} from 'react-redux';
import NewPost from '../../view/newpost';



function Navbar() {

    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg">

            <a href="/" ><img src={logo} onClick={'/'} className="logo mr-4"></img></a>
            {/* <a href="/" class="logo"><i class="fab fa-octopus-deploy fa-2x mr-3"></i></a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {
                        useSelector(state => state.usuarioLogado) > 0 ?
                            <>
                                <li className="nav-item active"><Link to ='/' className="nav-link">Home <span className="sr-only">(current)</span></Link></li>
                                <li className="nav-item active"><Link to ='/posts/meus' className="nav-link">Meus Posts <span className="sr-only">(current)</span></Link></li>
                                <li className="nav-item active"><Link to ='/newpost' className="nav-link">Publicar Post <span className="sr-only">(current)</span></Link></li>
                                <li className="nav-item active"><Link to ='/aboutus' className="nav-link">About Us<span className="sr-only">(current)</span></Link></li>
                                <li className="nav-item active"><Link onClick={() => dispatch({type: 'LOGOUT'})} className="nav-link">Sair <span className="sr-only">(current)</span></Link></li>
                            </>
                            // caso o usuario estiver logado mostra
                            :
                            <>
                                <li className="nav-item active"><Link to ='/' className="nav-link">Home <span className="sr-only">(current)</span></Link></li>
                                <li className="nav-item active"><Link to ='/aboutus' className="nav-link">About Us<span className="sr-only">(current)</span></Link></li>
                                <li className="nav-item active"><Link to ='newUser' className="nav-link">Cadastrar <span className="sr-only">(current)</span></Link></li>
                                <li className="nav-item active"><Link to ='/login' className="nav-link">Login <span className="sr-only">(current)</span></Link></li>
                            </>
                            // caso o usuario NAO estiver logado mostra

                    }

                </ul>
                
            </div>

        </nav>

    )

}

export default Navbar;