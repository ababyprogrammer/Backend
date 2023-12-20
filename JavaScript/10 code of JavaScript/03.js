new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
})