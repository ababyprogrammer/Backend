Vue.component('my-component', {
    template: '<div>{{ message }}</div>',
    data: function () {
        return {
            message: 'Hello from MyComponent!'
        };
    }
});

export default {
    name: 'MyComponent',
    data() {
        return {
            message: 'Hello from MyComponent!'
        };
    }
};