var numberToFind = 0;
var attemps = 0; 
var myDiv = document.getElementById("alert");
myDiv.addEventListener("DOMSubtreeModified", function () {
    myDiv.classList.add("blink");
    setTimeout(function() {
        myDiv.classList.remove("blink");
    }, 500);
});

// gera um número aleatório
function refresh(){
    attemps=0;
    numberToFind = parseInt(Math.random()*100);
    document.getElementById('bet').value = "";
    document.getElementById('bet').type = "text";    
    document.getElementById('alert').innerHTML = "Comece escolhendo um número!";
}

// Verificação do número digitado
function verifyNumber(){
    var bet = document.getElementById('bet').value;
    
    if (bet > 100 || bet <1){
        alert('Aposta Inválida');
        return;
    }
    
    if (bet > numberToFind){
        attemps++;
        myDiv.style.color = "blue";
        document.getElementById('alert').innerHTML = "O número para ser encontrado é Menor";
    } else if (bet < numberToFind){
        attemps++;
        myDiv.style.color = "red";
        document.getElementById('alert').innerHTML = "O número para ser encontrado é Maior";
    } else{
        alert('Parabéns! Você acertou!! Com '
         +attemps + ' Tentativas.');
        refresh();
    }
}


refresh();
