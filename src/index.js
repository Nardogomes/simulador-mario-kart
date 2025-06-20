const player1 = {
  name: "Mario",
  speed: 4,
  maneuverability: 3,
  power: 3,
  points: 0
}

const player2 = {
  name: "Luigi",
  speed: 3,
  maneuverability: 4,
  power: 4,
  points: 0
}

async function rollDice() {
  return Math.floor(Math.random() * 6 ) + 1
}

async function getRandomBlock() {
  let random = Math.random()
  let result

  switch(true) {
    case random < 0.33:
      result = "RETA"
      break;
    case random < 0.66:
      result = "CURVA"
      break;
    default:
      result = "CONFRONTO"
  }

  return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
  return console.log(`${characterName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function playRaceEngine(character1, character2) {
  for(let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`)

    // Sortear bloco
    let block = await getRandomBlock()
    console.log(`Bloco: ${block}`)
    // Rolar dados
    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()
  
    // Teste de habilidade
    let totalTesteSkill1 = 0
    let totalTesteSkill2 = 0
  
    if(block === "RETA") {
      totalTesteSkill1 = diceResult1 + character1.speed
      totalTesteSkill2 = diceResult2 + character2.speed
  
      await logRollResult(character1.name, "velocidade", diceResult1, character1.speed)
      await logRollResult(character2.name, "velocidade", diceResult2, character2.speed)
    }
  
    if(block === "CURVA") {
      totalTesteSkill1 = diceResult1 + character1.maneuverability
      totalTesteSkill2 = diceResult2 + character2.maneuverability
  
      await logRollResult(character1.name, "manobrabilidade", diceResult1, character1.maneuverability)
      await logRollResult(character2.name, "manobrabilidade", diceResult2, character2.maneuverability)
    }
  
    if(block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.power
      let powerResult2 = diceResult1 + character2.power
    }
  }
}

(async function main() {
  console.log(`🚥🏁 Corrida entre ${player1.name} e ${player2.name} começando.. \n`)

  await playRaceEngine(player1, player2)
})()
