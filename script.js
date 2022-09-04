//Caracteristicas do meu projeto

const suplemento1 = 'Whey protein'
const descricao1 = 'Proteína do soro do leite'
const funcao1 = 'Tem como função a recuperação muscular após exercícios físicos de alta intensidade'
const valorAproximado1 = 100
const aprovadoAnvisa1 = true;

//Array com as informações
const array1 = ['Concentrado', ' Isolado', ' Hidrolisado']
//Imprimindo um relatório
console.log(`Nome do suplemento: ${suplemento1.toUpperCase()}; \nDescrição: ${descricao1}; \nFunção: ${funcao1}; \nValor aproximado de custo: R$${valorAproximado1} reais; \nAprovado pela Anvisa? ${aprovadoAnvisa1}; \nArray das características: [${array1}].`)

//Caracteristicas do meu projeto

const suplemento2 = 'Creatina'
const descricao2 = 'Substância produzida pelos rins e pelo fígado'
const funcao2 = 'Serve para fornecer energia para os músculos e favorecer o desenvolvimento das fibras musculares'
const valorAproximado2 = 80
const aprovadoAnvisa2 = true;

//Array com as informações
const array2 = ['Desempenho fisico', ' Tratamento de doenças musculares', ' Prevenir doenças crônicas']
//Imprimindo um relatório
console.log(`\nNome do suplemento: ${suplemento2.toUpperCase()}; \nDescrição: ${descricao2}; \nFunção: ${funcao2}; \nValor aproximado de custo: R$${valorAproximado2} reais; \nAprovado pela Anvisa? ${aprovadoAnvisa2}; \nArray das características: [${array2}].`)

//Caracteristicas do meu projeto

const suplemento3 = 'BCAA(Branched Chain Amino Acids)'
const descricao3 = 'Produto para suplementar a alimentação em aminoácidos'
const funcao3 = 'Desempenha função essencial para o crescimento e a reparação de músculos e tecidos, produção de anticorpos e enzimas'
const valorAproximado3 = 45
const aprovadoAnvisa3 = true;

//Array com as informações
const array3 = ['Reduz a fadiga muscular', ' Auxilia no crescimento muscular', ' Livre de colaterais']
//Imprimindo um relatório
console.log(`\nNome do suplemento: ${suplemento3.toUpperCase()}; \nDescrição: ${descricao3}; \nFunção: ${funcao3}; \nValor aproximado de custo: R$${valorAproximado3} reais; \nAprovado pela Anvisa? ${aprovadoAnvisa3}; \nArray das características: [${array3}].`)

//Caracteristicas do meu projeto

const suplemento4 = 'Glutamina'
const descricao4 = 'A glutamina é um aminoácido, que pode ser considerada praticamente como não essencial'
const funcao4 = 'Evita que o organismo queime massa muscular para gerar energia durante os treinos, pois auxilia no aumento da reserva de glicogênio muscular.'
const valorAproximado4 = 65
const aprovadoAnvisa4 = true;

//Array com as informações
const array4 = ['Melhora da função intestinal', ' Melhora do humor e bem-estar', ' Fornecimento de energia para o sistema imunológico']
//Imprimindo um relatório
console.log(`\nNome do suplemento: ${suplemento4.toUpperCase()}; \nDescrição: ${descricao4}; \nFunção: ${funcao4}; \nValor aproximado de custo: R$${valorAproximado4} reais; \nAprovado pela Anvisa? ${aprovadoAnvisa4}; \nArray das características: [${array4}].`)

//Caracteristicas do meu projeto

const suplemento5 = 'Efedrina'
const descricao5 = 'É um remédio vasoconstrito'
const funcao5 = 'Ajuda a contrair os vasos sanguíneos do corpo, fazendo aumentar a pressão arterial em casos de queda abrupta da pressão arterial.'
const valorAproximado5 = 10
const aprovadoAnvisa5 = false;

//Array com as informações
const array5 = ['Excesso de suor', ' Diminuição ou aumento da pressão arterial', ' Insônia']
//Imprimindo um relatório
console.log(`\nNome do suplemento: ${suplemento5.toUpperCase()}; \nDescrição: ${descricao5}; \nFunção: ${funcao5}; \nValor aproximado de custo: R$${valorAproximado5} reais; \nAprovado pela Anvisa? ${aprovadoAnvisa5}; \nArray das características: [${array5}].`)

//Calculando a média

const media = (valorAproximado1 + valorAproximado2 + valorAproximado3 + valorAproximado4 + valorAproximado5)/ 5
console.log(`\nA média de preços entre todos os suplementos é: R$${media} reais`)