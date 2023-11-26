new Vue({
    el: '#app',
    data: {
        location: '',
        weatherData: null,
        forecastData: null,
        apiKey: '4be4378e9bc98e01d259c5f85793fe01'
    },
    methods: {
        getWeather: function () {
            // Fetch current weather data
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=${this.apiKey}`)
                .then(response => response.json())
                .then(data => {
                    this.weatherData = data;
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });

            // Fetch 5-day forecast data
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.location}&units=metric&appid=${this.apiKey}`)
                .then(response => response.json())
                .then(data => {
                    this.forecastData = data;
                })
                .catch(error => {
                    console.error('Error fetching forecast data:', error);
                });
        },
        formatDate: function (timestamp) {
            const date = new Date(timestamp * 1000);
            return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        }
    }
});
