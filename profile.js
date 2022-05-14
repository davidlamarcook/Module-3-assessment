let favColor = document.querySelector('#color')
let favPlace = document.querySelector('#place')
let favRitual = document.querySelector('#ritual')

function favColorAlert() {
    alert('My favorite color is blue!')
}

function favPlaceAlert() {
    alert('My favorite place is Disneyworld!')
}

function favRitualAlert() {
    alert('My favoriete ritual it to listen to Hotel California before I code!')
}

favColor.addEventListener('click', favColorAlert)
favPlace.addEventListener('click', favPlaceAlert)
favRitual.addEventListener('click', favRitualAlert)