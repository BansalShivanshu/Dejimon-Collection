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
                        var cdj = this.dejimons.slice(-1)[0];
                        var cid;
                        if (cdj.id) {
                            cid = cdj.id;
                            cid++;
                        }
                        else {
                            cid = this.dejimons.length;
                        }
                        DejimonServices.currentID = cid;
                        console.log("collection: ", this.dejimons); // DELETE THIS
                    } // else do nothing
                }
                add(dejimon) {
                    dejimon.id = DejimonServices.currentID++;
                    this.dejimons.push(dejimon);
                    localStrg.updateStorage(this.dejimons);
                    console.log("added new dejimon: ", dejimon);
                }
                moreInfo(dejiID) {
                    var dej = {
                        id: -1,
                        name: "",
                        type: "",
                        height: -1,
                        weight: -1,
                        ability: -1,
                        ability_type: "",
                        overall_strength: -1
                    };
                    for (let i = 0; i < this.dejimons.length; i++) {
                        // console.log("Searching id ", i, ": ", this.dejimons[i]); FOR DEBUGING ONLY
                        if (this.dejimons[i].id == (dejiID - 1)) {
                            // console.log("returning dejimon ", this.dejimons[i]); FOR DEBUGING ONLY
                            return this.dejimons[i];
                        }
                    }
                    return dej;
                }
                remove(dejiID) {
                    var index = dejiID - 1;
                    for (let i = 0; i < this.dejimons.length; i++) {
                        if (this.dejimons[i].id == index) {
                            this.dejimons.splice(index, 1);
                            localStrg.updateStorage(this.dejimons);
                            console.log("Just Deleted element at index ", index);
                            console.log("new collection is ", this.dejimons);
                            return;
                        }
                    }
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
