import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';


function Footer () {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-md-6 col-sm-12">
                        <p>Contato:</p>
                        <ul className="list-unstyled">
                            <li>saltnetwork@email.com</li>
                            <li>Tel:+55(11)xxxx-xxxx</li>
                        </ul>
                    </div>
                    <div className="col my-4">
                        <p>Brasil - 2020</p>

                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;