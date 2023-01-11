import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // @ts-ignore
    private _code: string;

    get code(): string {
        return this._code;
    }

    setCode(code: string | undefined | null) {
        if (code == undefined) {
            throw 'code not set'
        }
        this._code = code;
    }

    constructor() {
    }
}
