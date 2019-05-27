import Bg from './bgFinal.jpg'



let rest
export const hero = (element) => {
    // first div that should hide
    const bgImg = new Image()
    bgImg.src = Bg
    const bigContainer = document.createElement('div')
    bigContainer.id = 'big-container'

    const imgContainer = document.createElement('div')
    imgContainer.classList.add("bg-img", "d-flex", "align-items-stretch", "align-content-sm-end")
    imgContainer.id = 'eat-me'
    imgContainer.style.backgroundImage = `url(${Bg})`
    bigContainer.appendChild(imgContainer)

    const infoContainer = document.createElement('div')
    infoContainer.classList.add('container-fluid', 'd-flex', 'align-items-start')
    imgContainer.appendChild(infoContainer)
    const row = document.createElement('div')
    row.classList.add('row')
    infoContainer.appendChild(row)
    const col = document.createElement('div')
    col.classList.add('col-lg-12', 'text-center', 'text-container', 'mt-5', 'pt-5')
    row.appendChild(col)


    const title = document.createElement('h1')
    title.innerHTML = 'Find the best restaurants Near you!'
    title.classList.add('head', 'h1')
    col.appendChild(title)

    const btn = document.createElement('button')
    btn.classList.add('btn', 'btn-primary', 'btn-lg', 'search-btn')
    btn.innerHTML = 'Start Now'
    btn.id = 'start-btn'
    col.appendChild(btn)

    // second div that should show up 
    const newDivContainer = document.createElement('div')
    const newDiv = document.createElement('div')
    newDiv.classList.add('container-fluid', 'd-none', 'align-center', 'bg-light')
    newDiv.id = 'principal'
    newDivContainer.appendChild(newDiv)
    const newDivRow = document.createElement('div')
    newDivRow.classList.add('row', 'align-center')
    newDiv.appendChild(newDivRow)
    const newDivCol = document.createElement('div')
    newDivCol.classList.add('col-md-6', 'col-sm-12', 'offset-md-3')
    newDivRow.appendChild(newDivCol)
    const searchArea = document.createElement('div')
    searchArea.classList.add('input-group', 'mb-3', 'mt-5')
    newDivCol.appendChild(searchArea)
    const input = document.createElement('input')
    input.classList.add('form-control')
    input.placeholder = 'Search for a Restaurant'
    input.setAttribute('aria-label', "Recipient's username")
    input.setAttribute('aria-describedby', "button-addon2")
    input.type = 'text'
    searchArea.appendChild(input)

    const inputGroup = document.createElement('div')
    inputGroup.classList.add('input-group-append')
    searchArea.appendChild(inputGroup)

    const searchB = document.createElement('button')
    searchB.classList.add('btn', 'btn-primary')
    searchB.innerHTML = 'Search'

    inputGroup.appendChild(searchB)




    // CREATE MAP and RESTAURANTS div 
    const mapContainer = document.createElement('div')
    mapContainer.classList.add('container-fluid', 'mt-5')


    // map div
    const mapRow = document.createElement('div')
    mapRow.classList.add('row')
    mapContainer.appendChild(mapRow)
    const mapCol = document.createElement('div')
    mapCol.classList.add('col-lg-5')
    mapRow.appendChild(mapCol)
    const stikyDiv = document.createElement('div')
    stikyDiv.classList.add('position-sticky')
    mapCol.appendChild(stikyDiv)
    const map = document.createElement('div')
    map.id = 'map'
    stikyDiv.appendChild(map)

    // restaurants div 

    const restaurantsDiv = document.createElement('div')
    restaurantsDiv.id = 'main-div'
    restaurantsDiv.classList.add('col-lg-7')
    mapRow.appendChild(restaurantsDiv)
    const restaurantDetail = document.createElement('div')
    restaurantDetail.id = 'restaurants-div'
    restaurantsDiv.appendChild(restaurantDetail)
    const commentsAndDetailsDiv = document.createElement('div')
    commentsAndDetailsDiv.classList.add('d-none')
    commentsAndDetailsDiv.id = 'comments'
    restaurantsDiv.appendChild(commentsAndDetailsDiv)




    newDiv.appendChild(mapContainer)
    bigContainer.appendChild(newDivContainer)

    btn.onclick = function() {
        newDiv.classList.remove('d-none')
        imgContainer.classList.add('d-none')
        imgContainer.classList.remove('d-flex')
    }
    element.appendChild(bigContainer)
    return restaurantsDiv

}