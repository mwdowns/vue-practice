new Vue({
  el: '#exercise',
  data: {
    bar: 0,
    blue: 'blue',
    blueBool: false,
    color: '',
    counter: 0,
    effectStyle: {
      shrink: false,
      highlight: false,
    },
    greenBorder: 'green-border',
    invervalFunction: undefined,
    progressing: {
      width: ''
    },
    userClass2: '',
    userClass: '',
  },
  watch: {
    bar: function(value) {
      if (this.bar <= 100) {
        this.progressing.width = this.bar + '%'
      } else {
        this.stopInterval(this.intervalFunction)
      }
    },
    counter: function() {
      if (this.counter > 8) {
        this.stopInterval(this.intervalFunction)
      }
    }
  },
  computed: {
    setStyle: function() {
      return {
        backgroundColor: this.color,
        height: '10px'
      }
    }
  },
  methods: {
    startEffect: function() {
      let vm = this
      this.intervalFunction = setInterval(function() {
        if (initialState(vm.effectStyle)) {
          vm.effectStyle.shrink = true
        } else {
          vm.effectStyle.shrink = !vm.effectStyle.shrink
          vm.effectStyle.highlight = !vm.effectStyle.highlight
          vm.counter++
        }
      }, 2000)
    },
    makeBlue: function(event) {
      this.blueBool = event.target.value == 'true' ?
      true :
      false
    },
    startProgress: function() {
      let vm = this
      this.intervalFunction = setInterval(function() {
        vm.bar += 5
      }, 1000)
    },
    stopInterval: function(interval) {
      clearInterval(interval)
      this.invervalFunction = undefined
    }
  }
})

let initialState = (styles) => {
  return styles.shrink == false && styles.highlight == false
}
