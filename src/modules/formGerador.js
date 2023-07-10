import geraSenha from "./geradorASCII";
const btn = document.querySelector('.gerar');
const output = document.querySelector('.output');
const quantidadeCar = document.querySelector('.tam')
const chkMaiuscula = document.querySelector('.mai');
const chkMinuscula = document.querySelector('.min');
const chkSimbolo = document.querySelector('.sim')
const chkNumeros = document.querySelector('.num')

export default () => {
btn.addEventListener('click', () => { 
    output.innerHTML = mostrarNaTela();

}
)   
}
function mostrarNaTela(){
const saida = geraSenha(quantidadeCar.value, chkMaiuscula.checked, chkMinuscula.checked, chkSimbolo.checked, chkNumeros.checked)
return saida || 'Nada foi Selecionado'
}