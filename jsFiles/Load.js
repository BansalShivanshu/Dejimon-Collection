"use strict";
/**
 * Cannot import services as init stops working there on after.
 */
function init() {
    var _a;
    if (((_a = localStorage.getItem("Dejimon_Collection_Array")) === null || _a === void 0 ? void 0 : _a.length) == 0)
        return;
    var dejis = JSON.parse(localStorage.Dejimon_Collection_Array);
    console.log(dejis);
    var table = document.getElementById("collection-table");
    var infoDOM = document.getElementById("more-info");
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
            document.getElementById("mf-name").textContent = dejis[i].name;
            document.getElementById("mf-type").textContent = dejis[i].type;
            document.getElementById("mf-ability-type").textContent = dejis[i].ability_type + " Ability:";
            document.getElementById("mf-ability-strength").textContent = dejis[i].ability.toString();
            document.getElementById("mf-height").textContent = dejis[i].height.toString();
            document.getElementById("mf-weight").textContent = dejis[i].weight.toString();
            document.getElementById("mf-overall-strength").textContent = (dejis[i].overall_strength.toFixed(2)).toString();
        });
        cell4.addEventListener('click', () => {
            var res = confirm("Are you sure about deleting Dejimon " + row.cells[0].innerText + "?");
            if (res) {
                // remove from array
                dejis.splice(i, 1);
                localStorage.Dejimon_Collection_Array = JSON.stringify(dejis);
                console.log("Just Deleted element at index ", i);
                console.log("new collection is ", dejis);
                // remove from document
                var table = document.getElementById("collection-table");
                console.log("Deleting row " + row.rowIndex);
                table.deleteRow(row.rowIndex);
                // reload page to reflect changes in dejimon services array
                window.location.reload();
            }
        });
    }
}
