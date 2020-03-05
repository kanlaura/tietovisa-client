import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function KuukaudenScoret(props) {
    const [score, setScore] = useState({
        top5: props.top5kk,
        kk: parseInt(moment(new Date).format('MM')),
        yyyy: parseInt(moment(new Date).format('YYYY'))
    });

    // Päivittää highScoren käynnistämällä yläpuolella olevan function--Laura
    useEffect(() => {
        setScore({ ...score, top5: props.top5kk })

    }, [props.top5kk])

    // console.log(this.props.top5kk)
    return (
        <div>
            <h1>Kuukauden Top-5 Pisteet</h1>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Käyttäjä</th><th>Score</th><th>Päivämäärä</th>
                    </tr>
                </thead>
                <tbody>
                    {score.top5.map(t => (<tr key={t.id}><td>{t.nimi}</td><td>{t.pisteet}</td><td>{moment(t.pvm).format('DD.MM.YYYY')}</td></tr>))}
                </tbody>
            </table>
        </div>
    );

}