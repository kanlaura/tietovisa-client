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
            <div className="GameOver">
                <h2>Kiitos pelaamisesta {nimi}! <br/> Pisteesti tällä kertaa: {pisteet * 75}</h2>
                <br></br>
            <button onClick={etusivulle} >ETUSIVULLE</button>
            </div>
        )
    }
}
