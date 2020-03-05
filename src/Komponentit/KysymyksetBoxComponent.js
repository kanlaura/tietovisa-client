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
    }

    haeJaPaivita = () => {
        haeKysymykset(lista => {
            this.setState({ kysymykset: lista, msg: null });
        });
    }

    render() {
        return (
            <div>
                <h1>Visailua</h1>
                <hr/>
                <h3>Valitse oikea vaihtoehto</h3>
                <KysymyksetComponent kysymykset={this.state.kysymykset} />
            </div>
        )
    }
}
