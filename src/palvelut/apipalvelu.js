import React from 'react';
import { Redirect } from 'react-router-dom';
import KysymyksetComponent from '../Komponentit/KysymyksetComponent';
//let url = 'http://localhost:;

export function tarkista(oikein) {
    if(oikein) {
        //uusi kysymys
        console.log(oikein);
    } else {
        //game over ja pisteet
        console.log(oikein);
    }
}

export const kirjaudu = (nimi) => {

    if (! nimi) {
        console.log('nimi puuttuu');
        //ilmoita käyttäjälle nimimerkin puuttuminen

        return <p kirjauduSetInnerHTML="kirjaudu">NIMI PUUTTUU</p>
    } else {
        //lähetä tieto palvelimelle
        console.log(nimi);
        return <Redirect to="/kysymykset" component={KysymyksetComponent} />
        
    }
}