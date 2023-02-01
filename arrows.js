console.log('Hello!')

// arrows functions

const rightArrow = document.querySelector('#right-button')
const leftArrow = document.querySelector('#left-button')

const allRecipes = document.getElementsByClassName('recipe')
console.log(allRecipes)
const recipeArray = Array.from(allRecipes)
console.log(recipeArray)

recipeArray.forEach(recipe => {
  recipe.style.display = 'none'
})

let displayedRecipeArrayPosition = recipeArray.length - 1
recipeArray[displayedRecipeArrayPosition].style.display = 'block'

leftArrow.addEventListener('click', leftArrowFunction)

function rightArrowFunction () {
  recipeArray[displayedRecipeArrayPosition].style.display = 'none'
  if (displayedRecipeArrayPosition !== 0) {
    displayedRecipeArrayPosition -= 1
  } else if (displayedRecipeArrayPosition === 0){
    displayedRecipeArrayPosition = recipeArray.length - 1
  }
  recipeArray[displayedRecipeArrayPosition].style.display = 'block'
}

rightArrow.addEventListener('click', rightArrowFunction)

function leftArrowFunction () {
  recipeArray[displayedRecipeArrayPosition].style.display = 'none'
  if (displayedRecipeArrayPosition !== recipeArray.length - 1) {
    displayedRecipeArrayPosition += 1
  } else if (displayedRecipeArrayPosition === recipeArray.length - 1) {
    displayedRecipeArrayPosition = 0
  }
  recipeArray[displayedRecipeArrayPosition].style.display = 'block'
}

// end arrows functions
