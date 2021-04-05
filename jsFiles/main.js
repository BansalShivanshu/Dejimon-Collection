System.register(["./MainFunctions"], function (exports_1, context_1) {
    "use strict";
    var FuncModel, MainFunctions, mainFunctions;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (FuncModel_1) {
                FuncModel = FuncModel_1;
            }
        ],
        execute: function () {
            MainFunctions = FuncModel.MainFunctions;
            /**
             * Initializers
             */
            mainFunctions = new MainFunctions();
            /**
             * Event Listners
             */
            // (<HTMLTableElement>document.getElementById('collection-table')).addEventListener('focusin', mainFunctions.onLoad);
            document.getElementById("refresh").addEventListener('click', mainFunctions.btnRefresh);
            document.getElementById("add").addEventListener('click', mainFunctions.addDejimon);
            document.getElementById("cancel-btn").addEventListener('click', mainFunctions.cancelForm);
            document.getElementById("select-type").addEventListener('change', mainFunctions.selectTypeLsn);
            document.getElementById("submit-details").addEventListener('click', mainFunctions.submitLsn);
            document.getElementById("mf-done").addEventListener('click', mainFunctions.mfDoneLsn);
        }
    };
});
