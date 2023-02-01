const allRecipes = document.getElementsByClassName('recipe')
const recipeArray = Array.from(allRecipes)

const allBoxes = document.getElementsByClassName('clickbox')
const boxArray = Array.from(allBoxes)

const summerBox = document.querySelector('.summer-box')
const summerRecipes = document.getElementsByClassName('summer')
const summerArray = Array.from(summerRecipes)

const fallBox = document.querySelector('.fall-box')
const fallRecipes = document.getElementsByClassName('fall')
const fallArray = Array.from(fallRecipes)

let summerClick = 0;
let fallClick = 0;

document.querySelector('.summer-box-label').addEventListener('click', function () {
summerClick++;
  if (Math.floor(summerClick / 2) !== summerClick / 2) {
    summerBox.checked = true;
  } else {
    summerBox.checked = false;
  }
})

document.querySelector('.fall-box-label').addEventListener('click', function () {
fallClick++;
  if (Math.floor(fallClick / 2) !== fallClick / 2) {
    fallBox.checked = true;
  } else {
    fallBox.checked = false;
  }
})

document.querySelector('.summer-box-label').style.cursor = 'pointer'
document.querySelector('.fall-box-label').style.cursor = 'pointer'


function checkAllUnchecked () {
  let i = 0
  let allUnchecked = true
  do {

    if (allUnchecked === false) {
      break
    }

    if (boxArray[i].checked === true) {
      allUnchecked = false
    } else {
      allUnchecked = true
    }
    i++
  } while (i < boxArray.length)

  return allUnchecked
}

function displayAllArray (array) {
  array.forEach(recipe => {
    recipe.style.display = 'block'
})
}

function setDisplay () {
  recipeArray.forEach(recipe => {
    recipe.style.display = 'none'
  })
  if (checkAllUnchecked() === true) {
    displayAllArray (recipeArray)
    }
  if (summerBox.checked === true) {
    displayAllArray (summerArray)
  }
  if (fallBox.checked === true) {
    displayAllArray (fallArray)
  }
}

setInterval(function(){
  setDisplay()
}, 100)
