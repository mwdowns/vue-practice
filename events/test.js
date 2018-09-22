new Vue({
  el: '#test',
  data: {
    value: '',
    value2: '',
    counter: 0,
    threshold: 0
  },
  computed: {
    result: function() {
      console.log('computed')
      return this.counter > 5 ? 'Greater than 5' : 'Less than 5'
    }
  },
  watch: {
    counter: function(value) {
      if (this.counter > 10) {
        this.threshold++
        this.counter = 0
      }
      if (this.counter < -5) {
        this.threshold++
        this.counter = 0
      }
    }
  },
  methods: {
    showAlert: function() {
      console.log('alert')
      alert('You clicked it dude!')
    },
    alterValue: function(event) {
      console.log('alter1')
      this.value = event.currentTarget.value
    },
    alterValue2: function(event) {
      console.log('alter2')
      this.value2 = event.currentTarget.value
    },
  }
})