


// Teste um

console.log('Bem vindo de Volta!');

let nome = 'Felmarch';
console.log(`Seja bem Vindo ${nome}`);




// Iremos aqui passar os exercicios de Nocoes basicas de funcionamento(Function)

// 1 Escreva uma função chamada `f` add7que receba um número e retorne esse número + 7. add7(10)deve retornar17


function adicionar7(num) {
    return num + 7;
}
console.log(adicionar7(10));

// multiply - recebe dois numeros, retorna o produto

function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 2));

// capitalize- manipular letras

function capt(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capt('abcd'));
console.log(capt('ABCD'));
console.log(capt('aBcD'));

// lastLetter` que receba uma string e retorne a última letra dessa string

function lastLetter(str) {
    return str[str.length - 1];
}
console.log(lastLetter('abcd'));


// exercicios praticos do loop
// exibir pares de 2 a 10

for (let numeroPar = 2; numeroPar <= 10; numeroPar++) {
    if (numeroPar % 2 == 0) {
        console.log('o numero par e: ' + numeroPar);
    }
}

// metodo 2, curto, otimizado porem nao eficas em certos casos, embora ganhe em performance

for (let numero = 2; numero <= 10; numero += 2) {
    console.log('o numero par e: ' + numero);
}

// 

let voltas = 0;
while (voltas < 3) {
    alert( `number ${voltas}!` );
    voltas++;
}

// 
let numeroInserido;
do{
    numeroInserido = prompt('Porfavor, Insira um numero maior que 100:', '');
} while (numeroInserido <= 100 && numeroInserido);

