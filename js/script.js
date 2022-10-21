function storeForm(){
    const nome = document.getElementById("nome").value;
    console.log(nome);

    const km = document.getElementById('km').value;
    console.log(km);

    const eta = document.getElementById('eta').value;
    console.log(eta);
    
    document.getElementById('nome-out').innerHTML = nome;
    document.getElementById('km-out').innerHTML = km;

    var prezzo = km * 0.24;
    console.log('Prezzo senza sconti:' + prezzo);

    if (age = 'minorenne' ){
        var prezzo = prezzo - (prezzo * 0.2 )
        var prezzo = prezzo.toFixed(2);
        document.getElementById('tipo').innerHTML = 'Biglietto ridotto per minore';
        document.getElementById('prezzo').innerHTML = prezzo;

    }else if (age = 'over-65'){
        var prezzo = prezzo - (prezzo * 0.4 )
        var prezzo = prezzo.toFixed(2);
        document.getElementById('tipo').innerHTML = 'Biglietto ridotto per over 65';
        document.getElementById('prezzo').innerHTML = prezzo;

        }else{
            document.getElementById('prezzo').innerHTML = prezzo;
            document.getElementById('tipo').innerHTML = 'Biglietto standard';
        }
    
    console.log('Prezzo con sconti (se presenti):' + prezzo)
}

