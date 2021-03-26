import { Dejimon } from "./Dejimon";
import { DejimonServices } from "./DejimonServices"

export class MainFunctions {
    AddDejimon(): void {
        // make the form visible
        var formDOM = <HTMLElement> document.getElementById("dejiAdd");
        formDOM.hidden = false;
        formDOM.scrollIntoView({behavior: "smooth"});

        // get all values
        var fname = <HTMLInputElement>document.getElementById("name");
        var selectType = <HTMLSelectElement>document.getElementById("select-type");
        var abilityType = <HTMLSelectElement> document.getElementById("ability-type");
        var ability = <HTMLInputElement> document.getElementById("ability");
        var height = <HTMLInputElement> document.getElementById("height");
        var weight = <HTMLInputElement> document.getElementById("weight");
        var submit = <HTMLButtonElement> document.getElementById("submit-details");

        selectType.addEventListener('change', function () {
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
        })

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
        })
    }     
}