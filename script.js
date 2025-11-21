// Add to Cart
function addToCart(name, price, img){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({name, price, img});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart!");
}

// Load Cart
function loadCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let box = document.getElementById("cart-items");

    if(cart.length === 0){
        box.innerHTML = "<h3>Your cart is empty.</h3>";
        return;
    }

    cart.forEach(item => {
        box.innerHTML += `
        <div class="cart-item">
            <div>
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
            </div>
            <img src="${item.img}" width="100">
        </div>`;
    });
}

// Goto Payment
function goToPayment(){
    window.location.href = "https://clotify.netlify.app/payment.html";
}

// Payment Success
function payNow(){
    alert("Payment Successful! Your order is placed.");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}
