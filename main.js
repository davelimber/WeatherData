(function () {

  var gw = new WeatherService()

   getWeatherData = (zipcode) => {
      console.log(zipcode)
      gw.getCity(zipcode)
       
      .then((data, err) => {
        console.log('here')
          return gw.getWeather(data)
      })
      .then(function (data, err) {
        console.log(data)

      })
      .catch(function (error) { console.log('Error!')
    })
  }

 new Vue({
        el: '#vue-flix',
        data: function () {
            return {
                category: 'actor',
                query: '',
                movies: [],
                details: {},
                myMovies: [],
                showDetails: false,
            }
        },
        methods: {
            search: function () {
                var x = gw.getCity(this.query)
                this.details = x
                console.log (x)
                return
            },

            setMovies: function (movies) {
                this.movies = movies
            },
            reset: function () {
                this.query = ''
                this.category = '',
                this.movies = [],changes
                this.myMovies = []
            },
            setDetails: function (movie) {
                this.details = movie
            },
            addMyMovie(movie) {
                debugger
                this.myMovies.push(movie)
                console.log(this.myMovies)
                // this.clearDetails()
            },
            removeMyMovie(movie) {
                for (var index = 0; index < this.myMovies.length; index++) {
                    if (this.myMovies[index] == movie) {
                        this.myMovies.splice(index, 1)
                    }
                }
            },
            clearDetails: function () {
                // debugger
                this.details = {}
            }
        }
    })

} ())


// {
// coord: - {
// lon: -116.24,
// lat: 43.62
// },
// weather: - [
// - {
// id: 804,
// main: "Clouds",
// description: "overcast clouds",
// icon: "04n"
// }
// ],
// base: "stations",
// main: - {
// temp: 29.21,
// pressure: 1022,
// humidity: 74,
// temp_min: 28.4,
// temp_max: 30.2
// },
// visibility: 16093,
// wind: - {
// speed: 5.82,
// deg: 230
// },
// clouds: - {
// all: 90
// },
// dt: 1485995700,
// sys: - {
// type: 1,
// id: 931,
// message: 0.2426,
// country: "US",
// sunrise: 1486047588,
// sunset: 1486083492
// },
// id: 5593814,
// name: "Garden City",
// cod: 200
// }
 




