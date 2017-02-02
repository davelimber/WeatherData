// var gw = new GetWeather();
function FlixService(){
// function GetWeather(){

//     this.getWeatherData = (zipcode) => {
//       console.log(zipcode)
//       getCity(83704)
       
//       .then((data, err) => {
//         console.log('here')
//           return getWeather(data)
//       })
//       .then(function (data, err) {
//         console.log(data)

//       })
//       .catch(function (error) { console.log('Efsdfr!')
//     })
//   }
  


//     function getCity(zip) {

//         var urlBase = 'http://api.zippopotam.us/us/';
//         var url = urlBase + zip;

//         return new Promise(function (resolve, reject) {

//             $.get(url).then(
//                 function (data) {
//                     resolve(data);
//                     // console.log(data)
//                 },
//                 function (error) {
//                     reject(error);
//                     console.log("you will not see this")
//                 }
//             );
//         });
//     }

//     function getWeather(cityData) {
//         console.log("step 1")
//         var zip = cityData['post code'];
//         var urlBase = 'http://api.openweathermap.org/data/2.5/';
//         var appId = 'bd82255fd0a21fa1238699b9eda2ee35';
//         var url = urlBase + 'weather?appid=' + appId + '&units=imperial&zip=' + zip;

//         return new Promise(function (resolve, reject) {
//             console.log("step 2")
//             $.get(url).then(
//                 function (data) {
//                     resolve(data);
//                     console.log("step 3")
//                 },
//                 function (error) {
//                     reject(error);
//                 }
//             );
//         });
//     }

//     function getGuid() {

//         var url = 'http://www.setgetgo.com/guid/get.php';

//         return new Promise(function (resolve, reject) {

//             $.get(url)
//                 .then(
//                 function (guid) {
//                     resolve(guid);
//                 },
//                 function (error) {
//                     reject(error);
//                 });
//         });
//     }



};