import axios from 'axios';
import moment from 'moment';

let url = 'http://localhost:8000/api/quiz';

let pisteet = parseInt(sessionStorage.getItem("pisteet"));
//var nimi = sessionStorage.getItem("1");
//let pvm = moment(new Date()).format('YYYY-MM-DD');
let uudetPisteet = {
    nimi: sessionStorage.getItem("1"),
    pisteet: pisteet,
    pvm: moment(new Date()).format('YYYY-MM-DD')
}


export async function tarkista(oikein, id) {
    if (oikein == 'true' && pisteet < 5) {
        //uusi kysymys
        sessionStorage.removeItem('pisteet');
        pisteet = pisteet + 1;
        sessionStorage.setItem("pisteet", pisteet);
        if (pisteet === 5) {
            uudetPisteet.nimi = sessionStorage.getItem("1");
            uudetPisteet.pisteet = pisteet;
            uudetPisteet.pvm = moment(new Date()).format('YYYY-MM-DD');
            postPelitulos(uudetPisteet);
            gameOver(); //siirrä peli loppui komponenttiin/sivulle
        } else {
            let uusikysymys = await haeKysymys(id);
            return uusikysymys;
        }
        // redirect uusikysymys if 5 kysymystä oikein = gameover + post score.abs
    } else {
        //game over ja pisteet
        // gameover + post score
            uudetPisteet.nimi = sessionStorage.getItem("1");
            uudetPisteet.pisteet = parseInt(75*(sessionStorage.getItem("pisteet")));
            uudetPisteet.pvm = moment(new Date()).format('YYYY-MM-DD');
            postPelitulos(uudetPisteet);
            gameOver(); //siirrä peli loppui komponenttiin/sivulle
        
    }}


export function kirjaudu(nimi) {
    if (!nimi) {
        console.log('nimi puuttuu');
        sessionStorage.clear();
        return
    } else {
        //lähetä nimi palvelimelle ja siirry pelisivulle
        postKayttaja({ nimi: nimi });
        sessionStorage.setItem("1", nimi);
        sessionStorage.setItem("pisteet", 0);
        //kerätään käyttäjältä tieto ja laitetaan se sessionstorageen myöhempää käyttöä varten -Oskari
        return (window.location.href = "/kysymykset")
    }
}

async function postKayttaja(nimi) {
    //lisää käyttäjä tietokantaan
    await axios.post(`${url}/kayttajat`, nimi)
        .then(res => {
            return res.data;
        });
}
//Laura
export const haeHighScore = async () => {
    let scoret = await axios.get(`${url}/pisteet`)
    return scoret.data;
}
//Laura
export const haeAllTimeHighScore = async () => {
    let scoret = await axios.get(`${url}/kaikkipisteet`)
    return scoret.data;
}
//Laura tehnyt
export const haeKuukaudenTimeHighScore = async (kk, yyyy) => {
    let scoret = await axios.get(`${url}/pisteet/${kk}/${yyyy}`)
    return scoret.data;
}

async function postPelitulos(uudetPisteet) {
    //lisää käyttäjä tietokantaan
    await axios.post(`${url}/pisteet`, uudetPisteet)
        .then(res => {
            return res.data;
        });
}

//Lauran
export const haeKysymys = async (id) => {
    let kysymys = await axios.get(`${url}/kysymykset/${id}`)
    return kysymys.data;
}

export const gameOver = async () => {
    return (window.location.href = "/gameover")
}
 export const etusivulle = () => {
    sessionStorage.clear();
    return (window.location.href = "/");
    }

export const haeKysymysnumberot = async () => {
    let kysymys = await axios.get(`${url}/kysymysmaara`)
    // console.log(kysymys.data)
    return kysymys.data;
}
