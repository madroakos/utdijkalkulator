function count() {
    let distance = parseFloat(document.getElementById("kmField").value === "" ? 0 : document.getElementById("kmField").value);
    let consumption = parseFloat(document.getElementById("consumptionInputField").value === "" ? 0 : document.getElementById("consumptionInputField").value);
    let priceOfGas = parseFloat(document.getElementById("priceOfGasInputField").value === "" ? 0 : document.getElementById("priceOfGasInputField").value);
    let otherPrices = parseFloat(document.getElementById("otherPrices").value === "" ? 0 : document.getElementById("otherPrices").value);
    let numberOfPeople = parseInt(document.getElementById("numberOfPeople").value === "" ? 1 : document.getElementById("numberOfPeople").value);
    let chosenStamp = parseInt(document.getElementById("stickerChooser").value === "" ? 0 : document.getElementById("stickerChooser").value);

    var divOfPriceLabel = document.getElementById("divPrice");
    var priceLabel = document.getElementById("priceOfTrip");
    var divOfPricePerPeopleLabel = document.getElementById("divPricePerPeople");
    var pricePerPeopleLabel = document.getElementById("priceOfTripPerPerson");

    switch (chosenStamp) {
        case 1: otherPrices += 6400; break;
        case 2: otherPrices += 10360; break;
        case 3: otherPrices += 57260; break;
        default: otherPrices += 0; break;
    }

    let sum = ((consumption / 100) * distance * priceOfGas) + otherPrices;

    if (numberOfPeople <= 1 || numberOfPeople === null) {
        divOfPricePerPeopleLabel.classList.add("d-none");

        priceLabel.value = sum.toFixed(0);
        divOfPriceLabel.classList.remove("d-none");
    } else {
        priceLabel.value = sum.toFixed(0);
        divOfPriceLabel.classList.remove("d-none");

        pricePerPeopleLabel.value = (sum / numberOfPeople).toFixed(0);
        divOfPricePerPeopleLabel.classList.remove("d-none");
    }
}