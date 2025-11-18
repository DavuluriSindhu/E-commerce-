// Add item to cart
function addToCart(name, price, img){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({name, price, img});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

// Load cart items
function loadCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cart-items");

    if(cart.length === 0){
        container.innerHTML = "<h2>Your cart is empty.</h2>";
        return;
    }

    cart.forEach(item => {
        container.innerHTML += `
        <div class="cart-item">
            <div>
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
            </div>
            <img src="${item.img}" width="120px">
        </div>
        `;
    });
}
