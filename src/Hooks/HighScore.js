import React, { useState, useEffect } from 'react';
import { haeHighScore, haeAllTimeHighScore, haeKuukaudenTimeHighScore, haeKysymys } from '../palvelut/apipalvelu';
import moment from 'moment';
import KuukaudenScoret from './KuukaudenScoret';
import Top5AllTime from './Top5AllTime';
import Top20AllTime from './Top20AllTime';

export default function HighScore() {
    const [score, setScore] = useState({
        top5: [],
        top20: [],
        top5kk: [],
        kk: parseInt(moment(new Date()).format('MM')),
        yyyy: parseInt(moment(new Date()).format('YYYY')),
        showtop5: true,
        showtop20: false,
        showtopkk: false
    });

    //Hakee score-datat apipalvelut.js:n kautta tietokannasta--Laura
    const haeScoret = async () => {
        const topScoret = await haeHighScore();
        const allScoret = await haeAllTimeHighScore();
        const kuukaudenScoret = await haeKuukaudenTimeHighScore(score.kk, score.yyyy);
        setScore({ ...score, top5: topScoret, top20: allScoret, top5kk: kuukaudenScoret })
    }

    //Päivittää highScoren käynnistämällä yläpuolella olevan function--Laura
    useEffect(() => {
        haeScoret()
    }, []);

    const naytaTop5 = () => {
        setScore({ ...score, showtop5: true, showtop20: false, showtopkk: false })
    }

    const naytaTop20 = () => {
        setScore({ ...score, showtop20: true, showtop5: false, showtopkk: false })
    }

    const naytaKKTop5 = () => {
        setScore({ ...score, showtopkk: true, showtop20: false, showtop5: false })
    }

    const top5AllTime = score.showtop5 ? < Top5AllTime top5={score.top5} /> : null
    const KuukaudenTop5 = score.showtopkk ? < KuukaudenScoret top5kk={score.top5kk} /> : null
    const top20AllTime = score.showtop20 ? < Top20AllTime top20={score.top20} /> : null

    // let kysymysIdy = []
    // const generoiKysymys = async () => {
    //     if (kysymysIdy.length === 5) {
    //         kysymysIdy = []
    //         let kysymys = await haeKysymys();
    //         kysymysIdy.push(kysymys[0].id)
    //     }
    //     else if (kysymysIdy.length === 0) {
    //         let kysymys = await haeKysymys();
    //         kysymysIdy.push(kysymys[0].id)
    //     } else {
    //         let kysymys = await haeKysymys()
    //         if (kysymysIdy[0] === kysymys[0].id || kysymysIdy[1] === kysymys[0].id || kysymysIdy[2] === kysymys[0].id || kysymysIdy[3] === kysymys[0].id || kysymysIdy[4] === kysymys[0].id) { 
    //         } else {
    //             kysymysIdy.push(kysymys[0].id) 
    //         }
    //     }
    //     console.log(kysymysIdy);
    // }

    return (
        <div>
            <h1>High scoret</h1>
            <button type="button" onClick={naytaTop5}>Top5</button>
            <button type="button" onClick={naytaKKTop5}>Kuukaude top</button>
            <button type="button" onClick={naytaTop20}>Top20</button>
            {top5AllTime}
            {KuukaudenTop5}
            {top20AllTime}
        </div>
    );

}