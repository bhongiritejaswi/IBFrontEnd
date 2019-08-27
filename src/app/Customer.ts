export class Customer{
    constructor(private _cid:number,private _name:string,private _userName:string,private _password:string,private _pan:string,private _phoneNo: string){}

    get cid():number{
        return this._cid;
    }

    get userName():string{
        return this._userName;
    }

    get name():string{
        return this._name;
    }
    get password():string{
        return this._password;
    }
    get pan():string{
        return this._pan;
    }
    get phoneNo():string{
        return this._phoneNo;
    }
    
}