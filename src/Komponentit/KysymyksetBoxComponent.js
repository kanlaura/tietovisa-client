import React, { Component } from 'react'
import { haeKysymys, tarkista } from '../palvelut/apipalvelu';
// import KysymyksetComponent from './KysymyksetComponent';
var nimi = sessionStorage.getItem("1");

export default class KysymyksetBoxComponent extends Component {
    state = {
        kysymys: null,
        nimi: nimi
    };

    componentDidMount = () => {
        this.haeJaPaivita();
    };

    haeJaPaivita = async () => {
        let data = await haeKysymys();
        await this.setState({ kysymys: data});
        console.log(this.state.kysymys)
    } 

    tarkistus = async (e) => {
        let uusi = await tarkista(e.target.value)
        console.log(uusi);
        this.setState({kysymys: uusi})
        return uusi;
    }

    render() {
        if (!this.state.kysymys) {
            return <p>Hetki vielä</p>
        }
        return (
            <div>
                <h1>Visailua</h1>
                <hr />
                {/* <KysymyksetComponent kysymys={this.state.kysymys} /> */}
                <div className="visailu">
                <h3>{this.state.nimi}, valitse oikea vaihtoehto</h3>
                <table>
                    <tbody>
                        <tr>
                            <td><b>{this.state.kysymys[0].kysymys}</b></td>
                        </tr>
                        {this.state.kysymys[0].vastaukset.map(vastaus => (<tr key={vastaus.id}><td>
                            <button value={vastaus.oikein} onClick={this.tarkistus}>{vastaus.vastaus}</button>
                        </td></tr>))}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}



