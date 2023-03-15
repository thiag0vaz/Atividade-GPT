/*O Índice de Adiposidade Corporal, mais conhecido como IAC, é um método utilizado para medir a gordura corporal. 
Para o cálculo desse índice são utilizadas medidas antropométricas, como circunferência do quadril e altura.
Fórmula do IAC: IAC = (quadril / (altura * sqrt(altura))) - 18
IAC estiver entre 0 e 8,9 a pessoa tá "Magra". Se o IAC estiver entre 9 e 20,9 tá "Normal". 
Se o IAC estiver entre 21 e 25,9, tá com "Sobrepeso", e por fim se o IAC estiver entre 26 e 29,9, está em "Obesidade grau 1". 
Considerando a informação acima, além de mostrar o IAC da pessoa, 
calcule para ela qual o quadril mínino e máximo que ela deveria ter para ficar na faixa Normal.*/

import {question} from "readline-sync"

function main(){

    //Entrada  
    const quadril = Number(question('Medida do quadril (cm): '))
    const altura = Number(question('Altura (m): '))

    //Processamento 
    const altura2 = altura * Math.sqrt(altura ** 2)
    const iac = formula_do_IAC(quadril, altura2)
    
    //Saída 
    console.log('Seu IAC é', iac, '%')

}

function formula_do_IAC(quadril, altura2){
    const resultado = Math.floor(quadril / altura2) - 18
    return Math.abs(resultado) 
}
main() 