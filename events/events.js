new Vue({
  el: "#events",
  data: {
    number: 0
  },
  methods: {
    increaseNum: function(event) {
      console.log(event)
      return this.number += 1
    },
    decreaseNum: function() {
      return this.number -= 1
    }
  }
})