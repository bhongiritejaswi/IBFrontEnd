export class Customer{
    constructor(private _cid:number,private _userName:string,private _password:string,){}

    get cid():number{
        return this._cid;
    }

    get userName():string{
        return this._userName;
    }

    
}