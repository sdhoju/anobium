import {Profile} from '../profile/profile.interface';

export interface Item{
    user: Profile;
    date: Date;
    image:string;
    title: string;
    desc: string;
}