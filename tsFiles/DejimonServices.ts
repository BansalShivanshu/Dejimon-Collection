import * as Model from './Dejimon';
import Dejimon = Model.Dejimon;

import { StorageServices } from './StorageServices';

var localStrg = new StorageServices();

namespace Dejimon.Service {
    export interface Services {
        add(dejimon: Dejimon): void;
        moreInfo(dejiID: number): Dejimon;
        remove(dejiID: number): void;
        showAll(): Dejimon[];
    }
}

export class DejimonServices implements Dejimon.Service.Services {
    dejimons: Dejimon[];
    static currentID = 0;

    constructor() {
        this.dejimons = [];

        if (!(localStrg.isStorageEmpty())) {
            // parse the storage to the array using add function
            this.dejimons = localStrg.getStorage();
            var cdj: Dejimon = this.dejimons.slice(-1)[0];
            var cid: number;
            if (cdj.id) {
                cid = cdj.id;
                cid++;
            } else {
                cid = this.dejimons.length;
            }
            DejimonServices.currentID = cid;
            console.log("collection: ", this.dejimons);  // DELETE THIS
        } // else do nothing
    }

    add(dejimon: Dejimon): void {
        dejimon.id = DejimonServices.currentID++;
        this.dejimons.push(dejimon);
        localStrg.updateStorage(this.dejimons);

        console.log("added new dejimon: " , dejimon);
    }

    moreInfo(dejiID: number): Dejimon {
        var dej: Dejimon = {
            id: -1,
            name: "",
            type: "",
            height: -1,
            weight: -1,
            ability: -1,
            ability_type: "",
            overall_strength: -1
        };

        for (let i: number = 0; i < this.dejimons.length; i++) {
            // console.log("Searching id ", i, ": ", this.dejimons[i]); FOR DEBUGING ONLY
            if (this.dejimons[i].id == (dejiID - 1)) {
                // console.log("returning dejimon ", this.dejimons[i]); FOR DEBUGING ONLY
                return this.dejimons[i];
            }
        }

        return dej;
    }

    remove(dejiID: number): void {
        var index: number = dejiID - 1;
        for (let i: number = 0; i < this.dejimons.length; i++) {
            if (this.dejimons[i].id == index) {
                this.dejimons.splice(index, 1);
                localStrg.updateStorage(this.dejimons);
                console.log("Just Deleted element at index ", index);
                console.log("new collection is ", this.dejimons);
                return;
            }
        }
    }

    showAll(): Dejimon[] {
        return this.dejimons;
    }
}