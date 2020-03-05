import React, { Component } from 'react'
import { etusivulle } from '../palvelut/apipalvelu';
const nimi = sessionStorage.getItem("1");
const pisteet = sessionStorage.getItem("pisteet");

// etusivu linkki <-- löytyy navigoinnista + napista
//nimi
//pistemäärä

export default class GameOverComponent extends Component {



    render() {
        return (
            <div>
                <h2>Kiitos pelaamisesta {nimi}. Pisteesti tällä kertaa: {pisteet}</h2>
                <br></br>
            <button onClick={etusivulle} >ETUSIVULLE</button>
            </div>
        )
    }
}
