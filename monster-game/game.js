new Vue({
  el: '#monster',
  data: {
    playing: false,
    playerHealth: 100,
    playerHealthBar: {
      width: '100%'
    },
    monsterHealth: 100,
    monsterHealthBar: {
      width: '100%'
    },
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
        this.playerHealthBar.width = '0%'
        this.playerLoses()
      } else {
        this.playerHealthBar.width = this.playerHealth + '%'
      }
    },
    monsterHealth: function() {
      if (this.monsterHealth <= 0 ) {
        this.monsterHealthBar.width = '0%'
        this.playerWins()
      } else {
        this.monsterHealthBar.width = this.monsterHealth + '%'
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
      console.log('attack')
      let playerDamage = calculateDamage()
      this.monsterHealth -= playerDamage
      this.gameLog.push(`Player hits monster for ${playerDamage} damage! `)
      let monsterDamage = calculateDamage()
      this.playerHealth -= monsterDamage
      this.gameLog.push(`Monster hits player for ${monsterDamage} damage!`)
    },
    specialAttackButton: function() {
      let specialAttack = Math.random()
      if (specialAttack < 0.06) {
        console.log('critical fail')
        let monsterDamage = calculateDamage() + 10
        this.playerHealth -= monsterDamage
        this.gameLog.push(`Player MISSED SPECIAL ATTACK and Monster hits player for ${monsterDamage} damage!`)
      } else {
        console.log('hit')
        let playerDamage = calculateDamage() + 5
        this.monsterHealth -= playerDamage
        this.gameLog.push(`Player lands a SPECIAL ATTACK and hits monster for ${playerDamage} damage! `)
      }
      this.specialAttacksCounter--
    },
    healSelf: function() {
      console.log('heal')
      let heal = calculateHeal()
      if (this.playerHeath == 100) {
        return
      } else if (this.playerHealth + heal > 100) {
        this.playerHealth = 100
      } else {
        this.playerHealth += heal
      }
      this.healthPotions--
    },
    runAway: function() {
      this.gameLog.push('Player ran away!')
      this.playing = !this.playing
      let vm = this
      setTimeout(function() {
        vm.ranAway = true
      }, 5000)
    },
    playerWins: function() {
      console.log('won!')
      this.finished = true
      this.won = true
    },
    playerLoses: function() {
      console.log('lost!')
      this.finished = true
      this.won = false
    }
  }
})

let calculateDamage = () => {
  return Math.floor((Math.random() * 10) +1)
}

let calculateHeal = () => {
  return Math.floor((Math.random() * 6) +1)
}