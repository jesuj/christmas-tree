import "./src/css/tailwind.css";

const longitud = document.querySelector('#longitud');
const result = document.querySelector('#result');
const copy = document.querySelector('#copy');

longitud.addEventListener('input', (e)=>{
  e.preventDefault();
  let longitud = +e.target.value
  console.log(longitud)
  if (longitud >= 0 & longitud < 20) {
    result.textContent = render(longitud)
  }else{
    alert('valor no permitido valor 20')
  }
});

copy.addEventListener('click', (e)=>{
  e.preventDefault();
  let texto = result.textContent;
  if (texto !== "") {
    navigator.clipboard.writeText(texto);
    alert('texto copiado')
  }
})

function render(height,type){
  let impar = 1;
    let count = height - 1;
    let tree = Array(height).fill(0).reduce((acc,curr,index)=>{
        acc += '_'.repeat(count)+'*'.repeat(impar)+'_'.repeat(count)+'\n';
        impar = impar + 2;
        count--;
        return acc;
    },'')
    if (height !== 0) {
      tree += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1) + '\n';
      tree += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1); 
    }
    return tree;
}
