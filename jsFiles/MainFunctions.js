System.register(["./DejimonServices"], function (exports_1, context_1) {
    "use strict";
    var DejimonServices_1, MainFunctions;
    var __moduleName = context_1 && context_1.id;
    function updateView(name, type) {
        var table = document.getElementById("collection-table");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = name;
        cell2.innerHTML = type;
        cell3.innerHTML = "<a href='#' id='more-info'>More info</a>";
        cell4.innerHTML = "<a class='del'>Delete</a>";
        // event listner for deletion
        cell4.addEventListener('click', () => {
            removeRow(row);
        });
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
            MainFunctions = class MainFunctions {
                addDejimon() {
                    // make the form visible
                    var formDOM = document.getElementById("dejiAdd");
                    formDOM.hidden = false;
                    formDOM.scrollIntoView({ behavior: "smooth" });
                    // get all values
                    var fname = document.getElementById("name");
                    var selectType = document.getElementById("select-type");
                    var abilityType = document.getElementById("ability-type");
                    var ability = document.getElementById("ability");
                    var height = document.getElementById("height");
                    var weight = document.getElementById("weight");
                    var submit = document.getElementById("submit-details");
                    selectType.addEventListener('change', function () {
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
                    });
                    // make a dejimon object
                    submit.addEventListener('click', () => {
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
                        updateView(deji.name, deji.type);
                    });
                }
            };
            exports_1("MainFunctions", MainFunctions);
        }
    };
});
