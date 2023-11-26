new Vue({
    el: '#app',
    data: {
        query: '',
        recipes: null,
        appId: 'bf54d590',
        appKey: 'f231db5e412a21208d40fd49d20abe6e'
    },
    methods: {
        searchRecipes: function () {
            // Fetch recipes from Edamam API
            fetch(`https://api.edamam.com/search?q=${this.query}&app_id=${this.appId}&app_key=${this.appKey}`)
                .then(response => response.json())
                .then(data => {
                    this.recipes = data.hits;
                })
                .catch(error => {
                    console.error('Error fetching recipes:', error);
                });
        }
    }
});
