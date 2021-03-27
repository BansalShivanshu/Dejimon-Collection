var infoDOM = <HTMLElement> document.getElementById("more-info");

function init() : void{
    var dejis = JSON.parse(localStorage.Dejimon_Collection_Array);
    console.log(dejis);

    var table = <HTMLTableElement> document.getElementById("collection-table");

    for (let i: number = 0; i < dejis.length; i++) {
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
            
            infoDOM.scrollIntoView({behavior: "smooth"});
        })  

        // event listner for deletion
        cell4.addEventListener('click', () => {
            removeRow(row, i, dejis);
        })
    }     
}

function moreInfo(deji) {
    

    var dejimon: Dejimon = collection.moreInfo(dejiID);

    if (dejimon.id == -1) {
        alert("something went wrong!\nWe are sorry for any inconvenience");
        return;
    }

    (<HTMLTableCellElement>document.getElementById("mf-name")).textContent = dejimon.name;
    (<HTMLTableCellElement>document.getElementById("mf-type")).textContent = dejimon.type;
    (<HTMLTableCellElement>document.getElementById("mf-ability-type")).textContent = dejimon.ability_type + " Ability:";
    (<HTMLTableCellElement>document.getElementById("mf-ability-strength")).textContent = dejimon.ability.toString();
    (<HTMLTableCellElement>document.getElementById("mf-height")).textContent = dejimon.height.toString();
    (<HTMLTableCellElement>document.getElementById("mf-weight")).textContent = dejimon.weight.toString();
    (<HTMLTableCellElement>document.getElementById("mf-overall-strength")).textContent = (dejimon.overall_strength.toFixed(2)).toString();
}