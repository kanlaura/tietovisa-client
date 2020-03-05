import React, { Component } from 'react';
import {tarkista} from '../palvelut/apipalvelu';
var nimi = sessionStorage.getItem("1");

class KysymyksetComponent extends Component {
    state = {kysymys: kysymys,
            nimi: nimi};
    

    render() { 
         console.log(this.state.nimi)
        //haetaan session storagesta viimeisin syötetty nimi ja syötetään se kenttään näkyviin

        return (
            <div className="visailu">
                <h1>Visailua</h1>
                <hr/>
                <h3>{this.state.nimi}, valitse oikea vaihtoehto</h3>
                <table>
                    <tbody>
                        <tr>
                            <td><b>{this.state.kysymys[0].kys}</b></td>
                        </tr>
                        <tr onClick={() => tarkista(this.state.kysymys[0].vast1.oikein)}>
                            <td>{this.state.kysymys[0].vast1.vast}</td>
                        </tr>
                        <tr onClick={() => tarkista(this.state.kysymys[0].vast2.oikein)}>
                            <td>{this.state.kysymys[0].vast2.vast}</td>
                        </tr>
                        <tr onClick={() => tarkista(this.state.kysymys[0].vast3.oikein)}>
                            <td>{this.state.kysymys[0].vast3.vast}</td>
                        </tr>
                        <tr onClick={() =>tarkista(this.state.kysymys[0].vast4.oikein)}>
                            <td>{this.state.kysymys[0].vast4.vast}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const kysymys =[{
    kys_id: 1,
    kys: 'Kuka sinä olet?',
    vast1: {
        vast:'kirja',
        oikein: true },
    vast2: {
        vast: 'koira',
        oikein: false },
    vast3: { 
        vast: 'lehmä',
        oikein: false },
    vast4: {
        vast: 'ihminen',
        oikein: false }
  }]

export default KysymyksetComponent;