var entry = document.getElementById("submit");

entry.addEventListener("click", displayDetails);

var row = -1;

function displayDetails() {
    var name = document.getElementById("shopName").value;
    var amount = document.getElementById("shopAmount").value;
    var date = document.getElementById("shopDate").value;


    if(!name || !amount || !date) {
        alert("Please input value");
        return;
    }

    var display = document.getElementById("table");

    var newRow = display.insertRow(row);

    var cellName = newRow.insertCell(0);
    var cellAmount = newRow.insertCell(1);
    var cellDate = newRow.insertCell(2);

    cellName.innerHTML = name;
    cellAmount.innerHTML = ("$"+ amount);
    cellDate.innerHTML = date;

    row-1;
}