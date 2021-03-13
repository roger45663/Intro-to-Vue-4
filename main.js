const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        reduceCart(id) {
            const productIdx = this.cart.indexOf(id);
            this.cart.splice(productIdx, 1);
        }
    }
})
