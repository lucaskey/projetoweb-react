import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './aboutus.css';

// img
import aboutus from '../../img/aboutusimg.jpg';
import aimee from '../../img/aimeestones.jpg';
import fabio from '../../img/fabiohenning.jpg';
import lukas from '../../img/lukasgodina.jpg';
import jodi from '../../img/jodi.jpg';

function AboutUs() {
    return (
        <>
            <Navbar />

            <div className="row">
                <div className="col m-5">
                    <img src={aboutus} className="float-right" width="440" height="550" />
                    
                </div>
                <div className="col m-5 aboutustxt">
                    <h1 className="center">About Us</h1>
                    <h5 className="center">Since 2020</h5>
                    <p className="large">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span class="w3-tag w3-light-grey">seasonal</span> ingredients.</p>
                    <p className="large">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                </div>
            </div>
            

            <hr />

            <div className="container p-3 aboutustxt">
                <h3 className="p-4">Colaboradores</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="row p-2 ml-5 aboutustxt">
                <div className="col">
                    <img src={jodi} className="colaboradores" />
                    <h3>Jodi Baker</h3>
                    <p>Founder</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                </div>
                <div className="col">
                    <img src={aimee} className="colaboradores" />
                    <h3>Aimee Stones</h3>
                    <p>Founder</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                </div>
                <div className="col">
                    <img src={lukas} className="colaboradores" />
                    <h3>Lukas Godina</h3>
                    <p>Chef</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                </div>
                <div className="col">
                    <img src={fabio} className="colaboradores" />
                    <h3>Fabio Henning</h3>
                    <p>Journalist</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AboutUs;
