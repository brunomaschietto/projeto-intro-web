
const suplemento1 = {
    
    nome: 'Whey protein.',
    descricao: 'Proteína do soro do leite.',
    funcao: 'Função: Tem como função a recuperação muscular após exercícios físicos de alta intensidade.',
    valorAproximado: 'R$ ' + 100 + ' reais.',
    aprovadoAnvisa: 'Aprovado pela Anvisa.',
    array: ['Temos concentrado', ' isolado', ' hidrolisado.'],
    
}



const suplemento2 = {
    nome: 'Creatina',
    descricao: 'Substância produzida pelos rins e pelo fígado',
    funcao: 'Serve para fornecer energia para os músculos e favorecer o desenvolvimento das fibras musculares',
    valorAproximado: 'R$ ' + 80 + ' reais.',
    aprovadoAnvisa: 'Aprovado pela Anvisa',
    array: ['Melhora no desempenho fisico', ' tratamento de doenças musculares', ' prevenir doenças crônicas'],
    
}


const suplemento3 = {
    nome: 'BCAA(Branched Chain Amino Acids)',
    descricao: 'Produto para suplementar a alimentação em aminoácidos',
    funcao: 'Desempenha função essencial para o crescimento e a reparação de músculos e tecidos, produção de anticorpos e enzimas',
    valorAproximado:'R$ '+ 45 + ' reais.',
    aprovadoAnvisa: 'Aprovado pela Anvisa',
    array: ['Reduz a fadiga muscular', ' auxilia no crescimento muscular', ' livre de colaterais'],
    
}


const suplemento4 = {
    nome: 'Glutamina',
    descricao: 'A glutamina é um aminoácido, que pode ser considerada praticamente como não essencial',
    funcao: 'Evita que o organismo queime massa muscular para gerar energia durante os treinos.',
    valorAproximado: 'R$' + 65 + ' reais.',
    aprovadoAnvisa: 'Aprovado pela Anvisa',
    array: ['Melhora da função intestinal', ' melhora do humor e bem-estar', ' fornecimento de energia para o sistema imunológico'],
    
}


const suplemento5 = {
    nome: 'Efedrina',
    descricao: 'É um remédio vasoconstrito',
    funcao: 'Ajuda a contrair os vasos sanguíneos do corpo, fazendo aumentar a pressão arterial em casos de queda abrupta da pressão arterial.',
    valorAproximado: 'R$ ' + 10 + ' reais.',
    aprovadoAnvisa: 'Não é aprovado pela Anvisa.',
    array: ['Excesso de suor', ' diminuição ou aumento da pressão arterial', ' insônia'],
    
}

const suplemento6 = {
    nome: 'Horus',
    descricao: 'Pré treino com beta-alanina',
    funcao: 'O produto melhora a intensidade dos treinos.',
    valorAproximado: 'R$ ' + 95 + ' reais.',
    aprovadoAnvisa: 'Aprovado pela Anvisa.',
    array: ['Aumenta a concentração', ' força', ' resistência.'],
}

//2
const arrayTotal = [];
//3

// arrayTotal.push(suplemento1, suplemento2, suplemento3, suplemento4, suplemento5);

//4

// if (suplemento1.aprovadoAnvisa === true) {
//     arrayTotal.push(suplemento1)
// } else {
//     alert('Seu item 1 não pôde ser adicionado.')
// }

// if (suplemento2.aprovadoAnvisa === true) {
//     arrayTotal.push(suplemento2)
// } else {
//     alert('Seu item 2 não pôde ser adicionado.')
// }

// if (suplemento3.aprovadoAnvisa === true) {
//     arrayTotal.push(suplemento3)
// } else {
//     alert('Seu item 3 não pôde ser adicionado.')
// }

// if (suplemento4.aprovadoAnvisa === true) {
//     arrayTotal.push(suplemento4)
// } else {
//     alert('Seu item 4 não pôde ser adicionado.')
// }

// if (suplemento5.aprovadoAnvisa === true) {
//     arrayTotal.push(suplemento5)
// } else {
//     alert('Seu item 5 não pôde ser adicionado.')
// }

// console.log(arrayTotal)


// Semana 3

function transformaString(objeto) {
    for (i of objeto.array) {
        objeto.array = `${objeto.array}`
    }
    return objeto
}

// console.log(transformaString(suplemento1))
// console.log(transformaString(suplemento2))
// console.log(transformaString(suplemento3))
// console.log(transformaString(suplemento4))
// console.log(transformaString(suplemento5))


const arraySomado = [suplemento1, suplemento2, suplemento3, suplemento4, suplemento5]



for (elemento of arraySomado) {
    for (indice in elemento) {
        console.log(`${indice}: ${elemento[indice]}\n`)
    }
    console.log('--------------------')
}

// function transformaStringTudo(objeto) {
//     for (i in objeto){
//         console.log(`${i}: ${objeto[i]}\n`)
//     }
//     console.log('--------------------')
// }

// transformaStringTudo(suplemento1)
// transformaStringTudo(suplemento2)
// transformaStringTudo(suplemento3)
// transformaStringTudo(suplemento4)
// transformaStringTudo(suplemento5)

// function retornaObjeto(array, string){
//     const buscaSuplemento = array.filter((elemento) => {
//         if(elemento.nome === string){
//             return elemento
//     }
// })
//     if(buscaSuplemento.length === 0){
//         alert("Suplemento não encontrado")
//     }else{
//         console.log(buscaSuplemento);
//     }
// }
// retornaObjeto(arraySomado, "Whey protein")

function empurraObjeto(objeto, id) {
    for (elemento in objeto) {
        const suplementacao = document.getElementById(id)
        const liCriada = document.createElement('li')
        liCriada.innerHTML = objeto[elemento]
        suplementacao.appendChild(liCriada)
    }
}

empurraObjeto(suplemento1, 'secao-um')
empurraObjeto(suplemento2, 'secao-dois')
empurraObjeto(suplemento3, 'secao-tres')
empurraObjeto(suplemento4, 'secao-quatro')
empurraObjeto(suplemento5, 'secao-cinco')
empurraObjeto(suplemento6, 'secao-seis')


function buscaElemento(event) {
    event.preventDefault();
    let valorInput = document.getElementById('pesquisa').value
    valorInput = valorInput.toLowerCase();
    let classeTotal = document.getElementsByClassName('secao');

    if (valorInput.length === 0) {
        alert('Suplemento não encontrado')
        for (i = 0; i < classeTotal.length; i++) { 
            classeTotal[i].style.display="flex";
        }
    } else {
        for (i = 0; i < classeTotal.length; i++) { 
            if (!classeTotal[i].innerHTML.toLowerCase().includes(valorInput)) {
                classeTotal[i].style.display="none";
            }
            else {
                classeTotal[i].style.display="flex";
            }
        }

    }
    
}

