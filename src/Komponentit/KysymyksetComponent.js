import React, { Component } from 'react';
import { tarkista } from '../palvelut/apipalvelu';

class KysymyksetComponent extends Component {

    render() {
        if (!this.props.kysymys) {
            return <p>Hetki vielä</p>
        }
        return (
            <div className="visailu">
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