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


// Add To Cart Test

// function courtesy of http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();

// creates a div for the cart, and attaches a section inside


function addToCart (itemObj) {
  //creates a new section and list for each product
  var $cartSection = document.createElement('table');
  $cartSection.setAttribute('class', "cart-table");

  // attaches each item data to the cart
  var totalPrice = Number(itemObj.Price) * Number(itemObj.Qty);
  //$cartSection.innerHTML = itemObj.ID + " - $" + totalPrice;
  delete itemObj.ID;
  for (var property in itemObj) { //appends a list of the user's custom selections
    var $item = document.createElement('td');
    var $itemProp = document.createElement('td');
    var $column= document.createElement('tr');
    $item.setAttribute('class', "item-name");
    $itemProp.setAttribute('class', "item-prop");
    $item.innerHTML = property;
    $itemProp.innerHTML = itemObj[property];
    $column.appendChild($item);
    $column.appendChild($itemProp);
    $cartSection.appendChild($column);
  }
  document.getElementById('item-box').appendChild($cartSection);
}


addToCart(urlParams);

function dataForServer (itemObj) {
  for (var property in itemObj) {
    var $input = document.createElement('input');
    $input.setAttribute('type', "hidden");
    $input.setAttribute('name', property);
    $input.setAttribute('value', itemObj[property]);
    document.querySelector('.list-maker-form').appendChild($input);
  }
}

dataForServer(urlParams);





});
