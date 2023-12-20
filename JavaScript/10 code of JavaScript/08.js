Vue.component('custom-counter', {
    template: `
    <div>
      <button @click="incrementCounter">Increment</button>
      <p>Count: {{ counter }}</p>
    </div>
 `,
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1
            this.$emit('increment')
        }
    }
})

new Vue({
    el: '#app',
    data: {
        totalIncrements: 0
    },
    methods: {
        incrementTotal: function () {
            this.totalIncrements += 1
        }
    }
})