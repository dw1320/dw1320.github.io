const modal = document.querySelector('.modal')
const modalImage = document.querySelector('.modal-image')
const modalClose = document.querySelector('.modal-close')
const modalCaption = document.querySelector('.modal-caption')

const imageAll = document.getElementsByClassName('recipe-image-img')
const imageArray = Array.from(imageAll)

function showModalFunction (image) {
  modalImage.src = image.src
  modalCaption.innerText = image.alt
  modal.style.display = 'block'
}

imageArray.forEach(picture => {
  picture.addEventListener('click', function() {
    showModalFunction(picture);
  })
})

function closeModalFunction () {
  modal.style.display = 'none'
}

modalClose.addEventListener('click', closeModalFunction)
