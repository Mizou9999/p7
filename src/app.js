import { init } from './init'
import { navbar } from './navbar'
import { hero } from './hero'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas,far)

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import { mapDiv } from './map'
import newMap from './newMap'
import { createMap } from './map'


const map = createMap()
const appElement = init()
navbar(appElement)
hero(appElement)

newMap('https://maps.googleapis.com/maps/api/js?libraries=places&rating&key=AIzaSyBll93EcgKSTvPgM3554BIvyutwDjFdWaw&callback=initMap')
createMap()


// fetch(nearbyUrl)
//     .then(response => response.json())
//     .then(data => {
//         restaurants = data.results

//         restaurants.forEach(restaurantId => {
//             restaurantNumber.push(restaurantId.reference)
//             for (let i = 0; i < restaurantNumber.length; i++) {
//                 let detailsUrl = `api/maps/api/place/details/json?placeid=${restaurantNumber}&key=AIzaSyBll93EcgKSTvPgM3554BIvyutwDjFdWaw`
//                 fetch(detailsUrl).then(data => data.json())
//                     .then(element => console.log(element.result.name))
//             }
//         })
//     })




// function addRestaurant() {
//     return new Promise(resolve => {
//         fetch(nearbyUrl)
//             .then(response => response.json())
//             .then(data => {
//                 restaurants = data.results
//                 restaurants.forEach(element => {
//                     restaurantNumber.push(element.reference)

//                 })
//                 restaurantNumber.forEach(data => {
//                     let detailsUrl = `api/maps/api/place/details/json?placeid=${data}&key=AIzaSyBll93EcgKSTvPgM3554BIvyutwDjFdWaw`
//                     fetch(detailsUrl)
//                         .then(result => result.json())
//                         .then(restaurant => {
//                             let comments = []
//                             restaurantDetail = {
//                                 name: restaurant.result.name,
//                                 id: restaurant.result.id,
//                                 adress: restaurant.result.vicinity,
//                                 lat: restaurant.result.geometry.location.lat,
//                                 long: restaurant.result.geometry.location.lng,
//                                 averageRating: restaurant.result.rating

//                             }


//                             restaurant.result.reviews.forEach(review => {
//                                 comments.push[review.text]
//                                 restaurantDetail.text = review.text
//                                 restaurantDetail.stars = review.rating

//                             })

//                             resolve(restaurantDetail)

//                         })
//                 })

//             })

//     })

// }
// addRestaurant()