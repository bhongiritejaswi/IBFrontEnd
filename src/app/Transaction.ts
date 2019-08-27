export class Transaction{
    constructor(private _fromAccountNo:number,private _toAccountNo:number,private _amount:number,private _ifsc:string){}

    get fromAccountNo():number    {
        return this._fromAccountNo;
    }

    get toAccountNo():number
    {
        return this._toAccountNo;
    }
    
    get amount():number
    {
        return this._amount;
    }
    get ifsc():string
    {
        return this._ifsc;
    }
}