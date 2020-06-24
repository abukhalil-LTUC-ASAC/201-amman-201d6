/* global Cart */
'use strict';

var click = parseInt(localStorage.getItem('click')) || 0;
var HTMLcount = document.getElementById("itemCount");

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.style.display = "none";

table.addEventListener('click', removeItemFromCart);
var cart;
var tbody = document.getElementsByTagName('tbody')[0];

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tbody.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  HTMLcount.innerHTML = click
  var keys = Object.keys(localStorage);

  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++) {

    if (cart.items[i][0]) {
      table.style.display = "block";

      var tableData = document.createElement('tr');
      tableData.classList.add(i)

      var td = document.createElement('td');
      td.innerHTML = 'delete'
      tableData.appendChild(td);
  
      var td = document.createElement('td');
      td.innerHTML = cart.items[i][1]
      tableData.appendChild(td);
  
      var td = document.createElement('td');
      td.innerHTML = cart.items[i][0]
      tableData.appendChild(td);  
    }
    tbody.appendChild(tableData);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(e) {
  if (e.target.parentNode.classList.value){
    click -= 1;
    HTMLcount.innerHTML = click;
    localStorage.setItem('click',click)

    e.target.parentNode.remove();
    cart.removeItem(e.target.parentNode.classList.value);
  }

  // cart.saveToLocalStorage();

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
