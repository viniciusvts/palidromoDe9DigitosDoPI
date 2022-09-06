document.addEventListener('DOMContentLoaded', DOMContentLoaded);
function DOMContentLoaded(){
    const digitosDoPalindromo = 9;
    procuraPalidromoEPalindromo(digitosDoPalindromo);
}
function procuraPalidromoEPalindromo(digitos){
    show('Iniciando os dados');
    const piDiv = document.getElementById('pi');
    const piSemEspacosOuPontos = piDiv.innerText.replace(/\D/g,"");
    const totalDeCaracteresDePi = piSemEspacosOuPontos.length
    show('Quantidade de caracteres do número: ', totalDeCaracteresDePi);
    const ultimoCaratereAVerificar = totalDeCaracteresDePi - digitos;
    show('Serão ', ultimoCaratereAVerificar, ' tentativas');
    show('Verificando se é palindromo ...');
    show('Tentando ...');
    for (let i = 0; i <= ultimoCaratereAVerificar; i++) {
        let textDigits = piSemEspacosOuPontos.substring(i, i+digitos);
        if(!isPalindromo(textDigits)) continue;
        if (isPrimo(Number(textDigits))) show('Tentativa n°:', i, textDigits, 'é palindromo e primo!');
    }
    show('Terminado');
}
function show(...text){
    const liElement = document.createElement('li');
    liElement.append(text.join(' '));
    const list = document.getElementById('lista');
    list.appendChild(liElement)
}
function showAtt(...text){
    const list = document.getElementById('lista');
    const ultimoFilho = list.lastChild;
    ultimoFilho.innerText = text.join(' ');
}
/**
 * Verifica se uma string é palindromo
 * @param {string} txt 
 */
function isPalindromo(txt){
    const posicaoDoUltimoCaractere = txt.length - 1;
    for (let i = 0; i <= posicaoDoUltimoCaractere; i++) {
        let isCaractereIgual = txt.charAt(i) == txt.charAt(posicaoDoUltimoCaractere-i);
        if(!isCaractereIgual) return false;
    }
    return true;
}
/**
 * Verifica se um número é primo
 * @param {number} txt 
 */
function isPrimo(num){
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}
