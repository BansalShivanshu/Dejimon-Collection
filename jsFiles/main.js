System.register(["./MainFunctions"], function (exports_1, context_1) {
    "use strict";
    var MainFunctions_1, mainFunctions;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (MainFunctions_1_1) {
                MainFunctions_1 = MainFunctions_1_1;
            }
        ],
        execute: function () {
            /**
             * Initializers
             */
            mainFunctions = new MainFunctions_1.MainFunctions();
            /**
             * Event Listners
             */
            document.getElementById("add").addEventListener('click', mainFunctions.addDejimon);
            document.getElementById("cancel-btn").addEventListener('click', mainFunctions.cancelForm);
            document.getElementById("select-type").addEventListener('change', mainFunctions.selectTypeLsn);
            document.getElementById("submit-details").addEventListener('click', mainFunctions.submitLsn);
        }
    };
});
