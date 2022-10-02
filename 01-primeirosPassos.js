
// Declare uma const "myBirthYear", que recebe o ano do seu nascimento, com 4  
// dígitos. Ex.: 1930.

const myBirthYear = 1987;


// Declare uma const "currentYear", que recebe o ano atual, com 4 dígitos.

const currentYear = 2022;

// Exiba as const "myBirthYear" e "currentYear", lado a lado, no console do browser.

console.log(myBirthYear, currentYear);


//  Declare uma const "myAge", que recebe o ano atual subtraído pelo ano do seu  
// nascimento. Mas sem digitar os números manualmente.
// Você pode utilizar o sinal de menos (-) entre os dois valores e verificar o que  
// acontece. 
// - Exiba a "myAge" no console.

const myAge = currentYear - myBirthYear;
console.log(myAge);

// Antes do console.log abaixo, declare uma const "ten", que recebe o número 10 e:

// - Descomente o console.log;
// - Substitua a palavra "valor1" pelo ano atual somado à 10;
// - Substitua a palavra "valor2" pela sua idade somada à 10;
// - Os números não devem ser digitados manualmente;
// - Observe o resultado no console do browser.

// Não se assuste com as crases e os cifrões. Conversaremos mais sobre operações  
// matemáticas e strings (textos) em breve =)

const ten = 10;
console.log(`Em ${currentYear + ten}, estarei com ${myAge + ten} anos.`);

// Exiba a string 'Grandes poderes trazem grandes responsabilidades.' no console do browser.
// Utilize os espaços entre os comentários abaixo para executar os códigos dos exercícios. Inclusive este.

console.log("Grandes poderes trazem grandes responsabilidades.");

// Comente o console.log acima, e:
// - Armazene a palavra 'Tom' em uma constante "tom";
// - Armazene a palavra 'Hanks' em uma constante "firstTom";
// - Armazene a palavra 'Cruise' em uma constante "secondTom";
// - Declare uma constante "myFavoriteTom" que recebe nome, espaço, e sobrenome do Tom que você mais gosta;
// Exiba a "myFavoriteTom" no console do browser.

const tom = "Tom";
const firstTom = "Hanks";
const secondTom = "Cruise";
const myFavoriteTom = `Meu ${tom} preferido é o ${tom} ${secondTom} !`;
// myFavoriteTom = tom + ' ' + secondTom
//console.log(myFavoriteTom);

// Comente o console.log acima, e:

// - Armazene a palavra 'JavaScript' em uma constante "programmingLanguage";
// - Armazene a junção das letras "J" e "S", da programmingLanguage, em uma constante "js";
// - As letras não devem ser digitadas manualmente;
// - Exiba a "js" no console do browser;

const programmingLanguage = "JavaScript";
const js = programmingLanguage[0] + programmingLanguage[4];
//console.log(js);

// Comente o console.log acima, e,

// - Armazene, em uma constante "mdn", a junção das letras iniciais das 3 palavras que a constante "mozilla" armazena;
// - As iniciais não devem ser digitadas manualmente;
// - Exiba a "mdn" no console do browser;

const mozilla = "Mozilla Developer Network";
//const mdn = mozilla.slice(0, 3) + mozilla.slice(8, 11) + mozilla.slice(18, 21);
//coreção -->
mdn = mozilla[0] + mozilla[8] + mozilla[18];
//console.log(mdn);


//Comente o console.log acima, e,
//Exiba no console do browser a quantidade de caracteres que a constante "programmingLanguage" possui;

//console.log(programmingLanguage.length);

// Comente o console.log acima, e,

// - Exiba no console a última letra da string que a "randomWord" (abaixo) armazena, mas com a condição a seguir;
// - Ao invés de inserir manualmente a posição do último caractere, faça com que a obtenção da última letra funcione para qualquer palavra que a "randomWord" receber;
// - Dica: utilize a propriedade ".length".

let randomWord = "Araponga";
//console.log(randomWord[randomWord.length - 1]);

//  Comente o console.log acima, e,

// - Exiba, no console, a string que "summerMessage" (abaixo) armazena, 
// mas com todas as letras minúsculas;
// - Não modifique a string da "summerMessage";
// - Não digite a nova string manualmente.

const summerMessage = "O VERÃO CHEGA NESTE FIM DE SEMANA";
//console.log(summerMessage.toLowerCase());

// Comente o console.log acima, e,

// - Exiba, no console, a string que "winterMessage" (abaixo) armazena,
//  mas com todas as letras maiúsculas;
// - Não modifique a string da "winterMessage";
// - Não digite a nova string manualmente.

const winterMessage = "o inverno está chegando";
//console.log(winterMessage.toUpperCase());

// Comente o console.log acima, e,
// - Exiba, no console, o index do caractere "v" da "winterMessage";

//console.log(winterMessage.indexOf("v"));

// Comente o console.log acima, e,

// - Exiba, no console, o index da última ocorrência do caractere "n" da "winterMessage".

//console.log(winterMessage.lastIndexOf("n"));

// Comente o console.log acima, e,

// - Após a const "harryPotterAuthor" (abaixo), exiba no console 
// a parte "J.K." da string "harryPotterAuthor";
// - Não digite a string "J.K." manualmente;

const harryPotterAuthor = "J.K. Rowling";
//console.log(harryPotterAuthor.slice(0, 4));

// Comente o console.log acima, e,

// - Após a const "bestMovie" (abaixo), declare uma constante "realBestMovie";
// - Atribua à "realBestMovie" a mesma string da "bestMovie",
// mas substituindo o nome do filme para "Moonlight";
// - Exiba a "realBestMovie" no console.

const bestMovie = 'E o Oscar de melhor filme vai para: "La la land"!';
const realBestMovie = bestMovie.replace("La la land", "Moonlight");
//console.log(realBestMovie);

// Comente o console.log acima, e,

// - Abaixo deste comentário, 
// armazene o resto de 10 dividido por 3 em uma constante "reminder";
// - Exiba a reminder no console. O resultado deve ser 1;
const reminder = 10 % 3;
//console.log(reminder);

// Comente o console.log acima, e,

// - Abaixo da let "episodes", incremente o valor dela em 1;
// - Após o incremento, exiba a let "episodes" no console;
// - O valor exibido no console deve ser 7.

let episodes = 6;
episodes++;
// console.log(episodes);

// Comente o console.log acima, e,
// - Decremente a let "episodes" em 1;
// - Após o decremento, exiba a let "episodes" no console;
// - O valor exibido no console deve ser 6.
episodes -= 1;
//console.log(episodes);

// Comente o console.log acima, e,
// - Utilize o operador addition assignment 
// para atualizar o valor da let "episodes" para 10;
// - Após a atribuição, exiba a let "episodes" no console.
episodes += 4;
//console.log(episodes);

// Comente o console.log acima, e,
// - Abaixo deste comentário, 
// armazene a string 'O nº de episódios é: NUMERO_DE_EPISÓDIOS'
//  em uma constante "allEpisodes";
// - Insira a let "episodes" no lugar de "NUMERO_DE_EPISÓDIOS";
// - Exiba a "allEpisodes" no console.

const allEpisodes = `O nº de episódios é: ${episodes}`;
//console.log(allEpisodes);

// Comente o console.log acima, e,

// - Descomente a const "bookMessage" e o console.log abaixo;
// - Encontre uma forma de incluir as aspas simples do nome do livro na string;
// - Não modifique nenhuma aspas da string para aspas duplas.
// - Não use template strings.
const bookName = "O Conto da Aia";
const bookMessage = `'${bookName}' é um dos livros mais vendidos da década.`;
//console.log(bookMessage);

// Comente o console.log acima (e a const bookMessage caso não tenha descoberto a resolução), e,

// - Após a const "name" (abaixo), declare uma let "newName";
// - A let "newName" deverá armazenar uma string ES5
//  com o mesmo valor que "name" armazena;
// - Só que com as letras iniciais do nome e sobrenome maiúsculas;
// - Não digite a nova string manualmente.
// - Não modifique a string da const "name";
// - Exiba a "newName" no console;

const name = "walter white";
let newName = name;
/*console.log(
  newName[0].toUpperCase() +
    newName.slice(1, 7) +
    newName[7].toUpperCase() +
    newName.slice(8)
);
*/

// Comente o console.log acima, e,

// - Atribua à "newName" uma template string;
// - A template string deverá resultar no mesmo valor que a "newName" tinha anteriormente (nome e sobrenome com letras iniciais maiúsculas);
// - Não digite a nova string manualmente.
// - Não modifique a string da const "name";
// - Exiba a "newName" no console;

newName = `${newName[0].toUpperCase()}${newName.slice(
  1,
  6
)} ${newName[7].toUpperCase()}${newName.slice(8)}`;

//console.log(newName);

/*
Armazene um array vazio em uma let "brazilianFoods";
*/

let brazilianFoods = [];

/*
Use o método adequado para adicionar os 3 seguintes itens ao array:

- Coxinha
- null
- Brigadeiro

- Exiba a brazilianFoods no console.
*/
brazilianFoods.push("Coxinha", "null", "Brigadeiro");
//console.log(brazilianFoods);

/* Comente o console.log acima e:

- Através de uma reatribuição de valor, 
faça com que o 2º item do  
array "brazilianFoods" (null) seja substituído por "Pão de Queijo";
- Exiba apenas o 2º item desse array no console.
*/
brazilianFoods[1] = "Pão de Queijo";
//console.log(brazilianFoods[1]);

/*Comente o console.log acima e:

- Armazene em uma const "foodsInfo" a seguinte string: "Até aqui, o  
array "brazilianFoods" possui NUMERO_DE_ITENS itens: NOME_DO_ITEM_1,  
NOME_DO_ITEM_2 e NOME_DO_ITEM_3.";
- Substitua "NUMERO_DE_ITENS" pelo valor correto, mas sem inserir o  
número diretamente;
- Substitua as palavras "NOME_DO_ITEM_X" pelas informações corretas,  
mas sem digitar os nomes das comidas diretamente;
- Exiba a foodsInfo no console.
*/
const foodsInfo = `Até aqui, o  array "brazilianFoods" possui ${brazilianFoods.length} itens: ${brazilianFoods[0]}, ${brazilianFoods[1]} e ${brazilianFoods[2]}.`;

//console.log(foodsInfo);

/* Comente o console.log acima e:

- Armazene um array com os itens "Chico" e "Zeca" em uma const  
"maleDogNames";
- Agora, em uma const "femaleDogNames", armazene um array com os  
itens "Lilica" e "Matilda";
- Declare uma let "dogNames" que recebe a junção dos arrays  
"maleDogNames" e "femaleDogNames";
- Exiba a "dogNames" no console.
*/
const maleDogNames = ["Chico", "Zeca"];
const femaleDogNames = ["Lilica", "Matilda"];
let dogNames = maleDogNames.concat(femaleDogNames);
//console.log(dogNames);

/*Comente o console.log acima e:

- Exiba no console uma string com todos os itens do array  
"dogNames" separados por vírgula e espaço em branco;
- Utilize o método adequado para fazer isso;
- O resultado deve ser: "nome1, nome2, nome3, nome4".
*/
//console.log(dogNames.join(", "));

/*Comente o console.log acima e:

- Exiba no console o último item do array "dogNames", mas de  
forma que caso a quantidade de itens do array aumente ou diminua,  
o último item continue sendo exibido;
- Para testar essa lógica, na linha acima do console.log que  
você acabou de escrever, remova o último item do array "dogNames"  
utilizando o método adequado para isso;
- O console deve continuar exibindo o último item do array, que  
agora é "Lilica".
*/

//console.log(dogNames[dogNames.length - 1]);
dogNames.pop();
//console.log(dogNames[dogNames.length - 1]);

/*Comente o console.log acima e:

- Adicione o item "Nina" no final do array "dogNames", utilizando  
o método adequado para isso;
- Agora, armazene em uma const "initials" uma template string com  
apenas as letras iniciais dos nomes do array "dogNames";
- Exemplo: ['Nala', 'Zé'] resultaria em uma string 'NZ';
- Não digite as letras diretamente;
- Exiba a "initials" no console.
*/
dogNames.push("Nina");
const initials = `${dogNames[0][0]}${dogNames[1][0]}${dogNames[2][0]}${dogNames[3][0]}   `;
//console.log(initials);

/*Comente o console.log acima e:

- Exiba a "initials" no console, mas com todas as letras minúsculas;
- Utilize o método adequado para isso.
*/
//console.log(initials.toLocaleLowerCase());

/*Comente o console.log acima e:

- Declare uma const "dessert" e faça com que ela receba uma template  
string que contém a parte "co" do 1º item do array "dogNames", a  
parte "ca" do 2º item e a parte "na" do 4º item;
- A string deve resultar na palavra 'cocana', que não deve ser  
digitada diretamente;
- No final da string, faça com que a letra "n" seja substituída por  
"d", utilizando o método adequado para isso;
- Exiba no console a string abaixo, substituindo "SOBREMESA" pela  
constante que você criou.

'A SOBREMESA é um doce à base de coco, tradicional na América Latina e em Angola.'
*/
//console.log(dogNames);
const dessert = `${dogNames[0].slice(3)}${dogNames[1].slice(
  2
)}${dogNames[3].slice(2)}`;
//console.log(dessert);
//console.log(dessert.replace("n", "d"));

/*Comente o console.log acima e:

- Declare um array com os números 3, 5, e 7 e o armazene em uma let  
"oddNumbers";
- Exiba no console o resultado do 2º item do array elevado ao cubo. O  
valor exibido deve ser 125;
- Entre a declaração da "oddNumbers" e a exibição do 2º item do array  
elevado ao cubo, faça o 2º item do array receber todo o valor que ele  
já tem, mais 4;
- Agora, o resultado exibido no console deve ser 729.
*/
let oddNumbers = [3, 5, 7];
oddNumbers[1] += 4;
//console.log(`${oddNumbers[1] ** 3}`);
