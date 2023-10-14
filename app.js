let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 
exibirMensagemInicial();
console.log(numeroSecreto);

function verificarChute() {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let chute = document.querySelector('input').value;
    let mensagemTentativas = `Você descobriu o número secreto em apenas ${tentativas} ${palavraTentativa}!`;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1',`Acertou!`);
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute > numeroSecreto){
            exibirTextoNaTela('p',`O chute ${chute} é maior que o número secreto`);
    } else {
        exibirTextoNaTela('p',`O chute ${chute} é menor que o número secreto`);
    }
    tentativas++;
    limparCampo();
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entra 1 e 10');
}

function gerarNumeroAleatorio() {
    let quantidadeElementosLista = listaDeNumerosSorteados.length;
    let numeroEscolhido =  parseInt(Math.round(Math.random()*numeroLimite));

    if (quantidadeElementosLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciar(){
    exibirMensagemInicial();
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    tentativas = 0;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}