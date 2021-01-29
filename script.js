var addButton = document.getElementById('addQuantity');
addButton.addEventListener('click', function () {
    getPhoneInput("iphoneAmount", "addQuantity");
    priceCalculator();
})
var removeButton = document.getElementById('removeQuantity');
removeButton.addEventListener('click', function () {
    getPhoneInput("iphoneAmount", "removeQuantity");
    priceCalculator();
})
var addCasingButton = document.getElementById('addCasing')
addCasingButton.addEventListener('click', function () {
    getCasingInput("casingAmount", "addCasing");
    priceCalculator();
})
var removeCasingButton = document.getElementById('removeCasing')
removeCasingButton.addEventListener('click', function () {
    getCasingInput("casingAmount", "removeCasing");
    priceCalculator();
})

function getPhoneInput(id, buttonId) {
    var currentNumber = document.getElementById(id).value;
    var amountNumber = parseInt(currentNumber);
    var totalAmount = 1;
    if (buttonId == "removeQuantity" && amountNumber > 1) {
        totalAmount = amountNumber - 1;
    }
    if (buttonId == "addQuantity") {
        totalAmount = amountNumber + 1;
    }
    getPrice("currentPhonePrice", totalAmount);
    document.getElementById(id).value = totalAmount;
}
function getCasingInput(id, buttonId) {
    var currentNumber = document.getElementById(id).value;
    var amountNumber = parseInt(currentNumber);
    var totalAmount = 1;
    if (buttonId == "removeCasing" && amountNumber > 1) {
        totalAmount = amountNumber - 1;
    }
    if (buttonId == "addCasing") {
        totalAmount = amountNumber + 1;
    }
    getPrice("currentCasingPrice", totalAmount);
    document.getElementById(id).value = totalAmount;
}
function getPrice(id, totalAmount) {
    var totalPrice = 1219;
    if (id == "currentPhonePrice") {
        totalPrice = 1219 * totalAmount;
        document.getElementById(id).innerText = totalPrice;

    }
    if (id == "currentCasingPrice") {
        totalPrice = 59 * totalAmount;
        document.getElementById(id).innerText = totalPrice;
    }
    return totalPrice;
}
function priceCalculator() {
    var phonePrice = parseInt(document.getElementById("currentPhonePrice").innerText);
    var casingPrice = parseInt(document.getElementById("currentCasingPrice").innerText);
    var subtotal = phonePrice + casingPrice;
    document.getElementById("subtotal").innerText = subtotal;
    var tax = parseFloat((subtotal * 0.01).toFixed(2));
    document.getElementById("tax").innerText = tax;
    var total = subtotal + tax;
    document.getElementById("total").innerText = total;
}