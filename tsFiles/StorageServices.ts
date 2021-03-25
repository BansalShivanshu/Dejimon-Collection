import * as Model from './Dejimon';
import Dejimon = Model.Dejimon;

namespace Dejimon.StorageService {
    export interface StorageServices {
        getStorage(): Dejimon[];
        addToStorage(): boolean;
        removeFromStorage(): boolean;

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
    addToStorage(): boolean {
        throw new Error('Method not implemented.');
    }
    removeFromStorage(): boolean {
        throw new Error('Method not implemented.');
    }

    isStorageEmpty(): boolean {
        if (!this.browserSupport) return true;

        // check if dejimons array exists in storage
        return localStorage.getItem('Dejimon_Collection_Array') === null;
    }
}