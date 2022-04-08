/** 
 * @file Generador del Arbolito de navidad 🌲 <br /> 
 * Pagina : {@link https://christmas-tree-nine.vercel.app/|christmas-tree} <br />
 * Repositorio : {@link https://github.com/jesuj/christmas-tree|Github}
 * @author Angel Jesus Oni Terceros
 * @see {@link https://github.com/jesuj|jesuj}
 * @copyright jesuj 2022
 */

import "./src/css/tailwind.css";
import { render } from './src/js/tree.js'

// Seleccion de los componentes para modificar
const longitud = document.querySelector('#longitud');
const result = document.querySelector('#result');
const copy = document.querySelector('#copy');
const form = document.querySelector('#form')
const fullscreen = document.querySelector('#fullscreen');

// Creacion de componentes
const error = document.createElement('span');
const copyCreate = document.createElement('span');

let isFullScreen = false;

// Style
error.classList.add('block', 'text-white', 'mb-4', 'bg-red-400', 'p-2', 'rounded-md', 'font-bold', 'text-center')
copyCreate.classList.add('block', 'bg-primary-300', 'font-semibold', 'text-center', 'p-1', 'rounded-lg', 'mt-3')

/** 
 * Restriccion del ancho del arbol de acuerdo al ancho de la pantalla 
 * @type {number} 
 * */
let maxWidth = 15;


longitud.addEventListener('input', eventInput);

copy.addEventListener('click', eventCopy)

longitud.addEventListener('click', _ => widthNow())

document.addEventListener('DOMContentLoaded', _ => widthNow());

fullscreen.addEventListener('click',screenFull)

function screenFull(e){
  e.preventDefault();
  isFullScreen = !isFullScreen;
  if (isFullScreen) {
    document.documentElement.requestFullscreen();
  }else{
    document.exitFullscreen()
  }
}

function eventInput(e){
  e.preventDefault();
  widthNow()
  let heightTree = +e.target.value
  if (heightTree >= 0 && heightTree < maxWidth) {
    error.remove();
    if (longitud.className.includes('border-red-500')) {
      longitud.classList.remove('border-red-500')
      longitud.classList.add('border-primary-500')
    }
    result.textContent = render(heightTree)
  } else mensajeError(`Valores Permitidos de 0 ... ${maxWidth}`)
}

function eventCopy(e) {
  e.preventDefault();
  let texto = result.textContent;
  if (texto !== "") {
    navigator.clipboard.writeText(texto);
    copyCreate.textContent = 'Copiado'
    longitud.insertAdjacentElement('afterend', copyCreate);
    setTimeout(_ => copyCreate.remove(), 2000);
  } else mensajeError(`Ingresar Valores de 0 ... ${maxWidth}`)
}


/**
 * El ancho del navegador para la cantidad de maxima del arbol
 * @returns {void}
 */
function widthNow() {
  if (window.innerWidth >= 413) maxWidth = 19
  if (window.innerWidth >= 500) maxWidth = 22
  if (window.innerWidth >= 636) maxWidth = 25
  // console.log(longitud.getAttribute('max'))
  longitud.setAttribute('max', `${maxWidth}`)
}
/**
 * Mensaje de Error para el html
 * @param {string} mensaje descripcion del mensaje
 * @returns {void}
 */
function mensajeError(mensaje='') {
  error.textContent = mensaje;
  if (!longitud.className.includes('border-red-500')) {
    longitud.classList.remove('border-primary-500')
    longitud.classList.add('border-red-500')
  }
  form.insertBefore(error, form.children[0])
}