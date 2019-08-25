export class Customer{
    constructor(private _cid:number,private _username:string,private _password:string,){}

    get cid():number{
        return this._cid;
    }

    get username():string{
        return this._username;
    }

    
}