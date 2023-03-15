/*Crie um programa que receba a idade de uma pessoa e calcule a sua frequência cardíaca máxima, 
que é dada pela fórmula 220 menos a idade. 
O programa deve então calcular a faixa de batimentos cardíacos ideais para atividades físicas moderadas e intensas, 
que correspondem a 50-70% e 70-85% da frequência cardíaca máxima, respectivamente. Os resultados devem ser exibidos na tela.*/

import {question} from "readline-sync"

function main(){
    console.log('=====================Calculadora de Batimentos Cardíacos================================')
    console.log('Os batimentos variam junto á intesidade das atividades físicas e a idade do praticante')

    //Entrada 
    const idade = Number(question('Sua idade: '))
    const frequencia_maxima = 220 - idade
    const batimentos_moderados = batimentos_para_atividades_moderadas(frequencia_maxima)
    const batimentos_intensos = batimentos_para_atividades_intensas(frequencia_maxima)
    
    //Processamento
    function batimentos_para_atividades_moderadas(frequencia_maxima){
        const batimentos_minimos_mode = Math.round(frequencia_maxima * 0.50);
        const batimentos_maxinos_mode = Math.round(frequencia_maxima * 0.70);
        return `em atividades moderadas os seus batimentos devem ficar entre ${batimentos_minimos_mode} e ${batimentos_maxinos_mode} Bpm`   
    }   
    
    function batimentos_para_atividades_intensas(frequencia_maxima){
        const batimentos_minimos_inte = Math.round(frequencia_maxima * 0.70);
        const batimentos_maximos_inte = Math.round(frequencia_maxima * 0.85);
        return `em atividades intensas os batimentos devem ficar entre ${batimentos_minimos_inte} e ${batimentos_maximos_inte} Bpm`
    }

    //Saída 
    console.log('A frequencia maxima é',frequencia_maxima, '. logo,')
    console.log(batimentos_moderados)
    console.log('e', batimentos_intensos)
}      
main()