import { IBase } from './base';

export interface IUser extends IBase {
    
        cart : string[],
        email : string,
        username : string,
        password : string,

}