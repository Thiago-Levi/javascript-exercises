/*
  01

  - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do 
    array "months".
*/

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

console.log(months.indexOf("Fevereiro"));

/*
  02

  - Crie um objeto de data que represente o momento presente;
  - Exiba o objeto no console.
*/

const presentMoment = new Date();
console.log(presentMoment);

/*
  03

  - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/

console.log(presentMoment.getFullYear());
/*
  04

  - Crie um objeto de data que represente um momento passado;
  - Exiba o objeto no console.
*/

const pastMoment = new Date("1/1/2020");

console.log(pastMoment);

/*
  05

  - Exiba, no console, a hora do objeto que você acabou de criar.
*/

console.log(pastMoment.getHours());

/*
  06

  - Crie um objeto de data que represente um momento futuro;
  - Exiba o objeto no console.
*/

const futureDate = new Date("1/1/2023");
console.log(futureDate);

/*
  07

  - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/

const getDifference = futureDate.getTime() - pastMoment.getTime();
const getDifferenceInDays = Math.round(
  getDifference / 1000 / 60 / 60 / 24 / 365
);
console.log(getDifferenceInDays);
console.log();
