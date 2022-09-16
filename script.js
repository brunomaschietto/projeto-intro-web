
const suplemento1 = {
    nome: 'Whey protein',
    descricao: 'Proteína do soro do leite',
    funcao: 'Tem como função a recuperação muscular após exercícios físicos de alta intensidade',
    valorAproximado: 100,
    aprovadoAnvisa: true,
    array1: ['Concentrado', ' Isolado', ' Hidrolisado']
}


const suplemento2 = {
    nome: 'Creatina',
    descricao: 'Substância produzida pelos rins e pelo fígado',
    funcao: 'Serve para fornecer energia para os músculos e favorecer o desenvolvimento das fibras musculares',
    valorAproximado: 80,
    aprovadoAnvisa: true,
    array2: ['Desempenho fisico', ' Tratamento de doenças musculares', ' Prevenir doenças crônicas']
}


const suplemento3 = {
    nome: 'BCAA(Branched Chain Amino Acids)',
    descricao: 'Produto para suplementar a alimentação em aminoácidos',
    funcao: 'Desempenha função essencial para o crescimento e a reparação de músculos e tecidos, produção de anticorpos e enzimas',
    valorAproximado: 45,
    aprovadoAnvisa: true,
    array3: ['Reduz a fadiga muscular', ' Auxilia no crescimento muscular', ' Livre de colaterais']
}


const suplemento4 = {
    nome: 'Glutamina',
    descricao: 'A glutamina é um aminoácido, que pode ser considerada praticamente como não essencial',
    funcao: 'Evita que o organismo queime massa muscular para gerar energia durante os treinos, pois auxilia no aumento da reserva de glicogênio muscular.',
    valorAproximado: 65,
    aprovadoAnvisa: true,
    array4: ['Melhora da função intestinal', ' Melhora do humor e bem-estar', ' Fornecimento de energia para o sistema imunológico']
}


const suplemento5 = {
    nome: 'Efedrina',
    descricao: 'É um remédio vasoconstrito',
    funcao: 'Ajuda a contrair os vasos sanguíneos do corpo, fazendo aumentar a pressão arterial em casos de queda abrupta da pressão arterial.',
    valorAproximado: 10,
    aprovadoAnvisa: false,
    array5: ['Excesso de suor', ' Diminuição ou aumento da pressão arterial', ' Insônia']
}

//2
const arrayTotal = [];
//3

// arrayTotal.push(suplemento1, suplemento2, suplemento3, suplemento4, suplemento5);

//4

if (suplemento1.aprovadoAnvisa === true) {
    arrayTotal.push(suplemento1)
} else {
    alert('Seu item 1 não pôde ser adicionado.')
}

if (suplemento2.aprovadoAnvisa === true) {
    arrayTotal.push(suplemento2)
} else {
    alert('Seu item 2 não pôde ser adicionado.')
}

if (suplemento3.aprovadoAnvisa === true) {
    arrayTotal.push(suplemento3)
} else {
    alert('Seu item 3 não pôde ser adicionado.')
}

if (suplemento4.aprovadoAnvisa === true) {
    arrayTotal.push(suplemento4)
} else {
    alert('Seu item 4 não pôde ser adicionado.')
}

if (suplemento5.aprovadoAnvisa === true) {
    arrayTotal.push(suplemento5)
} else {
    alert('Seu item 5 não pôde ser adicionado.')
}

console.log(arrayTotal)

