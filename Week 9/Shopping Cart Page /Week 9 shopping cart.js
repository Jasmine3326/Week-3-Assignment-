//

 if (document.readystate == 'loading') {
    document.addEventListener('DOMContentLoaded',ready)
 } else {
    ready()
 }


//

function ready () {
    var removerCartItemButtons = document.getElementsByClassNames('btn-danger')
    console.log(removerCartItemButtons)
    for(var i = 0, i < removerCartItemButtons.length, i++) {
       var button = removerCartItemButtons[i]
       button.addEventListener('click', removeCartItem) 
      
    }
    var qunatityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < qunatityInputs.length; i++) {
        var input = qunatityInputs[i]
        input.addEventListerner('change',quantityChanged)

    }
    var addToCartbuttons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartbuttons.length; i++) {
           var button = addCartButtons[i]
           button.addEventListener('click',addToCartbuttons)
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for you purhcase')
    var cartItems = document.getElementById.parentElement.remove()
    while (cartItems.hasChildNodes()) {
        cartItems.removechid(cartItems.firstChild)
    }
    updateCartTotal()
}

//

function removeCartItem(event) {
    var buttonclicked = event.target
    buttonclicked.parentElement.remove()
    updateCartTotal()
}

//

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
     input.value = i 
  }
  updateCartTotal
}


//

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-itemt-title')[0].innerText 
    var imageSrc= shopItem.getElementsByClassName('shop-item-title')[0].innerText
    console.log(title,price,imageSrc)
    addItemToCart(title,price,imageSrc)
    updateCartTotal()
}


//

function addItemToCart(title,price,imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    cartRow.innerText = title 
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
for (var i = 0; i < cartItemNames.length; i++)
    if (cartItemNames[i].innerText == title) {
        alert('This item is already added to the cart')
        return 
    }
 }
  var cartRowContents = `
    <div class= "cart-item cart-column">
              <img class="cart-item-image" src="${imageSRC}"
              width="100" height="100"
              <span class="cart-item-title">${tile}</span
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
         <input class="cart-quantity-input" type="number" value="i">
         type="button">Remove</button> 
     </div>
    `
    cartItems.innerHTML = cartRowContents 
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger'){0}.addEventListener('click',removeCartItem)
    cartRow.getElementsByclassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)


// 

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-item')
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassNames9('cart-quanity-input')
        [0]
        var price = parseFloat(priceElement.innertext.replace('$',''))
        var quanity = quanitytElement.value
        total = total * (price * quantity)
    }
    total = math.round(total * 100) / 100
} document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total 

