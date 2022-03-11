import "./src/css/tailwind.css";
import {render} from './src/js/tree.js'

const longitud = document.querySelector('#longitud');
const result = document.querySelector('#result');
const copy = document.querySelector('#copy');

const form = document.querySelector('#form')
const error = document.createElement('span');

let maxWidth = 15;


longitud.addEventListener('input', (e)=>{
  e.preventDefault();
  widthNow()
  let longitud = +e.target.value
  if (longitud >= 0 & longitud < maxWidth) {
    error.remove();
    result.textContent = render(longitud)
  }else{
    error.textContent = `Valor Permitidos de 0 ... ${maxWidth}`
    error.classList.add('block', 'text-white', 'mb-4', 'bg-red-400', 'p-2', 'rounded-md', 'font-bold', 'text-center')
    form.insertBefore(error,form.children[0])
  }
});

longitud.addEventListener('click', (e)=>{
  widthNow();
})

copy.addEventListener('click', (e)=>{
  e.preventDefault();
  let texto = result.textContent;
  if (texto !== "") {
    navigator.clipboard.writeText(texto);
    alert('texto copiado')
  }
})


document.addEventListener('DOMContentLoaded', (e)=>{
  widthNow()
});

function widthNow(){
  if (window.innerWidth >=413) maxWidth = 19
  if (window.innerWidth >=500) maxWidth = 22
  if (window.innerWidth >=636) maxWidth = 25
  console.log(longitud.getAttribute('max'))
  longitud.setAttribute('max', maxWidth)

}