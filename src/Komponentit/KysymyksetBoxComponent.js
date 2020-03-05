import React, { Component } from 'react'
import { haeKysymys, tarkista, haeKysymysnumberot } from '../palvelut/apipalvelu';
// import KysymyksetComponent from './KysymyksetComponent';
var nimi = sessionStorage.getItem("1");
let kysymysIdy = []
export default class KysymyksetBoxComponent extends Component {
    state = {
        kysymys: null,
        nimi: nimi,
    };

    componentDidMount = () => {
        this.haeJaPaivita();
    };

    haeJaPaivita = async () => {
        let kysymykset = await haeKysymysnumberot();
        for (let i = 0; i < kysymykset.length; i++) {
            kysymysIdy.push(kysymykset[i].id);
        }
        console.log(kysymysIdy)
        let id = await kysymysIdy.splice(0, 1)
        let data = await haeKysymys(id);
        this.setState({ kysymys: data });
    }
    
    tarkistus = async (e) => {
        let arvo = e.target.value
        let id = await kysymysIdy.splice(0, 1)
        let uusi = await tarkista(arvo, id)
        this.setState({ kysymys: uusi })
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



