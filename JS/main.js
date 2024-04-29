'use strict'

const $number = document.getElementsByName("boton-number");// Obtenemos el nombre que se da en la etiqueta y se guarda como un array 
const $operacion = document.getElementsByName("boton-opera");
const $igual = document.getElementsByName("boton-igual")[0];
const $delete = document.getElementsByName("boton-delete")[0];
let $resultado = document.getElementById("resultado");
let $operacionActual='';
let $operacionAnterior='';
let $opera = undefined;

/////////////// EVENTOS /////////////////

$number.forEach(function(boton){
    boton.addEventListener('click',function(){
        agregarNumero(boton.innerText);
    })
});


$operacion.forEach(function(boton){
    boton.addEventListener('click',function(){
        selectOperacion(boton.innerText);
    })
});

$igual.addEventListener('click',function(){
    calcular();
    actualizarDisplay();
});

$delete.addEventListener('click',function(){
    clear();
    actualizarDisplay();
});

///////////////// FUNCIONES ///////////////////

function selectOperacion(op){
    if($operacionActual === '') return;
    if($operacionActual !== ''){
        calcular();
    }
    $opera = op.toString();
    $operacionAnterior = $operacionActual;
    $operacionActual ='';
}

function calcular(){
    let calculo;
    const anterior=parseFloat($operacionAnterior);
    const actual = parseFloat($operacionActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch($opera){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    $operacionActual = calculo;
    $opera = undefined;
    $operacionAnterior = '';
}


function agregarNumero(num) {
    $operacionActual =$operacionActual.toString() + num.toString() ;
    actualizarDisplay();
}

function clear(){
    $operacionActual = '';
    $operacionAnterior = '';
    $opera = undefined;
}

function actualizarDisplay(){
    $resultado.value = $operacionActual;
}

clear();

