import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function KuukaudenScoret(props) {
    const [score, setScore] = useState({
        top5: props.top5kk,
        kk: parseInt(moment(new Date()).format('MM')),
        yyyy: parseInt(moment(new Date()).format('YYYY'))
    });

    // Päivittää highScoren käynnistämällä yläpuolella olevan function--Laura
    useEffect(() => {
        setScore({ ...score, top5: props.top5kk })
        //eslint-disable-next-line
    }, [props.top5kk]) 

    // console.log(this.props.top5kk)
    return (
        <div>
            <h1>Tämän kuukauden Top-5 Pisteet</h1>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th className="kayttajaNimi">Käyttäjä</th><th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {score.top5.map(t => (<tr className="topViis" key={t.id}><td className="kayttajaNimi">{t.nimi}</td><td>{t.pisteet}</td></tr>))}
                </tbody>
            </table>
        </div>
    );

}