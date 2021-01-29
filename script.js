const addButton = document.getElementById('addQuantity');
addButton.addEventListener('click', function () {
    getInput("iphoneAmount", "addQuantity", "currentPhonePrice");
})
const removeButton = document.getElementById('removeQuantity');
removeButton.addEventListener('click', function () {
    getInput("iphoneAmount", "removeQuantity", "currentPhonePrice");
})
const addCasingButton = document.getElementById('addCasing')
addCasingButton.addEventListener('click', function () {
    getInput("casingAmount", "addCasing", "currentCasingPrice");
})
const removeCasingButton = document.getElementById('removeCasing')
removeCasingButton.addEventListener('click', function () {
    getInput("casingAmount", "removeCasing", "currentCasingPrice");
})

function getInput(id, buttonId, priceId) {
    const currentNumber = document.getElementById(id).value;
    const amountNumber = parseInt(currentNumber);
    let totalAmount = 1;
    if ((buttonId == "removeQuantity"|| buttonId == "removeCasing") && amountNumber > 1) {
        totalAmount = amountNumber - 1;
    }
    if (buttonId == "addQuantity" || buttonId == "addCasing") {
        totalAmount = amountNumber + 1;
    }
     getPrice(priceId, totalAmount);
    document.getElementById(id).value = totalAmount;
}
function getPrice(id, totalAmount) {
    let totalPrice = 1219;
    if (id == "currentPhonePrice") {
        totalPrice = 1219 * totalAmount;
    }
    if (id == "currentCasingPrice") {
        totalPrice = 59 * totalAmount;
    }
    document.getElementById(id).innerText = totalPrice;
    priceCalculator();
}
function priceCalculator() {
    const phonePrice = parseInt(document.getElementById("currentPhonePrice").innerText);
    const casingPrice = parseInt(document.getElementById("currentCasingPrice").innerText);
    const subtotal = phonePrice + casingPrice;
    document.getElementById("subtotal").innerText = subtotal;
    const tax = parseFloat((subtotal * 0.01).toFixed(2));
    document.getElementById("tax").innerText = tax;
    const total = subtotal + tax;
    document.getElementById("total").innerText = total;
}