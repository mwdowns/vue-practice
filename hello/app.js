new Vue({
  el: '#app',
  data: {
    title: 'hello world!',
    link: 'http://www.groundfloor.us'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value
    }
  }
})