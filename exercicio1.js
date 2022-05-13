//1

let numero = prompt('Tente acertar um número de 0 á 5')
let n1 = 1
let n2 = 2
let n3 = 3
let n4 = 4
let n5 = 5
if (numero == n4) {
    alert('Você acertou. Parabéns!')
} else{
    alert('Você Errou. Tente de novo.')
}

//2

let km = prompt('digite a velocidade do seu carro')
if ( km > 80) {
    let multa = (km-80)*5
    alert(`você foi multado em R$ ${multa}`)
} else{
    alert('você esta na velocidade correta')
}

//3

let leia = prompt('Coloque seu número aqui')

if (leia % 2 === 0){
    alert('Esse número é par')
} else{
    alert('Esse número é impar')
}

//4

let valor = parseInt(prompt('Digite o seu sálario'))

if (valor > 1250){
    let aumento = (valor * 10/100) + valor;
    alert(aumento)
} else{
    (valor <= 1250)
    let aumento2 = (valor * 15/100) + valor;
    alert(aumento2)
}