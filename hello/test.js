new Vue({
    el: '#test',
    data: {
        myName: 'Matt',
        myAge: '42',
        img: 'https://i.kinja-img.com/gawker-media/image/upload/s--4g5dH6hW--/c_scale,fl_progressive,q_80,w_800/szjxkfv4uuaid6wai7ij.jpg'
    },
    methods: {
        multiAge: function() {
            return this.myAge * 3
        },
        randomNumber: function() {
            return Math.random()
        }
    }
})