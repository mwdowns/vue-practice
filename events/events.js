new Vue({
  el: "#events",
  data: {
    number: 0
  },
  methods: {
    increaseNum: function(event) {
      return this.number += 1
    },
    decreaseNum: function() {
      return this.number -= 1
    },
    alertMe: function(event) {
      console.log(event)
      alert('yo! you said: ' + event.currentTarget.value)
    }
  }
})