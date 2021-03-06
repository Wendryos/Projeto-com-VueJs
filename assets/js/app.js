const app = {
    data() {
        return {
            name: 'Wendryos',
            lastname: 'Gonçalves',
            age: '22',
            product: {
                title: 'Beaultiful Girl 1',
                content: 'Beaultiful Girl',
                image: './assets/images/girl1.jpg',
                likes: 4
            },
            product2: {
                title: 'Beaultiful Girl 2',
                content: 'Beaultiful Girl',
                image: './assets/images/girl2.jpg',
                likes: 5
            },
            product3: {
                title: 'Beaultiful Girl 3',
                content: 'Beaultiful Girl',
                image: './assets/images/girl3.jpg',
                likes: 0
            }
        }
    }

};

Vue.createApp(app).mount('#app');