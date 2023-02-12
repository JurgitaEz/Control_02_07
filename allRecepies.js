
const inputs = document.querySelectorAll("input")
const filterBtn = document.querySelector("button")
const recipesCards = document.querySelector(".recipesCards")

let recipes = [];

function getRecipes () {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(data => {
            console.log(data)

            recipes = data.recipes

            appendRecipesCards(data.recipes)
        })
}
getRecipes()

function appendRecipesCards (data) {
        data.map (item => {
            recipesCards.innerHTML +=
                    <div class="box1 d-flex fd-column ai-center jc-center">
                        <h3>Title: ${item.strMeal}</h3>
                        <img src ="${item.strMealThumb}" alt="">
                        <h4>List of Ingrediens: ${item.strIngredient1}</h4>
                        <h4>Description: ${item.strInstructions} </h4>
                    </div>
        })
}
appendRecipesCards()
        //kodel man siulo className ??
        //kodel meta klaida "Unecpected token "<" 24 eiluteje

