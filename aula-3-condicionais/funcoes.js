// function nomeDaFuncao(valorResultado){
//     /*
//     sequencia de instruções pra executar uma determinada atividade.
//     */
//     return valorResultado;
// }

// nomeDaFuncao();

//exemplo 1 
function calcularArea(largura, altura){
    let area = largura * altura;
    console.log('O calculo da minha area é:', area);

    return area;
}

calcularArea(200,40);

//exemplo 2 - evento de click 
let elemento = document.querySelector('button');
elemento.addEventListener('click', clique);

function clique(){
    elemento.style.background = 'pink';
}

//exemplo 3 - evento de onLoad
window.onload = function(){
    alert('pagina carregada!!!!');
}

//exemplo 4 - OnmouseDown,UP e Click

function apertarMouse(){
    let status = document.getElementById('status');
    status.innerHTML = "Você está apertando o botão do mouse";
}

function soltarMouse(){
    let status = document.getElementById('status');
    status.innerHTML = "Você soltou o botão do mouse";
}

function clicarNoMouse(){
    let status2 = document.getElementById('status2');
    status2.innerHTML = "Você clicou o botão do mouse";
}

//exemplo 5 - onMouseOver e OnMouseOut

function mouseDentro(cor){
    cor.style.backgroundColor = '#00FF00';
    cor.innerHTML = "Mouse aqui dentro!";
}

function mouseFora(cor){
    cor.style.backgroundColor = '#FF0000';
    cor.innerHTML = "Mouse fora!";
}



