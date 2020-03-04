import React, { Component } from 'react';
import { kirjaudu } from '../palvelut/apipalvelu';
// import HighScoreComponent from './HighScoreComponent';
// import KysymyksetComponent from './KysymyksetComponent'

class EtusivuComponent extends Component {

    render() {
        const handleChange = (e) => {
            // e=event = käyttäjän syöttämä nimi
            e.preventDefault(e);
            const nimi = e.target.value;
            this.nimi = nimi;
            console.log(this.nimi);

        }
        return (
            <div>

                <h1>Visailua</h1>
                <p>Haluatko osallistua visailuun? Kirjoita nimimerkkisi ja aloita</p>
                <p><input value={this.nimi} type="text" placeholder="nimimerkki" onChange={handleChange} /><button onClick={() => kirjaudu(this.nimi)}>Aloita</button></p>
                <p id="kirjaudu"></p>

            </div>
        );
    }
}

export default EtusivuComponent;