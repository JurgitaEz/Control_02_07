
const button = document.querySelectorAll("button")
const inputs = document.querySelectorAll("input")
const imgBox = document.querySelector("img")

let meals = [];
let images = [];

function getMeal () {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            meals = data.meals

            const image = data.meals[0].strMealThumb
            images = image
            console.log(image)
            appendImgBox(data)
        })
}
getMeal()

button[0].onclick = () => {
   console.log("prideda ingridientus")
}

function appendImgBox (data) {
    imgBox.innerHTML = images
}
button[1].onclick = () => {
    getMeal()
    appendImgBox()
    console.log("prideda nuotrauka")
}

button[2].onclick = () => {
    console.log("prideda i preview")
}

button[3].onclick = () => {
    console.log("prideda i List")
}
