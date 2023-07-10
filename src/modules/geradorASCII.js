const rand = (min, max) => Math.floor(Math.random() * (max-min) + min);

const geraRandom = () => String.fromCharCode(rand(48, 58))
const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const simbolos = '!@#$%&*()_-=+[]<>.,'
const geraSimbolo = ()=> simbolos[rand(0, simbolos.length)]
console.log(geraSimbolo())

export default function geraSenha(qtd, mai, min, num, sim){
    const senhaArray = [];
    for(let i = 0; i <= qtd; i++){
        if(mai === true) senhaArray.push(geraMaiuscula())
        if(min === true) senhaArray.push(geraMinuscula())
        if(num === true) senhaArray.push(geraRandom())
        if(sim === true) senhaArray.push(geraSimbolo())
    }
    return(senhaArray.slice(0, qtd)).join('')
}

