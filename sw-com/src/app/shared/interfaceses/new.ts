import { IBase } from './base';

export interface INew extends IBase {
    title: String,
    imageUrl: String,
    post: String,
    creatorId: String
}