import { IBase } from './base';
import { IUser } from './user';

export interface IProduct extends IBase {
    productName: String,
    imageUrl: String,
    description: String,
    price: Number,
    creatorId: IUser
}