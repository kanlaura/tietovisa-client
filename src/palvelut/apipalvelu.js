import React from 'react';
import  { Redirect } from 'react-router-dom';
import { render } from '@testing-library/react';
import axios from 'axios';
import KysymyksetComponent from '../Komponentit/KysymyksetComponent';

let url = 'http://localhost:8000/api/quiz';


export function tarkista(oikein) {
    if(oikein) {
        //uusi kysymys
        console.log(oikein);
    } else {
        //game over ja pisteet
        console.log(oikein);
    }
}

export function kirjaudu(nimi) {
    if (!nimi) {
        console.log('nimi puuttuu');
        return 
    } else {
        //lähetä nimi palvelimelle ja siirry pelisivulle
        postKayttaja({nimi: nimi});
        sessionStorage.clear();
        sessionStorage.setItem("1", nimi);
    return(  window.location.href="/kysymykset" )
}}

async function postKayttaja(nimi) {
    //lisää käyttäjä tietokantaan
    await axios.post(`${url}/kayttajat`, nimi)
    .then(res => {
        return res.data;
    });
 }