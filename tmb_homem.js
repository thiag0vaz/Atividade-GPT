/*A taxa metabólica basal (TMB) é a quantidade de energia necessária para a manutenção das funções vitais do organismo ao longo de 24 horas. 
Ela é medida em calorias, que é a energia extraída pelo nosso corpo a partir dos macronutrientes (carboidratos, proteínas e gorduras totais).
Dado o peso (em kg), a altura (em cm), a idade (em anos) e o gênero (M ou F) de uma pessoa, calcule a TMB dessa pessoa.
Fórmula da TMB para homens: TMB = 88,36 + (13,4 x peso) + (4,8 x altura) - (5,7 x idade)
Fórmula da TMB para mulheres: TMB = 447,6 + (9,2 x peso) + (3,1 x altura) - (4,3 x idade)
Arredonde o valor da TMB para o inteiro mais próximo utilizando a função floor.
Exemplo de entrada: peso = 70, altura = 170, idade = 30, genero = "M"
Saída esperada: 1608 */

import {question} from 'readline-sync'

function main(){
    console.log('========================Calculadora do Metabolismo Basal============================')
    console.log('A taxa metabólica basal varia de acordo com o peso, altura, idade e gênero')

    //Entrada 
    const idade = Number(question('Sua idade: '))
    const peso = Number(question('Seu peso (Kg): '))
    const altura = Number(question('Sua altura (cm): '))
    
    //Processamento 
    const homem = metabolismo_basal_homem(peso, altura, idade)
    
    //Saída
    console.log('Seu corpo consome', homem, "kcal para manter as funções vitais" )
   
}

function metabolismo_basal_homem(peso, altura, idade){       
    const meta_homem = Math.floor(88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade))  
    return meta_homem
}    

main()