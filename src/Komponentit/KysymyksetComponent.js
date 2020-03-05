import React, { Component } from 'react';
import {tarkista} from '../palvelut/apipalvelu';
var nimi = sessionStorage.getItem("1");

class KysymyksetComponent extends Component {
    state = {nimi: nimi};
    

    render() { 
        if (!this.props.kysymys) {
            return <p>Hetki vielä</p>
        }

        return (
            <div className="visailu">
                <h3>{this.state.nimi}, valitse oikea vaihtoehto</h3>
                <table>
                    <tbody>
                        <tr>
                            <td><b>{this.props.kysymys[0].kysymys}</b></td>
                        </tr>
                         {this.props.kysymys[0].vastaukset.map(vastaus => (<tr key={vastaus.id}><td>
                            <button value={vastaus.oikein} onClick={() => tarkista(vastaus.oikein)}>{vastaus.vastaus}</button>
                        </td></tr>))} 
                    </tbody>
                </table>
            </div>
        );
    }
}

export default KysymyksetComponent;