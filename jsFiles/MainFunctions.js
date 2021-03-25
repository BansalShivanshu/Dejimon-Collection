System.register([], function (exports_1, context_1) {
    "use strict";
    var MainFunctions;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            MainFunctions = class MainFunctions {
                AddDejimon() {
                    // go to another page
                    window.open("./addDejimon.html", "_self");
                    // get all values
                    // make a dejimon object
                    // inform dejimon has been added
                    // go back to mainpage after adding
                }
            };
            exports_1("MainFunctions", MainFunctions);
        }
    };
});
