import React, { Component } from 'react'
import { haeKysymykset } from '../palvelut/apipalvelu';
import KysymyksetComponent from './KysymyksetComponent';

export default class KysymyksetBoxComponent extends Component {
    state = {
        kysymykset: [],
        msg: "Haetaan dataa..."
    };

    componentDidMount = () => {
        this.haeJaPaivita();
    };

    haeJaPaivita = () => {
        haeKysymykset(lista => {
            this.setState({ kysymykset: lista, msg: null });
        });
    }

    render() {

        let nimi = sessionStorage.getItem("1");
        //haetaan session storagesta viimeisin syötetty nimi ja syötetään se kenttään näkyviin
        return (
            <div>
                <h1>Visailua</h1>
                <hr />
                <h3>Valitse oikea vaihtoehto</h3>
                <KysymyksetComponent kysymykset={this.state.kysymykset} />
            </div>
        )
    }
}



