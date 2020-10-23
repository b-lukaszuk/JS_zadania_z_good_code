// inspiracja za: Good Code - Karola Rogowskiego
// https://www.youtube.com/watch?v=EP4QE1CjPGQ
// skorzystalem z zachety (1:22-1:30) i robie samodzielnie 

// piszemy funkcje rysujace tzw. trojkat Pascala

/** 
* f. pom - przyjmuje elt tablicy zwraca ten elt lub 0 (jesli otrzyma undefined)
* @param {Number} eltTabl - element tablicy (Int lub undefined)
* @return {Number} eltTabl lub 0 (bo np. tab[-1] da undefined)
*/
function eltLub0(eltTbl) {
    if (eltTbl === undefined) {
        return 0;
    } else {
        return eltTbl;
    }
}
/** 
* przyjmuje poziom 'i' (co najmniej [1]) trojkata Pascala i zwraca poziom 'i+1'
* @param {Array<Number>} poprzPoz - poziom i tr Pascala, np. [1, 1]
* @return {Array<Number>} nastPoz - poziom i tr Pascala, np. [1, 2, 1]
*/
function getNastPoz(poprzPoz = [1]) {
    let nastPoz = [];
    // nastepny poziom to length +1 
    for (let i = 0; i < (poprzPoz.length + 1); i++) {
        if (i === 0) { // po brzegach zawsze 1
            nastPoz.push(1);
        } else if (i === poprzPoz.length) { // po brzegach zawsze 1
            nastPoz.push(1);
        } else {
            nastPoz.push(eltLub0(poprzPoz[i - 1]) + poprzPoz[i]);
        }
    }
    return nastPoz;
}

/** 
* zwraca trojkat Pascala (tablica tablic)
* @param {Number} n_poz - ilosc poz trPasc do narysowania (indexowanie od 0)
* @return {Array<Array<Number>>} tr. Pascala (tablica tablic (kazda 1 poz))
*/
function getTrPasc(n_poz = 3) {
    let trPasc = [[1]];
    if (!n_poz) { // jesli n_poz === 0
        return trPasc[0];
    } else {
        for (let i = 1; i < (n_poz + 1); i++) {
            trPasc.push(getNastPoz(trPasc[i - 1]));
        }
    }
    return trPasc;
}

/** 
* jako tako drukuje dany poziom tr. Pascal-a (dodaje padding po obu stronach)
* @param {Array<Number>} poziom - tabela liczb
* @param {Number} n_poziomu - numer (int) akt. druk. poziomu (0 - n_poziomow)
* @param {Number} n_poziomow - calkowita liczba (int) poz. w danym trPascal-a
* @return {String} dany poz tr Pascal-a z paddingiem (spacje) po obu stronach
*/
function printPoziom(poziom, n_poziomu, n_poziomow) {
    let nSpacji = 0;
    if (n_poziomu !== n_poziomow) {
        nSpacji = Math.floor((n_poziomow - n_poziomu) / 2);
    }
    let spacje = " ".repeat(nSpacji);
    return spacje + poziom.toString() + spacje;
}

/** 
* jak tako drukuje trojkat Pascala (tablice tablic)
* @param {Array<Array<Number>>} trPasc - tr. Pascala (tablica tablic)
*/
function printTrPasc(trPasc) {
    let dlCalk = trPasc.length;
    for (let i = 0; i < dlCalk; i++) {
        console.log(printPoziom(trPasc[i], i, dlCalk), "\n");
    }
}

printTrPasc(getTrPasc(10));
