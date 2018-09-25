new Vue({
  el: '#monster',
  data: {
    playing: false,
    playerHealth: 100,
    monsterHealth: 100,
    gameLog: [],
    ranAway: false,
    specialAttacksCounter: 3,
    healthPotions: 3,
    finished: false,
    won: false,
  },
  watch: {
    ranAway: function() {
      this.gameLog = []
    },
    playerHealth: function() {
      if (this.playerHealth <= 0) {
        this.playerHealth = 0
        this.playerLoses()
      }
    },
    monsterHealth: function() {
      if (this.monsterHealth <= 0 ) {
        this.monsterHealth= 0
        this.playerWins()
      }
    }
  },
  methods: {
    startGame: function() {
      this.gameLog = []
      this.ranAway = false
      this.playing = true
      this.playerHealth = 100
      this.monsterHealth = 100
      this.finished = false
      this.won = false
      this.specialAttacksCounter = 3
      this.healthPotions = 3
    },
    attackButton: function() {
      let playerDamage = calculateDamage(10)
      this.monsterHealth -= playerDamage
      this.gameLog.unshift(`Player hits monster for ${playerDamage} damage! `)
      let monsterDamage = calculateDamage(15)
      this.playerHealth -= monsterDamage
      this.gameLog.unshift(`Monster hits player for ${monsterDamage} damage!`)
    },
    specialAttackButton: function() {
      let specialAttack = Math.random()
      if (specialAttack < 0.06) {
        let monsterDamage = calculateDamage(15)
        this.playerHealth -= monsterDamage
        this.gameLog.unshift(`Player MISSED SPECIAL ATTACK and Monster hits player for ${monsterDamage} damage!`)
      } else {
        this.monsterHealth -= 15
        this.gameLog.unshift(`Player lands a SPECIAL ATTACK and hits monster for 15 damage! `)
      }
      this.specialAttacksCounter--
    },
    healSelf: function() {
      let heal = calculateHeal()
      if (this.playerHealth === 100) {
        this.gameLog.unshift('Player wastes a potion!')
        this.healthPotions--
        return
      } else if (this.playerHealth + heal > 100) {
        this.gameLog.unshift('Player is at full health!')
        this.playerHealth = 100
      } else {
        this.playerHealth += heal
        this.gameLog.unshift(`Player heals self for ${heal} points!`)
      }
      this.healthPotions--
    },
    runAway: function() {
      this.gameLog.unshift('Player ran away!')
      this.playing = !this.playing
      let vm = this
      setTimeout(function() {
        vm.ranAway = true
      }, 5000)
    },
    playerWins: function() {
      this.finished = true
      this.won = true
    },
    playerLoses: function() {
      this.finished = true
      this.won = false
    }
  }
})

let calculateDamage = (max) => {
  return Math.floor((Math.random() * max) +1)
}

let calculateHeal = () => {
  return Math.floor((Math.random() * 6) +1)
}