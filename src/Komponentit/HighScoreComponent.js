import React, { Component } from 'react';

class HighScoreComponent extends Component {
    state = {tulos: tulos};

    render() {
        const tulokset = this.state.tulos.map(t => (<tr key={t.id}><td>{t.kayttaja}</td><td>{t.score}</td><td>{t.pvm}</td></tr>))
        return (
            <div>
                <h1>Top-10 tulokset</h1>
                <hr/>
                <table>
                    <thead>
                        <tr>
                            <th>Käyttäjä</th><th>Score</th><th>pvm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tulokset}
                    </tbody>
                </table>
            </div>
        );
    }
}

const tulos =[{
    id: 1,
    kayttaja: 'Mikko Maailskuu',
    score: 10,
    pvm: '2020-03-03'
  },
  {
    id: 2,
    kayttaja: 'Heli Helmikuu',
    score: 15,
    pvm: '2020-05-03'
  }]

export default HighScoreComponent;