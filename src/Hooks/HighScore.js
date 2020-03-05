import React, { useState, useEffect } from 'react';
import { haeHighScore, haeAllTimeHighScore, haeKuukaudenTimeHighScore } from '../palvelut/apipalvelu';
import moment from 'moment';

//Apudata listan testaamiseen
// const tulos = [{
//     kayttaja_id: 1,
//     nimi: 'Mikko Maailskuu',
//     maxitmit: 10,
//     // pvm: '2020-03-03'
// },
// {
//     kayttaja_id: 2,
//     nimi: 'Heli Helmikuu',
//     maxitmit: 15,
//     // pvm: '2020-05-03'
// }]

export default function HighScore() {
    const [score, setScore] = useState({
        top5: [],
        top20: [],
        top5kk: [],
        kk: parseInt(moment(new Date).format('MM')),
        yyyy: parseInt(moment(new Date).format('YYYY'))
    });

    //Hakee score-datat apipalvelut.js:n kautta tietokannasta--Laura
    const haeScoret = async () => {
        const topScoret = await haeHighScore();
        const allScoret = await haeAllTimeHighScore();
        const kuukaudenScoret = await haeKuukaudenTimeHighScore(score.kk, score.yyyy);
        setScore({...score, top5: topScoret, top20: allScoret, top5kk: kuukaudenScoret })
    }
    
    //Päivittää highScoren käynnistämällä yläpuolella olevan function--Laura
    useEffect(() => {
        haeScoret()
    }, []);

    return (
        <div>
            <h1>Top-5 käyttäjät</h1>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Käyttäjä</th><th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {score.top5.map(t => (<tr key={t.kayttaja_id}><td>{t.nimi}</td><td>{t.maximit}</td></tr>))}
                </tbody>
            </table>
            <h1>Kuukauden Top-5 Pisteet</h1>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Käyttäjä</th><th>Score</th><th>Päivämäärä</th>
                    </tr>
                </thead>
                <tbody>
                    {score.top5kk.map(t => (<tr key={t.id}><td>{t.nimi}</td><td>{t.pisteet}</td><td>{moment(t.pvm).format('DD.MM.YYYY')}</td></tr>))}
                </tbody>
            </table>
            <h1>Kaikkien aikojen Top-20 Pisteet</h1>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Käyttäjä</th><th>Score</th><th>Päivämäärä</th>
                    </tr>
                </thead>
                <tbody>
                    {score.top20.map(t => (<tr key={t.id}><td>{t.nimi}</td><td>{t.pisteet}</td><td>{moment(t.pvm).format('DD.MM.YYYY')}</td></tr>))}
                </tbody>
            </table>
        </div>
    );

}