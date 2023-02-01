console.log('hello!')
let recipeArray = document.querySelector('.recipe')
console.log(recipeArray)

recipeArray = Array.from(recipeArray)
console.log(recipeArray)


/* let displayCondition;
for (let i = 0, i < recipeArray.length - 1, i++) {
displayCondition.push(getElementById(recipeArray[i]) + "style.display = 'none' && ")
}

const finalDisplayConditionPush = getElementById(recipeArray[recipeArray.length - 1] + ".style.display = 'none'")

if (displayCondition) {
  const getElementById.recipeArray[0] = willBeDisplayed;
  willBeDisplayed.style.display = 'inline';
} */

for (let placeHolder = 0, placeHolder < recipeArray.length, placeHolder++) {
  let recipeDisplayCheck = recipeArray[placeHolder];
  if (recipeDisplayCheck.style.display = 'block') {
break;
  } else {
recipeDisplayCheck.style.display = 'block';
break;
  }
}

// document.addEventListener('click' => divName.style.display = 'none')
