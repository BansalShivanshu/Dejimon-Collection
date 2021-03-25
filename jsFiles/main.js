System.register(["./DejimonServices", "./MainFunctions"], function (exports_1, context_1) {
    "use strict";
    var _a, DejimonServices_1, MainFunctions_1, collection, mainFunctions;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DejimonServices_1_1) {
                DejimonServices_1 = DejimonServices_1_1;
            },
            function (MainFunctions_1_1) {
                MainFunctions_1 = MainFunctions_1_1;
            }
        ],
        execute: function () {
            /**
             * Initializers
             */
            collection = new DejimonServices_1.DejimonServices();
            mainFunctions = new MainFunctions_1.MainFunctions();
            /**
             * Event Listners
             */
            (_a = document.getElementById("add")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', mainFunctions.AddDejimon);
        }
    };
});
