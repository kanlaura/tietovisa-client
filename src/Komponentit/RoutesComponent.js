import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { etusivulle } from '../palvelut/apipalvelu';


class RoutesComponent extends Component {
    render() {
        return (
            <div className="container">
                <nav>
                    <Link className="naviLinkki" to="/" onClick={etusivulle}>Etusivu</Link> 
                    <Link className="naviLinkki" to="/highscore">HighScore</Link>
                </nav>
            </div>
        );
    }
}

export default RoutesComponent;