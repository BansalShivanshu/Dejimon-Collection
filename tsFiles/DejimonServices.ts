import * as Model from './Dejimon';
import Dejimon = Model.Dejimon;

import { StorageServices } from './StorageServices';

var localStrg = new StorageServices();

namespace Dejimon.Service {
    export interface Services {
        add(dejimon: Dejimon): void;
        moreInfo(dejimon: Dejimon): Dejimon;
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
            console.log("collection: ", this.dejimons);  // DELETE THIS
        } // else do nothing
    }

    add(dejimon: Dejimon): void {
        dejimon.id = DejimonServices.currentID++;
        this.dejimons.push(dejimon);
        console.log("added new dejimon: " + dejimon);
    }

    moreInfo(dejimon: Dejimon): Model.Dejimon {
        throw new Error('Method not implemented.');
    }
    remove(dejimon: Dejimon): boolean {
        throw new Error('Method not implemented.');
    }

    showAll(): Dejimon[] {
        return this.dejimons;
    }
}