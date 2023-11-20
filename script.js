import {barcelona, roma, paris, londres} from './ciudades.js'

//Obtener los elementos al DOOM

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let prefioElemento  = document.getElementById('precio')

//agregar un evneto CLICK a cada enlace 

enlaces.forEach(function(enlace){
    enlace.addEventListener('click' , function(){
        //Remover la clase "active" de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        // agregar la clase "active" al enlace actual
        this.classList.add('active');

        //Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        //Mostrar el contenido en el DOOM 
        // obtiene datos de ciudades.js

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo 
        parrafoElemento.innerHTML = contenido.parrafo
        prefioElemento.innerHTML = contenido.precio

    });
});


//funcion para traer la informacion correcta desde ciudades.js

function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma': roma,
        'París' : paris,
        'Londres' : londres
    };
    return contenido[enlace];
}