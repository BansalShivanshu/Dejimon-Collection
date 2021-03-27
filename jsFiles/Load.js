"use strict";
var infoDOM = document.getElementById("more-info");
function init() {
    var dejis = JSON.parse(localStorage.Dejimon_Collection_Array);
    console.log(dejis);
    var table = document.getElementById("collection-table");
    for (let i = 0; i < dejis.length; i++) {
        console.log("object at ", i, ": ", dejis[i]);
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = dejis[i].name;
        cell2.innerHTML = dejis[i].type;
        cell3.innerHTML = "<a href='#more-info'>More info</a>";
        cell4.innerHTML = "<a class='del'>Delete</a>";
        // event listner for more information
        cell3.addEventListener('click', () => {
            infoDOM.hidden = false;
            infoDOM.scrollIntoView({ behavior: "smooth" });
        });
        // event listner for deletion
        cell4.addEventListener('click', () => {
            removeRow(row, i, dejis);
        });
    }
}
function moreInfo(deji) {
    var dejimon = collection.moreInfo(dejiID);
    if (dejimon.id == -1) {
        alert("something went wrong!\nWe are sorry for any inconvenience");
        return;
    }
    document.getElementById("mf-name").textContent = dejimon.name;
    document.getElementById("mf-type").textContent = dejimon.type;
    document.getElementById("mf-ability-type").textContent = dejimon.ability_type + " Ability:";
    document.getElementById("mf-ability-strength").textContent = dejimon.ability.toString();
    document.getElementById("mf-height").textContent = dejimon.height.toString();
    document.getElementById("mf-weight").textContent = dejimon.weight.toString();
    document.getElementById("mf-overall-strength").textContent = (dejimon.overall_strength.toFixed(2)).toString();
}
