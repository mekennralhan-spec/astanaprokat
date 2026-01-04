function calcPrice(price) {
    let days = document.getElementById("days").value;
    let total = price * days;

    document.getElementById("total").innerHTML =
        "Жалпы төлем: " + total + " тг";
}