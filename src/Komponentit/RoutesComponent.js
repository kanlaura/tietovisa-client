import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class RoutesComponent extends Component {
    render() {
        return (
            <div className="container">
                <nav>
                    <span><Link to="/">Etusivu</Link></span> 
                    <span><Link to="/highscore">HighScore</Link></span>
                    <span><Link to="kysymykset">Kysymykset</Link></span> 
                </nav>
            </div>
        );
    }
}

export default RoutesComponent;