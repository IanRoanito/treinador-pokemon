let treinador = "iJosefu"
let pokemons = ["Aggron", ", Tyrantrum" , ", Gardevoir" , ", Dragonite" , ", Hydreigon" , ", Ursaluna" , ", Gyarados!!"]
let poke = pokemons

//algumas coisas sobre 
let sobreAggron = " tem um chifre suficientemente afiado para perfurar folhas de ferro grossas. Ele derruba os seus adversários ao bater-lhes o chifre primeiro. "
let sobreTyrantrum = " é um Pokémon de cerca de 100.000.000 anos atrás. Tem a presença de um rei, cruel, mas magnífico. "
let sobreTyrantrum2 = " Uma única mordida das enormes mandíbulas de Tyrantrum demolirá um carro. Este Pokémon era o rei do mundo antigo. "
let sobreGardevoir = " liberando energia psicocinética em potência máxima ao proteger um Treinador com quem se ligou de perto. "
let sobreGardevoir2 = " Para proteger seu Treinador, ele gastará todo o seu poder psíquico para criar um pequeno buraco negro. "
let sobreDragonite = " ele pode voar apesar de seu físico grande e volumoso. Ele circula o globo em apenas 16 horas. "
let sobreDragonite2 = " Diz-se que em alguns lugares no oceano se encontra uma ilha onde estes se reúnem. Só eles moram lá. "
let sobreHydreigon = " cresceu feroz porque as pessoas em tempos passados o odiavam, considerando-o mal encarnado e atacando-o incansavelmente. "
let sobreHydreigon2 = " Apenas a cabeça central tem um cérebro. É muito inteligente, mas só pensa em destruição. "
let sobreUrsaluna = ", acredito que foi o terreno pantanoso de Hisui que deu a Ursaluna seu físico corpulento e sua recém-descoberta capacidade de manipular turfa à vontade. "
let sobreGyarados = ", uma vez que aparece, ele entra em um tumulto. Permanece enfurecido até demolir tudo ao seu redor. "

const pontosDePoder = " pontos de poder e com "
const alturaPeso = " de altura e está pesando "
const pontosDeVida = " pontos de vida. "



//dados dos pokémons
let timePokemon = [
    ["Aggron", "AÇO/ROCHA", "Feminino", 2843, 142, "2,06m", "353,17kg."],
    ["Tyrantrum", "ROCHA/DRAGÃO", "Masculino", 3001, 162, "1,88m", "170,49kg."],
    ["Gardevoir", "PSÍQUICO/FADA", "Masculino", 3006, 144, "1,79m", "57,3kg."],
    ["Dragonite", "DRAGÃO/VOADOR", "Masculino", 3080, 158, "2,09m", "198,17kg."],
    ["Hydreigon", "SOMBRIO/DRAGÃO", "Masculino", 3102, 165, "1,64m", "119,13kg."],
    ["Ursaluna", "TERRESTRE/NORMAL", "Masculino", 3317, 214, "2,95m", "466,25kg."],
    ["Gyarados", "ÁGUA/VOADOR", "Feminino", 3011, 169, "7,53m", "303,85kg."]
]

console.log("Olá! Eu me chama " + treinador + " e vou fala um pouco sobre meus Pokémons capturados no Jogo Pokémon Go! " + poke[0] + 
poke[1] + poke[2] + poke[3] + poke[4] + poke[5] + poke[6])

console.log()//espaço

console.log("Começando pelo " + timePokemon[0][0] + " ele é um Pokémon do tipo " + timePokemon[0][1] + " com " + timePokemon[0][3] + pontosDePoder + timePokemon[0][4] +
pontosDeVida + timePokemon[0][0] + " do sexo " + timePokemon[0][2] + " é a forma evolutiva de Lairon e a forma final de Aron, " + timePokemon[0][0] + sobreAggron + "Meu " + timePokemon[0][0] + " tem " + timePokemon[0][5] + alturaPeso + timePokemon[0][6])
console.log(timePokemon[0][0] + " tem fraqueza contra Pokémons do tipo Água e Lutador")

console.log()//espaço

console.log("O grande " + timePokemon[1][0] + sobreTyrantrum + "Do tipo " + timePokemon[1][1] + " com " + timePokemon[1][3] + pontosDePoder + timePokemon[1][4] + 
pontosDeVida + timePokemon[1][0] + " do sexo " + timePokemon[1][2] + " é a forma final de Tirano." + sobreTyrantrum2 + "Meu " + timePokemon[1][0] + " tem " + timePokemon[1][5] + alturaPeso + timePokemon[1][6])
console.log(timePokemon[1][0] + " tem fraqueza contra Pokémons do tipo Gelo, Lutador, Fada e Aço.")

console.log()//espaço

console.log("Agora a graciosa " + timePokemon[2][0] + " sendo um Pokémon do tipo " + timePokemon[2][1] + sobreGardevoir + "Com " + timePokemon[2][3] + pontosDePoder + timePokemon[2][4] + 
pontosDeVida + timePokemon[2][0] + " do sexo " + timePokemon[2][2] + " é a uma das formas evolutivas de Ralts e podendo ser uma das formas finais de Kirlia." + sobreGardevoir2 + "Meu " + timePokemon[2][0] + " tem " + timePokemon[2][5] + alturaPeso + timePokemon[2][6])
console.log(timePokemon[2][0] + " tem fraqueza contra Pokémons do tipo Veneno, Fantasma e Aço.")

console.log()//espaço

console.log("O forte dragão " + timePokemon[3][0] + sobreDragonite + "Do tipo " + timePokemon[3][1] + " com " + timePokemon[3][3] + pontosDePoder + timePokemon[3][4] +
pontosDeVida + timePokemon[3][0] + " do sexo " + timePokemon[3][2] + " é a forma evolutiva de Dratini e a forma final de Dragonair." + sobreDragonite2 + "Meu " + timePokemon[3][0] + " tem " + timePokemon[3][5] + alturaPeso + timePokemon[3][6])
console.log(timePokemon[3][0] + " tem fraqueza contra Pokémons do tipo Gelo, Rocha e Fada.")

console.log()//espaço

console.log("Diz-se que " + timePokemon[4][0] + sobreHydreigon + "Do tipo " + timePokemon[4][1] + " com " + timePokemon[4][3] + pontosDePoder + timePokemon[4][4] + 
pontosDeVida + timePokemon[4][0] + " do sexo " + timePokemon[4][2] + " é a forma evolutiva de Deino e a forma final de Zweilous." + sobreHydreigon2 + "Meu " + timePokemon[4][0] + " tem " + timePokemon[4][5] + alturaPeso + timePokemon[4][6])
console.log(timePokemon[4][0] + " tem fraqueza contra Pokémons do tipo Gelo, Lutador e Fada")

console.log()//espaço

console.log("O grande " + timePokemon[5][0] + sobreUrsaluna + "Do tipo " + timePokemon[5][1] + " com " + timePokemon[5][3] + pontosDePoder + timePokemon[5][4] + 
pontosDeVida + timePokemon[5][0] + " do sexo " + timePokemon[5][2] + " é a forma evolutiva de Teddiursa e a forma final de Ursaring da região de Hisui. " + "Meu " + timePokemon[5][0] + " tem " + timePokemon[5][5] + alturaPeso + timePokemon[5][6])
console.log(timePokemon[5][0] + " tem fraqueza contra Pokémons do tipo Água, Grama, Gelo e Lutador")

console.log()//espaço

console.log("O temido " + timePokemon[6][0] + sobreGyarados + "Do tipo " + timePokemon[6][1] + " com " + timePokemon[6][3] + pontosDePoder + timePokemon[6][4] + 
pontosDeVida + timePokemon[6][0] + " do sexo " + timePokemon[6][2] + " é a forma evolutiva final de Magikarp. " + "Meu " + timePokemon[6][0] + " tem " + timePokemon[6][5] + alturaPeso + timePokemon[6][6])
console.log(timePokemon[6][0] + " tem fraqueza contra Pokémons do tipo Elétrico e Rocha")