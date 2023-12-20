Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
})

new Vue({
    el: '#app',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'How Vue makes development easy' },
            { id: 3, title: 'Vue in action: the secret weapon of top developers' }
        ]
    }
})