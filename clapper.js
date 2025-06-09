// variavel para aparecer na tela 
let data  = new Date();
console.log(data);
 
//variavel apara aparecer o ano atual com 4 digitos
let ano = data.getFullYear()
console.log(ano);

// variavel para aparecer o mes atual
let mes = data.getMonth();
console.log(mes);

// variavel para aparecer o mes no formato escrito
const mesesDoAno = ["Janeiro","Fevereiro","Março",
    "Abril","Maio","Junho",
    "Julho","Agosto","Setembro",
    "Outubro", "Novembro","Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

// variavel para aparecer dia do mes
let diaMes = data.getDate();
console.log(diaMes);

// variavel para aparecer dia da semana escrito 
const diaDaSemana = ["Domingo", "Segunda-feira", "Quarta-feira", "Quinta-feira", 
    "Sexta-feira", "Sábado"];

    let diaSemanaEscrito = diaDaSemana[data.getDay()];
    console.log(diaSemanaEscrito);

    //  variavel para aparecer a hora 
    let hora = data.getHours();
    console.log(hora);

    // variavel para aparecer os minutos 
    let minutos = data.getMinutes();
    console.log(minutos);

    // varivel para aparecer os segundos
    let segundos = data.getSeconds();
    console.log(segundos);

    // variavel para aparecer milisegundos
    let milisegundos = data.getMilliseconds();
    console.log(milisegundos);

    // variavel para aparecer a data padrão no brasileiro 
    let dataBR = data.toLocaleString( 'pt-BR', {dateStyle: 'short'});
    console.log(dataBR);

