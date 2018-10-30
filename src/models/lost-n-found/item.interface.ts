import {User} from '../user/user.interface';

export interface Item{
    user: User;
    date: Date;
    image:string;
    title: string;
    desc: string;
}