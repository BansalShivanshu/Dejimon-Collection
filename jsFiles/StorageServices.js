System.register([], function (exports_1, context_1) {
    "use strict";
    var StorageServices;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            StorageServices = class StorageServices {
                constructor() {
                    // check for browser support
                    if (typeof (localStorage) === "undefined") {
                        window.alert("Web Storage is not supported on this browser...");
                        this.browserSupport = false;
                    }
                    else {
                        this.browserSupport = true;
                    }
                    this.dejimons = [];
                }
                getStorage() {
                    if (this.browserSupport && !this.isStorageEmpty()) {
                        this.dejimons = JSON.parse(localStorage.Dejimon_Collection_Array);
                    }
                    return this.dejimons;
                }
                addToStorage() {
                    throw new Error('Method not implemented.');
                }
                removeFromStorage() {
                    throw new Error('Method not implemented.');
                }
                isStorageEmpty() {
                    if (!this.browserSupport)
                        return true;
                    // check if dejimons array exists in storage
                    return localStorage.getItem('Dejimon_Collection_Array') === null;
                }
            };
            exports_1("StorageServices", StorageServices);
        }
    };
});
