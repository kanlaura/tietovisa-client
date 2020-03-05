import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { etusivulle } from '../palvelut/apipalvelu';


class RoutesComponent extends Component {
    render() {
        return (
            <div className="container">
                <nav>
                    <span><Link to="/" onClick={etusivulle}>Etusivu</Link></span> 
                    <span><Link to="/highscore">HighScore</Link></span>
                </nav>
            </div>
        );
    }
}

export default RoutesComponent;