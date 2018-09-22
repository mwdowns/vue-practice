new Vue({
  el: '#test2',
  data: {
    value: 0
  },
  watch: {
    result: function(value) {
      console.log(value)
      let vm = this
      setTimeout(function() {
        if (value == 'Got it') {
          vm.value = 0
        }
      }, 5000)
    }
  },
  computed: {
    result: function() {
      return this.value == 37 ? 'Got it' : 'Not there yet'
    }
  }
})