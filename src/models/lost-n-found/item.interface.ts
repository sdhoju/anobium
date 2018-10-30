// import {Profile} from '../profile/profile.interface';

export interface Item{
    // user: Profile;
    key?: string;
    date?: Date;
    image?:string;
    itemType: string;
    desc: string;
}