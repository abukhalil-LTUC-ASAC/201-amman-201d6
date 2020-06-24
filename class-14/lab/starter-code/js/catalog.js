/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);
var click = 0;
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  var options = '';
  for (var i in Product.allProducts) {
    options += '<option value="' + i + '">' + Product.allProducts[i].name + '</option>';
    selectElement.innerHTML = options;
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...

  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview(event);

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  // TODO: suss out the item picked from the select list
  var selectedItem = event.target[1].value;

  // TODO: get the quantity
  var itemQuantity = event.target[2].value;

  // TODO: using those, add one item to the Cart
  cart.addItem(selectedItem, itemQuantity);


  console.log(cart);
  console.log(Product.allProducts);  

}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  click += 1
  var HTMLcount = document.getElementById("itemCount");
  HTMLcount.innerHTML = click
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(event) {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  var HTMLcontent = document.getElementById("cartContents");
  HTMLcontent.innerHTML += '<div>' + Product.allProducts[event.target[1].value].name + '</div>' 
  + '<div>' + event.target[2].value + '</div><br>'
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);
var catalogQuant = document.getElementById('quantity');

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
