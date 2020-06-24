/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
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
  var keys = Object.keys(localStorage);

  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++) {
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

    tbody.appendChild(tableData);
  }

  console.log(tableData);
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(e) {

  // document.getElementById("cart").deleteRow(i);
  e.target.parentNode.remove();
  // console.log(e.target.nextSibling)

  cart.removeItem(e.target.parentNode.classList.value);
  console.log(e.target.parentNode.classList.value);

  // cart.saveToLocalStorage();
  console.log(cart);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
