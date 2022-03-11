import "./src/css/tailwind.css";
import { render } from './src/js/tree.js'

// Seleccion de los componentes para modificar
const longitud = document.querySelector('#longitud');
const result = document.querySelector('#result');
const copy = document.querySelector('#copy');
const form = document.querySelector('#form')

// Creacion de componentes
const error = document.createElement('span');
const copyCreate = document.createElement('span');

// Style
error.classList.add('block', 'text-white', 'mb-4', 'bg-red-400', 'p-2', 'rounded-md', 'font-bold', 'text-center')
copyCreate.classList.add('block', 'bg-primary-300', 'font-semibold', 'text-center', 'p-1', 'rounded-lg', 'mt-3')


let maxWidth = 15;


longitud.addEventListener('input', eventInput);

copy.addEventListener('click', eventCopy)

longitud.addEventListener('click', _ => widthNow())

document.addEventListener('DOMContentLoaded', _ => widthNow());

function eventInput(e){
  e.preventDefault();
  widthNow()
  let longitud = +e.target.value
  if (longitud >= 0 & longitud < maxWidth) {
    error.remove();
    result.textContent = render(longitud)
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

function widthNow() {
  if (window.innerWidth >= 413) maxWidth = 19
  if (window.innerWidth >= 500) maxWidth = 22
  if (window.innerWidth >= 636) maxWidth = 25
  // console.log(longitud.getAttribute('max'))
  longitud.setAttribute('max', maxWidth)
}

function mensajeError(mensaje) {
  error.textContent = mensaje;
  form.insertBefore(error, form.children[0])
}