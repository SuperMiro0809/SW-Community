import { IBase } from './base';
import { IUser } from './user';

export interface INew extends IBase {
    title: String,
    imageUrl: String,
    post: String,
    creatorId: IUser
}