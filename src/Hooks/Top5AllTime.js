import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function Top5AllTime(props) {
    const [score, setScore] = useState({
        top: props.top5,
        kk: parseInt(moment(new Date()).format('MM')),
        yyyy: parseInt(moment(new Date()).format('YYYY'))
    });

    // Päivittää highScoren käynnistämällä yläpuolella olevan function--Laura
    useEffect(() => {
        setScore({ ...score, top: props.top5 })
        //eslint-disable-next-line
    }, [props.top5])

    return (
        <div>
            <h1>Top-5 käyttäjät</h1>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th className="kayttajaNimi">Käyttäjä</th><th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {score.top.map(t => (<tr className="topViis" key={t.kayttaja_id}><td className="kayttajaNimi">{t.nimi}</td><td>{t.maximit}</td></tr>))}

                </tbody>
            </table>
        </div>
    );

}