import React, { Component } from 'react'
import { haeKysymys } from '../palvelut/apipalvelu';
import KysymyksetComponent from './KysymyksetComponent';

export default class KysymyksetBoxComponent extends Component {
    state = {
        kysymys: null
    };

    componentDidMount = () => {
        this.haeJaPaivita();
    };

    haeJaPaivita = async () => {
        let data = await haeKysymys();
        this.setState({ kysymys: data}
        );
    } 

    render() {
        let nimi = sessionStorage.getItem("1");
        //haetaan session storagesta viimeisin syötetty nimi ja syötetään se kenttään näkyviin
        return (
            <div>
                <h1>Visailua</h1>
                <hr />
                <h3>Pelaaja: {nimi} </h3>
                <h4>Valitse oikea vaihtoehto</h4>
                <KysymyksetComponent kysymys={this.state.kysymys} />
            </div>
        )
    }
}



