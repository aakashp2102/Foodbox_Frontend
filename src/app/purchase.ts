import { User } from './_models/user';
import { Item } from './item';


export class Purchase {
    purchaseId: number;
    purchaseDate: Date;
    users:User[];
    items:Item[];
}