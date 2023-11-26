new Vue({
    el: '#app',
    data: {
        sortBy: 'name',
        products: [
            { id: 1, name: 'Product A', description: 'Description for Product A', price: 20.99 },
            { id: 2, name: 'Product B', description: 'Description for Product B', price: 15.49 },
            { id: 3, name: 'Product C', description: 'Description for Product C', price: 25.99 },
            // Add more products as needed
        ]
    },
    computed: {
        sortedProducts: function () {
            return this.products.slice().sort((a, b) => {
                if (this.sortBy === 'name') {
                    return a.name.localeCompare(b.name);
                } else if (this.sortBy === 'price') {
                    return a.price - b.price;
                }
            });
        }
    }
});
