// Activ01

// let numero = 0;
// while (numero < 11) {
//     console.log('Número é: ', numero);
//     numero++;

// } 

// --------------------------------------------------------------
// Activ02_tentativa sozinha.


// function soma_numeros() {
//     let soma = 0;

//     while (true) {
        
//         let entrada = prompt('Insira um número');
//         let numero = Number(entrada);
//         if (!isNaN == 0) break;

//             soma += numero
//         }
        

//         console.log('A soma dos números inseridos é: ', soma)
//     }
//     soma_numeros();

// ------------------------------------------------------------------

    
// Activ02 por Luan***

//     let soma = 0

//     while(true) {
//         let input = prompt (' Digite um número (ou um valor não numerico para parar)');

//         let num = parseFloat(input)

//         if (isNaN(num)) {
//             break;
//         }

//         soma += num

//         console.log(soma)
// }

// -------------------------------------------------------------------------

// Activ03


let gerarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10) + 1;
}
let adivinharNumero = () => {
    const numeroAleatorio = gerarNumeroAleatorio();
    let palpite;

    console.log("Bem-vindo ao jogo de adivinhação! Adivinhe um número entre 1 e 10.");

    while (true) {
        palpite = prompt("Digite seu palpite: ");

        if (palpite === null) {
            console.log("Jogo encerrado.");
            break;
        }

        palpite = Number(palpite);

        if (palpite === numeroAleatorio) {
            console.log("Parabéns! Você acertou o número.");
            break;
        } else {
            console.log("Errado, tente novamente.");
        }
    }
}


adivinharNumero();































    
    