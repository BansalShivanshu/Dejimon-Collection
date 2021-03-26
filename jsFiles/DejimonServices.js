System.register(["./StorageServices"], function (exports_1, context_1) {
    "use strict";
    var StorageServices_1, localStrg, DejimonServices;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (StorageServices_1_1) {
                StorageServices_1 = StorageServices_1_1;
            }
        ],
        execute: function () {
            localStrg = new StorageServices_1.StorageServices();
            DejimonServices = class DejimonServices {
                constructor() {
                    this.dejimons = [];
                    if (!(localStrg.isStorageEmpty())) {
                        // parse the storage to the array using add function
                        this.dejimons = localStrg.getStorage();
                        DejimonServices.currentID = this.dejimons.length;
                        console.log("collection: ", this.dejimons); // DELETE THIS
                    } // else do nothing
                }
                add(dejimon) {
                    dejimon.id = DejimonServices.currentID++;
                    this.dejimons.push(dejimon);
                    localStrg.updateStorage(this.dejimons);
                    console.log("added new dejimon: ", dejimon);
                }
                moreInfo(dejimon) {
                    throw new Error('Method not implemented.');
                }
                remove(dejimon) {
                    throw new Error('Method not implemented.');
                }
                showAll() {
                    return this.dejimons;
                }
            };
            exports_1("DejimonServices", DejimonServices);
            DejimonServices.currentID = 0;
        }
    };
});
