import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function Top20AllTime(props) {
    const [score, setScore] = useState({
        top: props.top20,
        kk: parseInt(moment(new Date()).format('MM')),
        yyyy: parseInt(moment(new Date()).format('YYYY'))
    });

    // Päivittää highScoren käynnistämällä yläpuolella olevan function--Laura
    useEffect(() => {
        setScore({ ...score, top: props.top20 })
        //eslint-disable-next-line
    }, [props.top20])

    return (
        <div>
            <h1>Kaikkien aikojen Top-20 Pisteet</h1>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th className="kayttajaNimi">Käyttäjä</th><th>Score</th><th>Päivämäärä</th>
                    </tr>
                </thead>
                <tbody>
                    {score.top.map(t => (<tr className="topKakskyt" key={t.id}><td className="kayttajaNimi">{t.nimi}</td><td>{t.pisteet}</td><td>{moment(t.pvm).format('DD.MM.YYYY')}</td></tr>))}
                </tbody>
            </table>
        </div>
    );

}