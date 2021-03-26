import * as Model from './Dejimon';
import Dejimon = Model.Dejimon;

namespace Dejimon.StorageService {
    export interface StorageServices {
        getStorage(): Dejimon[];
        updateStorage(collection: Dejimon[]): void;
        removeFromStorage(): void;
        isStorageEmpty(): boolean;
    }
}

export class StorageServices implements Dejimon.StorageService.StorageServices {
    browserSupport: boolean;
    dejimons: Dejimon[];

    constructor() {
        // check for browser support
        if (typeof (localStorage) === "undefined") {
            window.alert("Web Storage is not supported on this browser...");
            this.browserSupport = false;
        } else {
            this.browserSupport = true;
        }

        this.dejimons = [];
    }

    getStorage(): Dejimon[] {
        if (this.browserSupport && !this.isStorageEmpty()) {
            this.dejimons = JSON.parse(localStorage.Dejimon_Collection_Array);
        } 

        return this.dejimons;
    }

    updateStorage(collection: Dejimon[]): void {
        this.dejimons = collection;
        localStorage.Dejimon_Collection_Array = JSON.stringify(this.dejimons);
    }

    removeFromStorage(): void {
        localStorage.removeItem("Dejimon_Collection_Array");
    }

    isStorageEmpty(): boolean {
        if (!this.browserSupport) return true;

        // check if dejimons array exists in storage
        return localStorage.getItem('Dejimon_Collection_Array') === null;
    }
}