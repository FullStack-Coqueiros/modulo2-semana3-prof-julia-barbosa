//exemplo 1
let autenticacao = false;

if(autenticacao){
    console.log("usuario autorizado!");
} else{
    console.log("usuario não autorizado!");
}

// //exemplo 2
let valor = 10 + 5;

if(valor === 2){
    console.log("este valor é 2");
} else if(valor === 10){
    console.log("este valor é 10");
} else if(valor === 15){
    console.log("este valor é 15");
} else{
    console.log("este valor não o que está na variavel");
}

//exemplo 3
let valor1 = 10 + 10; //20
let valor2 = 20 + 20; //40

if(valor1 === 50 || valor2 === 30){
    console.log("um dos valores é verdadeiro");
} else{
    console.log("nenhum dos valores é verdadeiro");
}

// //exemplo 4
let media, n1, n2, n3 ;

n1 = prompt("Informe a primeira nota: ") ;
n1 = eval(n1);

n2 = prompt("Informe a segunda nota: ") ;
n2 = eval(n2) ; 

n3 = prompt("Informe a terceira nota: ") ; 
n3 = eval(n3) ;

media = (n1 + n2 + n3)/3 ; 

if ( media >= 7 ) {
    document.write ("Aprovado");
} else { 
    if ( media <= 6 ) {
    document.write ("Reprovado");
} else {
    document.write ("Recuperação");
}}


//switch case
let permissao = 'gerente';

switch (permissao) {
    case 'usuario':
        console.log('acesso de usuario')
    break;
    case 'funcionario':
        console.log('acesso de funcionario')
    break;
    case 'administrador':
        console.log('acesso de administrador')
    break;
    default:
        console.log('acesso negado')
}
