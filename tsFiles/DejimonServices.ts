import * as Model from './Dejimon';
import Dejimon = Model.Dejimon;

import { StorageServices } from './StorageServices';

var localStrg = new StorageServices();

namespace Dejimon.Service {
    export interface Services {
        add(dejimon: Dejimon): void;
        moreInfo(dejiID: number): Dejimon;
        remove(dejimon: Dejimon): boolean;
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
            DejimonServices.currentID = this.dejimons.length;
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
            if (this.dejimons[i].id === dejiID) {
                dej = this.dejimons[i];
                break;
            }
        }
        
        return dej;
    }

    remove(dejimon: Dejimon): boolean {
        throw new Error('Method not implemented.');
    }

    showAll(): Dejimon[] {
        return this.dejimons;
    }
}