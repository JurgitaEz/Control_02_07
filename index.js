
const button = document.querySelectorAll("button")
const inputs = document.querySelectorAll("input")
const imgBox = document.querySelector("img")
const recepesCards = document.querySelector(".recepesCards")

const previewTitle = document.getElementById("previewTitle")
const previewCalories = document.getElementById("previewCalories")
const listOfIngrediens = document.querySelector("h4")
const previewDescription = document.querySelector("p")

let meals = [];
let images = [];
let instructions = [];


function getMeal () {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            meals = data.meals

            const image = data.meals[0].strMealThumb
            images.push (image)
            console.log(image)

            const instruction = data.meals[0].strInstructions
            instructions.push (instruction)
            console.log(instruction)
        })
}
getMeal()

button[0].onclick = () => {
   console.log("prideda ingridientus")
}

button[1].onclick = () => {
   console.log("prideda nuotrauka")
}

button[2].onclick = () => {
    console.log("prideda i preview")

    previewTitle.innerHTML = "Title: " + inputs[0].value
    listOfIngrediens.innerHTML = "List of ingrediens " + inputs[1].value
    previewCalories.innerHTML = "Calories: " + inputs[2].value
    previewDescription.innerHTML = "Descriptio: " + instructions
    imgBox.src = images

    inputs[0].value = null
    inputs[1].value = null
    inputs[2].value = null
}

button[3].onclick = () => {
    console.log("prideda i List")
    //kaip prideti, kad nukeliautu i kita puslapi?
}
