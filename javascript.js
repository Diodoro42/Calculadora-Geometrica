let resposta = ''
let areaTriangulo = 0
let areaRetangulo = 0
let areaQuadrado = 0
let areaTrapezio = 0
let areaCirculo = 0



do{
    resposta = prompt('Qual Opção você quer seguir?\n\n' +
    
    "1. Calcular a Area de um Triangulo.\n" +
    "2. Calcular a Area de um Retangulo.\n" +
    "3. Calcular a Area de um Quadrado.\n" +
    "4. Calcular a area de um Trapézio.\n" +
    "5. Calcular a area de um Circulo.\n" +
    "6. Sair"

    
    ) ; if(resposta >= 7 || resposta <= 0){
        alert("Escolha uma Opção Valida!")

    } else
    switch(resposta){
        case "1":
            function calcularAreaTriangulo(base,altura){
                 areaTriangulo = (base * altura) / 2
            
            }

            let baseTriangulo = Number(prompt('Qual o valor da Base do Triangulo?'))
            let alturaTriangulo = Number(prompt('Qual o valor da altura do Triangulo?'))

            calcularAreaTriangulo(baseTriangulo,alturaTriangulo)
            alert(`A area do Triangulo é igual a base X altura / 2, então teremos:\n\n${baseTriangulo}  * ${alturaTriangulo} / 2. \n\nTotalizando: ${areaTriangulo}.`)

            break
        case "2":
            function calcularAreaRetangulo(base,altura){
                 areaRetangulo = base * altura

            }

            let baseRetangulo = Number(prompt("Qual o valor da Base do Retangulo?"))
            let alturaRetangulo = Number(prompt('Qual o valor da Altura do Retangulo?'))

            calcularAreaRetangulo(baseRetangulo,alturaRetangulo)
            alert(`A Area do Retangulo é igual a base X altura, então teremos:\n\n${baseRetangulo} X ${alturaRetangulo}.\n\nTotalizando ${areaRetangulo}.`)
            break
        case "3":
            const calcularAreaQuadrado = (lado) => {
                areaQuadrado = lado ** 2

            }

            let lado = Number(prompt("Qual o valor do Lado do Quadrado?"))

            calcularAreaQuadrado(lado)
            alert(`A area do quadrado é igual a : lado ao quadrado, então teremos:\n\n${lado}². \n\nTotalizando: ${areaQuadrado}.`)
            break
        case "4":
            const calcularAreaTrapezio = (baseMaior, baseMenor, altura) =>{
                areaTrapezio = (baseMaior + baseMenor) * altura / 2
            }
            let baseMaior = Number(prompt("Qual o valor da Base Maior?"))
            let baseMenor = Number(prompt("Qual o valor da Base Menor?"))
            let alturaTrapezio = Number(prompt("Qual o valor da altura do Trapézio?"))

            calcularAreaTrapezio(baseMaior,baseMenor,alturaTrapezio)
            alert(`A Area do Trapézio é igual a ( baseMaior + baseMenor ) X altura / 2, sendo assim teremos:\n\n( ${baseMaior} + ${baseMenor} ) * ${alturaTrapezio} / 2. \n\nTotalizando: ${areaTrapezio}.`)
            break
        case "5":
            const calcularAreaCirculo = (raio) =>{
                areaCirculo = 3.14 * (raio ** 2)

            }
            let raio = Number(prompt("Qual é o Raio do Circulo?"))

            calcularAreaCirculo(raio)
            alert(`A Area do Circulo é igual a PI ( 3.14 ) X raio ao quadrado, então teremos:\n\n3.14 X ( ${raio}² ). \n\nTotalizando: ${areaCirculo}.`)

            break

    }

}while (resposta != 6)