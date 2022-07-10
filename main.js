var elForm = document.querySelector("#form");
var elInput = document.querySelector("#input_form");
var elSelect = document.querySelector("#select_option");

var elResult = document.querySelector("#money_text");

var UZS_TO_USD = 10910;
var UZS_TO_RUB = 140;
var UZS_TO_EUR = 10700;

var result = ""

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    var input = elInput.value;
    var select = elSelect.value;

    if (select == "1") {
        result = input / UZS_TO_USD
        elResult.textContent = result
    }

    if (select == "2") {
        result = input / UZS_TO_RUB
        elResult.textContent = result
    }

    if (select == "3") {
        result = input / UZS_TO_EUR
        elResult.textContent = result
    }
})