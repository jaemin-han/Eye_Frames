document.addEventListener('DOMContentLoaded', function() {
console.log('Connected');

// Declare Variables
const modal = document.getElementById('myModal')
const button = document.getElementById("modal-button")
const close = document.querySelectorAll(".close")[0]
const click = document.querySelectorAll('.click')

const openModal = function() {
  modal.style.display = "block"
}
const closeModal = function() {
  modal.style.display = "none"
}

// Event Listners
button.addEventListener('click', openModal, false)
close.addEventListener('click', closeModal, false)
for (let i = 0; i < click.length; i++) {
  click[i].addEventListener('click', openModal, false)
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

});
