/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product. COMPLETE.
  var selectElement = document.getElementById('items');

  for (var i =0; i < Product.allProducts.length; i++) {
    var option_el = document.createElement('option');
    option_el.textContent = Product.allProducts[i].name;
    selectElement.appendChild(option_el);

  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(submit) {
  // TODO: Prevent the page from reloading. COMPLETE.
  submit.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  var catalog_item = document.getElementById('items').value;
  console.log(catalog_item.value);    // TODO: suss out the item picked from the select list    // TODO: get the quantity
  var catalog_quantity = document.getElementById('quantity').value;
  console.log(catalog_item, catalog_quantity);
  cart.addItem(catalog_item, catalog_quantity);  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var myElement = document.getElementById('cartContents');
  var div_el = document.createElement('div');
  var items = cart.items;
  var cartItem = items[items.length-1];
  div_el.textContent = cartItem.product.name + ' ' + cartItem.quantity;  //figure out
  console.log(cart);
  console.log(cart.items);              // TODO: Get the item and quantity from the form
  myElement.appendChild(div_el);          // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
