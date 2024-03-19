let pastsort = 0;

function bet(){
    return Math.floor(Math.random() * 20) + 1;
}

document.querySelector('#button').addEventListener('click', function() {
    var numuser = parseInt(document.querySelector('#number').value);
    var sort = bet();

    if (pastsort !== 0) {
        sort = pastsort + bet();
    } else {
        sort = bet();
    }

    pastsort = sort;

    document.querySelector('#result').textContent = `Você digitou o número ${numuser} e o número sorteado foi ${sort}.`;
    
    if (numuser === sort) {
        document.querySelector('#draw').textContent = "Parabéns, você venceu o jogo!";
    } else {
        document.querySelector('#draw').textContent = "Você errou, tente um outro número.";
    }

    if (sort >= 100) {
        document.querySelector('#draw').textContent = "VITÓRIA DO COMPUTADOR!! Suas tentativas acabaram."
    }

    if (sort === 99) {
        document.querySelector('#result').textContent = "Você não tem mais condições de vencer o jogo";
    }

});

function update() {
    location.reload();
}





