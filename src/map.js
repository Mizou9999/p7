import jsonData from './restaurants.json'
import { guid, addRestaurant } from './functions'
//google map section 
//init map 
let map
let restaurants = jsonData
let restaurantsInJsonFileId = []
console.log(restaurants)

export const createMap = () => {
    function initMap() {
        let myLocation = {
            lat: 48.8737815,
            lng: 2.3501669
        };
        let option = {
            zoom: 14,
            center: myLocation
        };
        // user location

        // added the map to the HTML
        map = new google.maps.Map(document.getElementById("map"), option);

        //add marker for user Location 
        let marker = new google.maps.Marker({
            position: myLocation,
            map: map,
            title: "Hello World!"
        });
        marker.setMap(map);
        let request = {
            location: myLocation,
            radius: '500',
            type: ['restaurant']
        }
        let service = new google.maps.places.PlacesService(map)
        service.nearbySearch(request, callback)

        // add unique id to the restaurants in the json File 
        restaurants.forEach(restaurant => {
            restaurant.id = `id${guid()}`
            addRestaurant(restaurant)
            addMarkerFromJsonFile(restaurant)
            restaurantsInJsonFileId.push(restaurant.id)

        })

        // helper function that return the restaurant id from the json file


    }
    window.initMap = initMap;
    return (map, restaurants);

};

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {

        results.forEach(item => {

            createMarker(item)
                // i cant get ratings this way
            const restaurantItem = {
                id: item.id,
                restaurantName: item.name,
                address: item.vicinity,
                lat: item.geometry.location.lat,
                long: item.geometry.location.lng,
                averageRating: item.ratings
                
            }

        })
    }
}

function createMarker(place) {
    let marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    })
}

function addMarkerFromJsonFile(restaurant) {
    let restaurantGeo = {
        lat: restaurant.lat,
        lng: restaurant.long
    }

    let marker = new google.maps.Marker({
            position: restaurantGeo,
            map: map,
            title: restaurant.restaurantName
        })
        // CREATE : the info window that show up when user click on a marker 
    let infoContent = `<div class="card border-primary " style="width: 12rem;">
    <img src="https://source.unsplash.com/500x300/?food" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${restaurant.restaurantName} </h5>
      <p class="card-text"> ${restaurant.address} </p>      
    </div>
    </div> `
        // cant fix how to close the infoWindow when user click somewhere else or highlight div neither
    let elementId = document.getElementById(restaurant.id)

    let infowindow = new google.maps.InfoWindow({
        content: infoContent
    })
    marker.addListener('click', () => {
        map.setZoom(12);
        map.setCenter(marker.getPosition());
        infowindow.open(map, marker)
        elementId.classList.toggle('clickDiv')
        if (activeMarkerId.id) {
            activeMarkerId.infowindow.close()
            let restaurantItem = document.getElementById(activeMarkerId.id)
            restaurantItem.classList.remove('clickDiv')
        }
        activeMarkerId.id = restaurant.id
        activeMarkerId.infowindow = infowindow
            // add infoWindow on map 
            // show when clicked on marker
    })
    google.maps.event.addListener(map, 'click', () => {

        elementId.classList.remove('clickDiv')
            // close info window when clicked on the map 
        infowindow.close()
    })
}
// google places part :

let nearbyUrl = 'api/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=80&type=restaurant&key=AIzaSyBll93EcgKSTvPgM3554BIvyutwDjFdWaw'

function addNewRestaurant() {
    const myData = {}
    return new Promise(resolve => {
        fetch(nearbyUrl)
            .then(response => response.json())
            .then(data => {
                myData.newRest = data.results
                myData.newRest.forEach(element => {
                    addMarkerFromJsonFile(element)
                    myData[element.reference] = {
                        id: element.reference,
                        comment: []
                    }
                    let detailsUrl = `api/maps/api/place/details/json?placeid=${myData[element.reference].id}&key=AIzaSyBll93EcgKSTvPgM3554BIvyutwDjFdWaw`
                    fetch(detailsUrl).then(datas => datas.json()).then(restaurant => {

                        myData[element.reference].comment.push(restaurant.result.reviews)
                            // console.log(myData[element.reference].comment)
                    })
                })
                resolve(myData)

            })
    })
}

addNewRestaurant().then(restaurantsComments => {
    //console.log(restaurantsComments)
})

// "reviews" : [
//     {
//        "author_name" : "Robert Ardill",
//        "author_url" : "https://www.google.com/maps/contrib/106422854611155436041/reviews",
//        "language" : "en",
//        "profile_photo_url" : "https://lh3.googleusercontent.com/-T47KxWuAoJU/AAAAAAAAAAI/AAAAAAAAAZo/BDmyI12BZAs/s128-c0x00000000-cc-rp-mo-ba1/photo.jpg",
//        "rating" : 5,
//        "relative_time_description" : "a month ago",
//        "text" : "Awesome offices. Great facilities, location and views. Staff are great hosts",
//        "time" : 1491144016
//     }
//  ],
// https://www.randomuser.me/ to get random user pictures

// search restaurants places function








// user location 
// navigator.geolocation.getCurrentPosition(
//     getPosition
// );

// function getPosition(
//     user
// ) {
//     let pos = {
//         lat: user
//             .coords
//             .latitude,
//         lng: user
//             .coords
//             .longitude
//     };
//     let marker = new google.maps.Marker({
//         position: pos,
//         map: map,
//         title: "u here!",
//         icon: "https://img.icons8.com/office/40/000000/map-editing.png"
//     });

//     map.setCenter(
//         pos
//     );
// }