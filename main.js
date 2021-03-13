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
        reduceById(id) {
            const productIdx = this.cart.indexOf(id);
            if(productIdx === -1) return;
            this.cart.splice(productIdx, 1);
        }
    }
})
