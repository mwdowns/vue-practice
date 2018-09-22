new Vue({
  el: '#test',
  data: {
    value: '',
    value2: ''
  },
  methods: {
    showAlert: function() {
      alert('You clicked it dude!')
    },
    alterValue: function(event) {
      this.value = event.currentTarget.value
    },
    alterValue2: function(event) {
      this.value2 = event.currentTarget.value
    }
  }
})