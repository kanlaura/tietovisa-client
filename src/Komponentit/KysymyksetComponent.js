import React, { Component } from 'react';
import { tarkista } from '../palvelut/apipalvelu';

class KysymyksetComponent extends Component {

    render() {
        if(!this.props.kysymys ) {
            return <p>Hetki vielä</p>
        }
        return (
            <div className="visailu">
                <table>
                    <tbody>
                        <tr>
                            <td><b>{this.props.kysymys.kysymys}</b></td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => tarkista(this.props.kysymys.vast1.oikein)}>
                                    {this.props.kysymys[0].vast1.vast}
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => tarkista(this.props.kysymys.vast2.oikein)}>
                                    {this.props.kysymys[0].vast2.vast}</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => tarkista(this.props.kysymys.vast3.oikein)}>
                                    {this.props.kysymys[0].vast3.vast}</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => tarkista(this.props.kysymys.vast4.oikein)}>
                                    {this.props.kysymys[0].vast4.vast}</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default KysymyksetComponent;