import { IBase } from './base';
import { IProduct } from './product';

export interface IUser extends IBase {
    
        cart : IProduct[],
        email : string,
        username : string,
        password : string,

}