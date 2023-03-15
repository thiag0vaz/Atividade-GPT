/* Crie um programa que receba o peso e a atividade física diária de uma pessoa e 
calcule a quantidade de água que ela deve beber por dia. 
A quantidade de água recomendada é de 35 ml por quilo de peso para pessoas com atividade física moderada, 
e 45 ml por quilo de peso para pessoas com atividade física intensa. 
O resultado do cálculo deve ser exibido na tela. */

import {question} from 'readline-sync'

function main() {
    console.log('================================== Calculadora de água =====================================')
    console.log('A quantidade mínima de água é baseada em atividades classificadas em moderadas e intensas')
    //Entrada 
    const massa = Number(question('Digite seu peso(Kg): '))
    const agua_moderada = agua_para_atividade_moderada(massa)
    const agua_intensa = agua_para_atividade_intensa(massa)
    
    //Processamento 
    function agua_para_atividade_moderada(massa){
        const agua_m = massa * 35
        return agua_m
    }

    function agua_para_atividade_intensa(massa){
        const agua_i = massa * 45
        return agua_i
    }
    //Saída
    console.log(`Quantidade mínima de água para atividades físicas moderadas é ${agua_moderada} ml`)
    console.log(`Quantidade mínima de água para atividades físicas intensas é ${agua_intensa} ml`)
}
main()