/**
 * Import Statemenets
 */
import { DejimonServices } from './DejimonServices';
import * as FuncModel from './MainFunctions';
import MainFunctions = FuncModel.MainFunctions;

/**
 * Initializers
 */
var mainFunctions = new MainFunctions();

/**
 * Event Listners
 */
// (<HTMLTableElement>document.getElementById('collection-table')).addEventListener('focusin', mainFunctions.onLoad);


(<HTMLButtonElement>document.getElementById("add")).addEventListener('click', mainFunctions.addDejimon);
(<HTMLButtonElement>document.getElementById("cancel-btn")).addEventListener('click', mainFunctions.cancelForm);
(<HTMLSelectElement>document.getElementById("select-type")).addEventListener('change', mainFunctions.selectTypeLsn);
(<HTMLButtonElement> document.getElementById("submit-details")).addEventListener('click', mainFunctions.submitLsn);
(<HTMLButtonElement>document.getElementById("mf-done")).addEventListener('click', mainFunctions.mfDoneLsn);
