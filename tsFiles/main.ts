/**
 * Import Statemenets
 */
import { DejimonServices } from './DejimonServices';
import { MainFunctions } from './MainFunctions';

/**
 * Initializers
 */
var collection = new DejimonServices();
var mainFunctions = new MainFunctions();


/**
 * Event Listners
 */
document.getElementById("add")?.addEventListener('click', mainFunctions.AddDejimon);

// var dej = {
//     name: "Shivanshu",
//     type: "SFU",
//     height: 6,
//     weight: 103,
//     ability: 100,
//     ability_type: "Everything",
//     overall_strength: 100
// }

// console.log(dej);

// collection.add(dej);
// console.log("collection after adding dej: ");
// console.log(collection.showAll());

// console.log("saving to localStorage");
// localStorage.Dejimon_Collection_Array = JSON.stringify(collection.showAll());


























// document.getElementById("add")?.addEventListener('click', function() {    
//     // add to the array of dejimons

//     // add to the html document
//     var table = <HTMLTableElement> document.getElementById("collection-table");
    
//     var row = table.insertRow();
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);

//     cell1.innerHTML = "Shivanshu";
//     cell2.innerHTML = "bansal";
//     cell3.innerHTML = "<a href='#' id='more-info'>more info</a>";
//     cell4.innerHTML = "<a class='del'>Delete</a>";

//     // event listner for deletion
//     cell4.addEventListener('click', function() {
//         /* var res = confirm("Are you sure about deleting Dejimon " + cell1.innerText + "?");
//         if (res) {
//             // remove from array

//             // remove from document
//             console.log("Deleting row " + cell4.closest('tr')?.rowIndex)
//             table.deleteRow(row.rowIndex);
//         } */
//         removeRow(row);
//     })
// })

// function removeRow(row: HTMLTableRowElement) : void {
//     var res = confirm("Are you sure about deleting Dejimon " + row.cells[0].innerText + "?");
//     if (res) {
//         // remove from array

//         // remove from document
//         var table = <HTMLTableElement> document.getElementById("collection-table");
//         console.log("Deleting row " + row.rowIndex)
//         table.deleteRow(row.rowIndex);
//     }
// }