new Vue({
  el: '#app',
  data: {
    title: 'hello world!'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value
    }
  }
})