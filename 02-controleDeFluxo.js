/*
  01 - Suba o seu servidor local e:

  - Armazene em uma constante "my3FavoriteTVShows" suas 3 séries favoritas;
  - Se você não assiste séries, armazene seus 3 filmes favoritos;
  - Armazene em uma constante "sentence" a frase abaixo, modificando "SÉRIE_01,  
    SÉRIE_02 e SÉRIE_03" para as suas séries favoritas;
  - O "e" antes do nome da última série deve ser mantido;
  - Forme essa frase sem digitar o nome das séries (claro) e sem utilizar  
    a notação "array[index]";
  - Exiba a frase no console.

  "Minhas 3 séries favoritas são: SÉRIE_01, SÉRIE_02 e SÉRIE_03."
*/
const my3FavoriteTVShows = [
  "Game of thrones",
  "Um maluco no pedaço",
  "Todo mundo odeia o Cris",
];
const sentence = `Minhas 3 séries favoritas são: ${my3FavoriteTVShows
  .slice(0, 2)
  .join(", ")} e ${my3FavoriteTVShows.slice(2)}`;
//console.log(sentence);

//let array = [2, 1010, "ola"];
/*
  02 - Comente o console.log() acima e:

  - Exiba no console um boolean indicando se o array de séries que você criou  
    possui 3 itens.
*/

let verdad = my3FavoriteTVShows.length === 3;
//console.log(verdad);

/*
  03 - Comente o console.log() acima e:

  - Após a constante abaixo, armazene em uma constante "isRandomTVShowIncluded"  
    um boolean que indica se a série que a "randomTVShow" armazena é uma das  
    suas 3 séries favoritas;
  - Utilize o método adequado para fazer essa verificação;
  - Exiba no console o boolean que a "isRandomTVShowIncluded" recebeu.
*/

const randomTVShow = "Watchmen";
const getWatchmen = my3FavoriteTVShows.includes("Watchmen");
//console.log(getWatchmen);
/*
  04 - Comente o console.log() acima e:

  - Armazene a frase abaixo em uma constante "typeSentence", substituindo  
    "TIPO_DE_DADO" pela informação correta;
  - Utilize o operador adequado para gerar essa informação;
  - Exiba a "typeSentence" no console.

  "O tipo de dado que a const "isRandomTVShowIncluded" armazena é: TIPO_DE_DADO."
*/
const typeSentence = `O tipo de dado que a const "isRandomTVShowIncluded" armazena é: ${typeof randomTVShow}.`;
//console.log(typeSentence);
/*
  05 - Comente o console.log() acima e:

  - Exiba a frase abaixo no console, substituindo "NÚMERO_DE_CARACTERES" por 39  
    e "BOOLEAN" pela informação correta (true ou false);
  - Converta explicitamente este boolean em uma string ao inserí-lo na frase;
  - A 1ª letra do boolean deve ser maiúscula;
  - Dica: se você perceber que está repetindo o mesmo número na string, cogite  
    armazenar este número em uma constante e usá-la na frase.

  "A string que a "typeSentence" armazena tem mais de NÚMERO_DE_CARACTERES  
  caracteres? BOOLEAN."
*/
const output = `A string que a "typeSentence" armazena tem mais de 39
caracteres? ${String(typeSentence.length > 39).replace("t", "T")}`;
//console.log(output);

/*
  06 - Comente o console.log() acima e:

  - Após a constante "falsyValues", exiba no console a frase abaixo,  
    substituindo "NÚMERO_DE_ITENS" e "BOOLEAN" pelas informações corretas.

  "Todos os NÚMERO_DE_ITENS itens do array "falsyValues" são falsy. Inclusive o  
  BOOLEAN."
*/

const falsyValues = [0, "", false, "", ``, null, undefined, NaN];

//console.log(`"Todos os ${falsyValues.length} itens do array "falsyValues" são falsy. Inclusive o  ${String(falsyValues[2])}."`);

/*
  07 - Comente o console.log() acima e:

  - Armazene em uma constante "crazyOperation" a soma entre null e 1;
  - Armazene em uma constante "crazyConversion" a conversão da "crazyOperation"  
    em boolean.
  - Você sabe por que essa conversão resultou em true?
*/
const crazyOperation = null + 1;
const crazyConversion = Boolean(crazyOperation);
//console.log(crazyConversion);
/*
  08 - Comente o console.log() acima e:

  - Armazene em uma constante "ages" um array com os números 31, 82, 61 e 11;
  - Armazene em uma constante "agesSum" a soma entre 1º e 3º itens do array  
    "ages";
  - Exiba a frase abaixo no console, substituindo "BOOLEAN" pela informação  
    correta.

  "A soma entre o 1º e o 3º item de "ages" é menor ou igual a 92. Essa afirmação  
  é: BOOLEAN."
*/
const ages = [31, 82, 61, 11];
const agesSum = ages[0] + ages[2];
//console.log(`A soma entre o 1º e o 3º item de "ages" é menor ou igual a 92. Essa afirmação  é: ${agesSum <= 92}.`);
/*
  09 - Comente o console.log() acima e:

  - Armazene em uma const "isNotAString" uma expressão que verifica se o tipo de  
    dado que a "randomTVShow" armazena não é uma string;
  - Essa expressão deve resultar em false.
  - Exiba a "isNotAString" no console.
*/
const isNotAString = typeof randomTVShow !== "string";
//console.log(isNotAString);
/*
  10 - Comente o console.log() acima e:

  - Abaixo da constante "evenNumbers", exiba no console um boolean que indica se  
    o número 8 existe no array;
  - Não utilize o método includes desta vez.
*/

const evenNumbers = [0, 2, 4, 6, 8, 10];
const get8 = evenNumbers.indexOf(8);
console.log(get8 !== -1);


/*
  Aviso: se você executar, acidentalmente, um loop infinito, faça o seguinte:
  
  - Feche o navegador;
  - Desconecte o servidor;
  - Modifique o seu código para que o looping infinito não aconteça;
  - E só então, levante o servidor novamente.
*/

/*
  01

  - Utilizando um while loop, exiba no console todos os números entre 0 e 5,  
    inclusive esses dois.
  - O resultado deve ser:
    0
    1
    2
    3
    4
    5
*/
// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

/*
  02 - Comente a declaração da let e o loop acima e:

  - Utilizando um for loop, faça o mesmo que foi pedido no exercício 01.
*/
// for(let i = 0; i <= 5; i++){
//   console.log(i)
// }
/*
  03 - Comente o loop acima e:

  - Escreva um loop (for ou while) que exiba a frase abaixo no console;
  - Substitua o "X" pela informação correta;
  - "X" deve começar em 1 na 1ª exibição da frase e em 10 na última;
  - Exiba a frase 10x no console.

  "Esta é a Xª vez que esta frase é exibida no console."
*/
// for(let i = 1; i <= 10; i++){
//   console.log(`Esta é a ${i}ª vez que esta frase é exibida no console.`)
// }
/*
  04 - Comente o loop acima e:

  - Abaixo da constante "cities", declare uma let "upperCaseCities" e atribua à  
    ela um array vazio;
  - Adicione no array que a "upperCaseCities" armazena as cidades do array  
    cities com todas as letras maiúsculas, utilizando o for loop.
  - Para ver se deu certo, exiba o upperCaseCities no console.
*/

const cities = ["São Paulo", "Rio de Janeiro", "Minas Gerais"];
let upperCaseCities = []
for(let i = 0; i < cities.length; i++){
    upperCaseCities.push(cities[i].toUpperCase())
}
// console.log(upperCaseCities)
/*
  05 - Comente o console.log acima e:

  - Após a const names, utilize um for loop para gerar um template HTML;
  - Exiba no console o template HTML que você gerou;
  - O template deve ser exibido apenas uma vez no console e o resultado deve ser:
    <li>João Grilo</li><li>Chicó</li><li>Rosinha</li>
*/

const names = ["João Grilo", "Chicó", "Rosinha"];
let HTMLTemplate = ''
for(let i = 0; i < names.length; i++){
   HTMLTemplate += `<li>${names[i]}</li>`
}
// console.log(HTMLTemplate)

/*
  06 - Comente o console.log acima e:

  - Após a const numbers, utilize um for loop para somar todos os números do  
    array;
  - Exiba no console um boolean indicando se o total dessa soma é 337;
  - O console deve exibir true.
*/

const numbers = ["91", "5", "30", "97", "83", "31"];
let sum = 0;
for(let i =0; i < numbers.length; i++){
  sum += Number(numbers[i])
}
//console.log(sum === 337)
/*
  07 - Comente o console.log acima.

  Este exercício é um pouco mais complexo que os anteriores. Não se preocupe  
  muito caso você não acerte ele. Apenas tente resolvê-lo com o conhecimento  
  adquirido até aqui.

  - O JavaScript permite você criar arrays dentro de um outro array. Isso é  
    chamado de aninhamento de arrays, ou nested arrays em inglês. Por isso, o  
    array "arrays" abaixo é uma sintaxe válida.
    Cada array dentro do array  "arrays" é um item;
  - Abaixo do array "arrays", utilizando o for loop, some todos os números  
    destes arrays.
  - Após o for, exiba no console o resultado, que deve ser 218.

  Dica: você pode colocar um loop dentro do outro, ou seja, aninhá-los. =)
*/

const arrays = [
  [4, 32, 8],
  [64, 8, 32],
  [8, 32, 16],
  [2, 8, 4],
];
// let sum = 0
// for(let i = 0; i < arrays.length; i++){
//   for(let j = 0; j < arrays[j].length; j++){
//     sum += arrays[i][j]
//   }
// }
// let i = 0
// let j = 0
// while(i < arrays.length){
//   while(j < arrays[j].length){
//     sum += arrays[i][j]
//   j++
//   }j = 0;
// i++
// }
//console.log(sum)

/*
  - A partir deste exercício, você está livre para escolher os nomes das suas  
    variáveis e constantes!

  - Após resolver cada exercício, tente reescrever partes do seu código para  
    deixá-lo mais legível.
    
    Por exemplo, uma expressão typeof crazyArray[i] === 'boolean' pode ser  
    armazenada em uma constante "isItemABoolean".

    Falaremos mais sobre legibilidade na revisão destes exercícios =)
*/

/*
  01

  - Abaixo do array "fruits", verifique se "abacaxi" existe no array. Se  
    existir, exiba no console a mensagem "A string "abacaxi" existe no array  
    fruits.";
  - Se "abacaxi" não existir, verifique se "pera" existe no array. Se existir,  
    exiba no console a mensagem "A string "pera" existe no array fruits.";
  - Se nenhuma das duas frutas existirem no array, exiba no console a mensagem  
    "Nem pera nem abacaxi existem no array "fruits".".
*/

// const fruits = ['morango', 'banana', 'mamão']
//         if (fruits.includes('abacaxi')) {
//           console.log(`A string "abacaxi" existe no array fruits.`)
//         } 
//         else if (fruits.includes('pera')) {
//           console.log(`A string "pera" existe no array fruits.`)
//         } 
//         else{
//           console.log(`Nem pera nem abacaxi existem no array "fruits`)
//         }

/*
  02

  - Armazene em uma constante apenas a hora atual na qual você está fazendo este  
    exercício. Ex.: 18;
  - À partir das 6, exiba "Bom dia!" no console;
  - À partir das 12, exiba "Boa tarde!";
  - À partir das 18, exiba "Boa noite!".

  Obs.: tanto a expressão do lado esquerdo quanto a do lado direito do operador  
  lógico precisam ter a constante especificada. Exemplo: hour > x && hour < y.
*/
// const hour = 18
// const isMorning = hour <= 11
// const isAfternoon = hour >= 12 && hour < 18  
// if (isMorning) {
//   console.log("Bom dia")
// } else if (isAfternoon) {
//   console.log("Boa Tarde")
//   } else {
//       console.log("Boa noite")
//     }  
/*
  03

  - Armazene sua idade em uma constante;
  - Escreva uma estrutura condicional em que, se a idade é 7 anos ou menos, ou  
    se a idade é 65 anos ou mais, a frase ";
  - Se a idade não atende às condições acima, a variável deve armazenar a  
    mensagem "A entrada é R$ 30,00.";
  - Exiba a mensagem no console;
  - Agora, teste diferentes idades para se certificar que a condição do `if`  
    também está funcionando.
*/
// const age = 35
// let ticketMsg = null
// const isChild = age <= 7 
// const isOlder = age >= 65
//  if (isChild || isOlder){
//     ticketMsg = "Para você, a entrada é grátis!"
//  } else{
//     ticketMsg = "A entrada é R$ 30,00"
//   }

// console.log(ticketMsg)

/*
  04

  - Utilize um for loop para gerar um novo array com apenas os números entre  
    11 e 90 presentes no array "numbers" (incluindo 11 e 90);
  - Exiba o novo array no console;
  - O resultado deve ser: [34, 46, 90, 25, 11, 89, 76].
*/

// const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99]
// let getNumbers = []
// for(let i = 0; i < numbers.length; i++){
//   if(numbers[i] >= 11 && numbers[i] <= 90){
//     getNumbers.push(numbers[i])
//   }
// }
// console.log(getNumbers)
/*
  05

  - O array "crazyArray" (abaixo) possui 3 tipos de dados: numbers, booleans  
    e strings;
  - Considerando este array, substitua os "X" da frase abaixo pelas informações  
    corretas;
  - Gere essas informações à partir de um for loop;
  - Exiba a frase no console.

  "O crazyArray tem X booleans, X números e X strings."
*/

// let countNumbers = 0
// let countBooleans = 0
// let countStrings = 0

// const crazyArray = [true, 869, 'oi', 71, false, 83, '35', true, 397, 'js', false]
// for(let i = 0; i < crazyArray.length; i++){
//     if(typeof crazyArray[i] === 'number'){
//       countNumbers++
//     } else if(typeof crazyArray[i] === 'string'){
//       countStrings++
//       } else{
//           countBooleans++
//         }
// }
// console.log(`O crazyArray tem ${countBooleans} booleans, ${countNumbers} números e ${countStrings} strings.`)

/*
  06

  - Abaixo do array "randomNumbers", utilize um for loop para gerar 2 novos  
    arrays: um array com apenas os números ímpares do "randomNumbers" e um outro  
    array com apenas os números pares;
  - Após isso, utilizando os dois arrays que você criou, exiba a frase abaixo  
    no console, substituindo "XX, XX e XX" pelos números corretos. Os números  
    da frase não devem ser inseridos com a notação "item[index]" e os "e" antes  
    do último número ímpar e do último número par devem constar na frase;
  
  - Dica: para saber se um número é par, o restante da divisão dele por 2 deve  
    ser 0.

  "Numeros ímpares: XX, XX e XX. Números pares: XX, XX e XX."
*/

const randomNumbers = [73, 4, 67, 10, 31, 58]
let getEven = []
let getOdd = []
for (let i = 0; i < randomNumbers.length; i++) {
  const number = randomNumbers[i]
  const isEven = randomNumbers[i] % 2 === 0

  if (isEven) {
    getEven.push(number)
  } else {
    getOdd.push(number)
  }
}

console.log(`Numeros ímpares: ${getOdd.slice(0, getOdd.length - 1).join(', ')} e ${getOdd.slice(getOdd.length - 1)}. Números pares: ${getEven.slice(0, 2).join(', ')} e ${getEven.slice(getEven.length - 1)}`)