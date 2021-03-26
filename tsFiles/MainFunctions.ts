import { Dejimon } from "./Dejimon";
import { DejimonServices } from "./DejimonServices"


// get all values
var fname = <HTMLInputElement>document.getElementById("name");
var selectType = <HTMLSelectElement>document.getElementById("select-type");
var abilityType = <HTMLSelectElement> document.getElementById("ability-type");
var ability = <HTMLInputElement> document.getElementById("ability");
var height = <HTMLInputElement> document.getElementById("height");
var weight = <HTMLInputElement> document.getElementById("weight");
var submit = <HTMLButtonElement> document.getElementById("submit-details");
var formDOM = <HTMLElement> document.getElementById("dejiAdd");
var mainHeading = <HTMLElement> document.getElementById("main-heading");

export class MainFunctions {
    addDejimon(): void {
        // make the form visible
        formDOM.hidden = false;
        formDOM.scrollIntoView({behavior: "smooth"});
    }        

    selectTypeLsn() {
        // set ability type to default
        abilityType.options[0].selected = true;

        // remove options from select-ability as per the type of dejimon            
        var selectedVal: number = +selectType.options[selectType.selectedIndex].value;
        switch (selectedVal) {
            case 1:
                // hide 3, 4, 5
                abilityType.options[1].hidden = false;
                abilityType.options[2].hidden = false;
                abilityType.options[3].hidden = true;
                abilityType.options[4].hidden = true;
                abilityType.options[5].hidden = true;
                break;
            case 2:
                // hide 1, 2, 5
                abilityType.options[1].hidden = true;
                abilityType.options[2].hidden = true;
                abilityType.options[3].hidden = false;
                abilityType.options[4].hidden = false;
                abilityType.options[5].hidden = true;
                break;
            case 3:
                // hide 1, 2, 3, 4
                abilityType.options[1].hidden = true;
                abilityType.options[2].hidden = true;
                abilityType.options[3].hidden = true;
                abilityType.options[4].hidden = true;
                abilityType.options[5].hidden = false;
        }
    }

    submitLsn() {
        // make a dejimon object
        if (fname.value == "") {
            alert("Name cannot be empty");
            return;
        }

        if (selectType.selectedIndex == 0) {
            alert("Please select a Dejimon Type");
            return;
        }

        if (abilityType.selectedIndex == 0) {
            alert("Please select Ability Type");
            return;
        }

        if (height.value == "") {
            alert("height cannot be empty");
            return;
        }
        if (+height.value < 0) {
            alert("height cannot be less than 0");
            height.value = "";
            return;
        }

        if (weight.value == "") {
            alert("weight cannot be empty");
            return;
        }
        if (+weight.value < 0) {
            alert("weight cannot be less than 0");
            weight.value = "";
            return;
        }

        // add values to dejimon object
        var deji : Dejimon = {
            name : fname.value,
            type : selectType.options[selectType.selectedIndex].text,
            ability_type : abilityType.options[abilityType.selectedIndex].text,
            ability : +ability.value,
            height : +height.value,
            weight : +weight.value,
            overall_strength : ((+ability.value) + (+height.value) + (+weight.value)) / 3
        }

        var collection = new DejimonServices();
        collection.add(deji);

        alert("Dejimon Added!");

        formDOM.hidden = true;
        (<HTMLFormElement>document.getElementById("dejiAddForm")).reset();
        setAbilitiesTrue();

        mainHeading.scrollIntoView({behavior: "smooth"});

        // updateView(deji.name, deji.type, DejimonServices.currentID);
    }

    cancelForm() : void {
        formDOM.hidden = true;
        setAbilitiesTrue();
        mainHeading.scrollIntoView({behavior: "smooth"});
    }
}


function setAbilitiesTrue() {
    abilityType.options[1].hidden = false;
    abilityType.options[2].hidden = false;
    abilityType.options[3].hidden = false;
    abilityType.options[4].hidden = false;
    abilityType.options[5].hidden = false;
}














function updateView(name: string, type: string, dejiID: number) {
    var table = <HTMLTableElement> document.getElementById("collection-table");

    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = type;
    cell3.innerHTML = "<a href='#'>More info</a>";
    cell4.innerHTML = "<a class='del'>Delete</a>";

    // event listner for more information
    cell3.addEventListener('click', () => {
        moreInfo(dejiID);
    })

    // event listner for deletion
    cell4.addEventListener('click', () => {
        removeRow(row);
    })
}

function moreInfo(dejiID: number) {
    var collection = new DejimonServices();
    var dejimon: Dejimon = collection.moreInfo(dejiID);

    (<HTMLTableCellElement>document.getElementById("mf-name")).textContent = dejimon.name;
    (<HTMLTableCellElement>document.getElementById("mf-type")).textContent = dejimon.ability_type;
    (<HTMLTableCellElement>document.getElementById("mf-ability-type")).textContent = dejimon.ability_type + " Ability:";
    (<HTMLTableCellElement>document.getElementById("mf-ability-strength")).textContent = dejimon.ability.toString() ;
}

function removeRow(row: HTMLTableRowElement) : void {
    var res = confirm("Are you sure about deleting Dejimon " + row.cells[0].innerText + "?");
    if (res) {
        // remove from array

        // remove from document
        var table = <HTMLTableElement> document.getElementById("collection-table");
        console.log("Deleting row " + row.rowIndex)
        table.deleteRow(row.rowIndex);
    }
}