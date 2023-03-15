/*Dada a distância da prova (em metros) e a velocidade média do atleta (em km/h), calcule o tempo da prova em minutos.*/

import {question} from "readline-sync"

function main(){
    
    //Entrada
    const distancia = Number(question('Distancia da prova (m): '))
    const velocidade = Number(question('Velocidade média (Km/h): '))

    //Processamento 

    const velocidade_metros_por_minuto = velocidade / 0.06
    const tempo_da_prova = formulacao_da_resolucao(distancia, velocidade_metros_por_minuto)

    //Saída 
    console.log('Para percorrer', distancia, 'metros a', velocidade, 'km/h, levará', tempo_da_prova, 'minutos')

}


function formulacao_da_resolucao(distancia, velocidade_metros_por_minuto){
    const tempo = Math.ceil(distancia / velocidade_metros_por_minuto)
    return tempo 
}

main()