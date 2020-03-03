
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

export function kirjaudu(nimi) {
    if (! nimi) {
        console.log('nimi puuttuu');
        return "nimi puttuu";
    } else {
        //lähetä tieto palvelimelle
        console.log(nimi);
        return {nimi};
    }
}