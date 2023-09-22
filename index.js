const removeBtn = document.getElementsByClassName("btn-remove");
const total = document.getElementsByClassName("total");
const updatePrice = document.getElementsByClassName("updateTotal");

for (let i = 0; i < removeBtn.length; i++) {
    const removeTheButton = removeBtn[i];
    removeTheButton.addEventListener("click", removeCartItem);

    const innerHtmlInputs = document.getElementsByClassName("input-field");

    for (let i = 0; i < innerHtmlInputs.length; i++) {
        const inputsLoop = innerHtmlInputs[i];
        inputsLoop.addEventListener("change", quantityValueChanged);
    }

    const addTOCartButton = document.getElementsByClassName("add-to-cart");

    for (let i = 0; i < addTOCartButton.length; i++) {
        const addCart = addTOCartButton[i];
        addCart.addEventListener("click", addToCartClicked);
    }
    document.getElementsByClassName("purchase")[0].addEventListener("click" , purchaseButton)
}

function purchaseButton(){
     const removePurchased = document.getElementsByClassName("cart-col")[0]

     while(removePurchased.hasChildNodes()){
        removePurchased.removeChild(removePurchased.firstChild)
     }

     updateCartTotal()
}

function removeCartItem(e) {
    let removeElement = e.target;
    removeElement.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityValueChanged(e) {
    const inputFieldValues = e.target;
    if (isNaN(inputFieldValues.value) || inputFieldValues.value <= 0) {
        inputFieldValues = 1;
    }
    updateCartTotal();
}

function addToCartClicked(e) {
    const button = e.target;
    const cartColContainer = button.parentElement.parentElement.parentElement;
    const title = cartColContainer.getElementsByClassName("title")[0].innerText;
    const price =
        cartColContainer.getElementsByClassName("priceTag")[0].innerText;
    const imgSrc = cartColContainer.getElementsByClassName("img")[0].src;

    addToCart(title, price, imgSrc);
    updateCartTotal()
}

function addToCart(title, price, imgSrc) {
    const itemCol = document.createElement("div");
    const cartCol = document.getElementsByClassName("cart-col")[0];
    const shoppingTitle = cartCol.getElementsByClassName("wrapper-cart-purchase-title")
    for(let i = 0; i < shoppingTitle.length; i++) {
        if(shoppingTitle[i].innerText == title){
            alert('You have already added to cart')

            return
        }
    }

    const itemColContent = `
        <div class="item-col">
                        <div class="wrapper-img-cart">
                            <img src="${imgSrc}" alt="" class="cart-img" width="100" height="100"
                                style="object-fit: cover;">
                        </div>
                            <div class="wrapper-cart-purchase-price">
                                <p>${price}</p>
                        </div>
                        <div class="wrapper-cart-purchase-title">
                        <h3>${title}</h3>
                    </div>
                
                        <div class="wrapper-cart-input-quantity">
                            <input type="number" class="input-field" value="1"><button class="btn-remove">remove</button>
                        </div>
                    </div>
  `;
  itemCol.innerHTML = itemColContent
    cartCol.append(itemCol);
    itemCol.getElementsByClassName("btn-remove")[0].addEventListener('click',removeCartItem)
    itemCol.getElementsByClassName("input-field")[0].addEventListener('change',quantityValueChanged)
}

function updateCartTotal() {
    const cartColumnContainer = document.getElementsByClassName("cart-col")[0];
    const columns = cartColumnContainer.getElementsByClassName("item-col");
    let total = 0;
    for (let i = 0; i < columns.length; i++) {
        const col = columns[i];

        const priceEl = col.getElementsByClassName(
            "wrapper-cart-purchase-price"
        )[0];
        const quantityEl = col.getElementsByClassName("input-field")[0];

        const price = parseFloat(priceEl.innerText.replace("$", ""));
        const input = quantityEl.value;
        total = total + price * input;
        // console.log( cartColumnContainer.getElementsByClassName("item-col"))
        // console.log(col);
        console.log(quantityEl);
    }

    total = Math.round(total * 100) / 100;
    updatePrice[0].innerText = ` :$${total}`;
}
