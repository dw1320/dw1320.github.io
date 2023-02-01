const commentSubmit = document.querySelector('.submitComment')
commentSubmit.addEventListener('click', submitFunction)

function appendCommentLength () {
  let commentLength = document.querySelector('.comment-entry').value.length
  document.querySelector('.character-count').textContent = ' (Current character count: ' + commentLength + ')'

  if (commentLength > 0) {
  document.querySelector('.character-count').style.display = 'inline'
  document.querySelector('.length-lineBreak').style.display = 'block'

} else if (commentLength === 0) {
  document.querySelector('.character-count').style.display = 'none'
  document.querySelector('.length-lineBreak').style.display = 'block'

}
}

setInterval(function(){
  appendCommentLength()
}, 200);

function submitFunction () {
  const commenterName = document.querySelector('.name').value
  const commentText = document.querySelector('.comment-entry').value

let nameGood = true
let commentFull = false
let nameFull = false

if (commenterName.length !== 0) {
  nameFull = true
}

if (commentText.length !== 0) {
  commentFull = true
}

  for (let i = 0; i < commenterName.length; i++) {
    console.log(commenterName[i])
    if (isNaN(commenterName[i]) === false && commenterName[i] !== ' ') {
      if (commentFull) {
        window.alert('Please re-enter your name using characters A-Z only and then submit.')
      } else if (commentFull === false) {
        window.alert('Please re-enter your name using characters A-Z only, enter a comment, and then submit')
      }
      document.querySelector('.name').value = ''
      document.querySelector('.comment-entry').value = ''
      nameGood = false
      break
  }
}

if (nameGood && commentFull && nameFull === false) {
  window.alert('Please enter your name and then submit.')
  document.querySelector('.name').value = ''
  document.querySelector('.comment-entry').value = ''
}

if (commentFull === false && nameFull === false) {
  window.alert('Please enter your name and a comment and then submit.')
  document.querySelector('.name').value = ''
  document.querySelector('.comment-entry').value = ''
}

if (nameGood && commentFull === false && nameFull === true) {
  window.alert('Please enter a comment and then submit.')
  document.querySelector('.name').value = ''
  document.querySelector('.comment-entry').value = ''
}

if (nameGood && commentFull && nameFull) {
  if (commentText.length <= 500 && commenterName.length <= 50) {
    const commentDisplay = document.querySelector('.comments-display')
    let commenterNameDisplayed = document.createElement('div')
    let commentTextDisplayed = document.createElement('div')
    commenterNameDisplayed.textContent = 'NAME: ' + commenterName
    commentTextDisplayed.textContent = 'THOUGHTS: ' + commentText
    commentDisplay.appendChild(commenterNameDisplayed)
    commentDisplay.appendChild(commentTextDisplayed)



    document.querySelector('.name').value = ''
    document.querySelector('.comment-entry').value = ''
    document.querySelector('.name').disabled = true
    document.querySelector('.comment-entry').disabled = true
    document.querySelector('.submitComment').disabled = true
    document.querySelector('.submitComment').value = 'You already submitted a comment.'

    commentTextDisplayed.style.lineHeight = '14px'
    commentTextDisplayed.style.fontFamily = 'Palatino, "URW Palladio L", serif'
    commentTextDisplayed.style.fontSize = '9px'

    commenterNameDisplayed.style.backgroundColor = '#FFC0CB'
    commenterNameDisplayed.style.width = '25%'
    commentTextDisplayed.style.backgroundColor = '#fff'
    commentTextDisplayed.style.width = '25%'

  } else if (commentText.length > 500) {
    window.alert('Please enter a comment less than 500 characters in length and then submit.')
    document.querySelector('.name').value = ''
    document.querySelector('.comment-entry').value = ''
  } else if (commenterName.length > 50) {
    window.alert('Please enter a name less than 50 characters in length and then submit.')
    document.querySelector('.name').value = ''
    document.querySelector('.comment-entry').value = ''
  } else if (commenterName.length > 50 && commentText.length > 500) {
    window.alert('Please enter a comment less than 500 characters in length and then submit.')
    document.querySelector('.name').value = ''
    document.querySelector('.comment-entry').value = ''
  }
}
}
