var photoOfMe = document.getElementById('photoOfMe');
function photoOfMeFunction() {
  photoOfMe.style.display = 'none';
}
photoOfMe.addEventListener('click', function(){
  console.log('Image clicked!')
  photoOfMeFunction();
})

/* console.log('Success connecting!')

const aboutImage = document.getElementById

function imageClickFunction() {
  console.log('Image clicked!!');
  document.getElementById('aboutImage').style.display = 'none';
}

imageClickFunction(); */

// document.getElementById('aboutImage').addEventListener("click", imageClickFunction());



/* #about {
  position: fixed;
  width: 150px;
  left: 460px;
  top: 78px;
  line-height: 14px;
  font-family: Palatino, "URW Palladio L", serif;
}

#aboutImage {
  width: 150px;
  height: auto; */
