new Vue({
  el: '#exercise',
  data: {
    effectStyle: {
      shrink: false,
      highlight: false,
    }
  },
  methods: {
    startEffect: function() {
      let vm = this
      setInterval(function() {
        if (initialState(vm.effectStyle)) {
          vm.effectStyle.shrink = true
        } else {
          vm.effectStyle.shrink = !vm.effectStyle.shrink
          vm.effectStyle.highlight = !vm.effectStyle.highlight
        }
      }, 2000)
    },
    startProgress: function() {
      console.log('starting')
    }
  }
})

let initialState = (styles) => {
  return styles.shrink == false && styles.highlight == false
}
