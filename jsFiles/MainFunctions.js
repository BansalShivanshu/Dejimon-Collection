System.register(["./DejimonServices"], function (exports_1, context_1) {
    "use strict";
    var DejimonServices_1, fname, selectType, abilityType, ability, height, weight, submit, formDOM, mainHeading, MainFunctions;
    var __moduleName = context_1 && context_1.id;
    function setAbilitiesTrue() {
        abilityType.options[1].hidden = false;
        abilityType.options[2].hidden = false;
        abilityType.options[3].hidden = false;
        abilityType.options[4].hidden = false;
        abilityType.options[5].hidden = false;
    }
    function updateView(name, type, dejiID) {
        var table = document.getElementById("collection-table");
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
        });
        // event listner for deletion
        cell4.addEventListener('click', () => {
            removeRow(row);
        });
    }
    function moreInfo(dejiID) {
        var collection = new DejimonServices_1.DejimonServices();
        var dejimon = collection.moreInfo(dejiID);
        document.getElementById("mf-name").textContent = dejimon.name;
        document.getElementById("mf-type").textContent = dejimon.ability_type;
        document.getElementById("mf-ability-type").textContent = dejimon.ability_type + " Ability:";
        document.getElementById("mf-ability-strength").textContent = dejimon.ability.toString();
    }
    function removeRow(row) {
        var res = confirm("Are you sure about deleting Dejimon " + row.cells[0].innerText + "?");
        if (res) {
            // remove from array
            // remove from document
            var table = document.getElementById("collection-table");
            console.log("Deleting row " + row.rowIndex);
            table.deleteRow(row.rowIndex);
        }
    }
    return {
        setters: [
            function (DejimonServices_1_1) {
                DejimonServices_1 = DejimonServices_1_1;
            }
        ],
        execute: function () {
            // get all values
            fname = document.getElementById("name");
            selectType = document.getElementById("select-type");
            abilityType = document.getElementById("ability-type");
            ability = document.getElementById("ability");
            height = document.getElementById("height");
            weight = document.getElementById("weight");
            submit = document.getElementById("submit-details");
            formDOM = document.getElementById("dejiAdd");
            mainHeading = document.getElementById("main-heading");
            MainFunctions = class MainFunctions {
                addDejimon() {
                    // make the form visible
                    formDOM.hidden = false;
                    formDOM.scrollIntoView({ behavior: "smooth" });
                }
                selectTypeLsn() {
                    // set ability type to default
                    abilityType.options[0].selected = true;
                    // remove options from select-ability as per the type of dejimon            
                    var selectedVal = +selectType.options[selectType.selectedIndex].value;
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
                    var deji = {
                        name: fname.value,
                        type: selectType.options[selectType.selectedIndex].text,
                        ability_type: abilityType.options[abilityType.selectedIndex].text,
                        ability: +ability.value,
                        height: +height.value,
                        weight: +weight.value,
                        overall_strength: ((+ability.value) + (+height.value) + (+weight.value)) / 3
                    };
                    var collection = new DejimonServices_1.DejimonServices();
                    collection.add(deji);
                    alert("Dejimon Added!");
                    formDOM.hidden = true;
                    document.getElementById("dejiAddForm").reset();
                    setAbilitiesTrue();
                    mainHeading.scrollIntoView({ behavior: "smooth" });
                    // updateView(deji.name, deji.type, DejimonServices.currentID);
                }
                cancelForm() {
                    formDOM.hidden = true;
                    setAbilitiesTrue();
                    mainHeading.scrollIntoView({ behavior: "smooth" });
                }
            };
            exports_1("MainFunctions", MainFunctions);
        }
    };
});
