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
var infoDOM = <HTMLElement> document.getElementById("more-info");
var refreshBTN = (<HTMLButtonElement>document.getElementById("refresh"));
var collection = new DejimonServices();

export class MainFunctions {
    addDejimon(): void {
        // make the form visible
        formDOM.hidden = false;
        formDOM.scrollIntoView({behavior: "smooth"});
        // fname.focus();
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

        collection.add(deji);

        alert("Dejimon Added!");

        formDOM.hidden = true;
        (<HTMLFormElement>document.getElementById("dejiAddForm")).reset();
        setAbilitiesTrue();

        mainHeading.scrollIntoView({behavior: "smooth"});

        updateView(deji.name, deji.type, DejimonServices.currentID);
    }

    cancelForm() : void {
        formDOM.hidden = true;
        setAbilitiesTrue();
        mainHeading.scrollIntoView({behavior: "smooth"});
    }

    mfDoneLsn() : void {
        infoDOM.hidden = true;
        mainHeading.scrollIntoView({behavior: "smooth"});
    }

    btnRefresh() : void {
        var tempDejis: Dejimon[] = collection.showAll();
        for (let i : number = 0; i < tempDejis.length; i++) {
            updateView(tempDejis[i].name, tempDejis[i].type, tempDejis[i].id! + 1);
        }

        refreshBTN.hidden = true;
        (<HTMLButtonElement>document.getElementById("add")).hidden = false;
    }
}

function setAbilitiesTrue() {
    abilityType.options[1].hidden = false;
    abilityType.options[2].hidden = false;
    abilityType.options[3].hidden = false;
    abilityType.options[4].hidden = false;
    abilityType.options[5].hidden = false;
}




function updateView(name: string, type: string, dejiID: number) : void {
    var table = <HTMLTableElement> document.getElementById("collection-table");

    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = type;
    cell3.innerHTML = "<a href='#more-info'>More info</a>";
    cell4.innerHTML = "<a class='del'>Delete</a>";

    // event listner for more information
    cell3.addEventListener('click', () => {
        moreInfo(dejiID);
    })

    // event listner for deletion
    cell4.addEventListener('click', () => {
        removeRow(row, dejiID);
    })
}

function moreInfo(dejiID: number) : void{
    infoDOM.hidden = false;
    // window.scrollTo(0,document.body.scrollHeight);
    infoDOM.scrollIntoView({behavior: "smooth"});

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

function removeRow(row: HTMLTableRowElement, dejiID: number) : void {
    var res = confirm("Are you sure about deleting Dejimon " + row.cells[0].innerText + "?");
    if (res) {
        // remove from array
        collection.remove(dejiID);

        console.log("dejiID: " + dejiID);

        // remove from document
        var table = <HTMLTableElement> document.getElementById("collection-table");
        console.log("Deleting row " + row.rowIndex)
        table.deleteRow(row.rowIndex);
    }
}