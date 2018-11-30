import { USER_LIST } from './../profiles/profiles';
import {Item} from '../../models/lost-n-found/item.interface';

const userList = USER_LIST;

const itemList: Item [] = [
    {
        // user: user, 
        date: new Date, 
        image:'assets/imgs/items/4.jpg',
        itemType:'phone',
        desc:'Anyone missing this phone?', 
        status:false
     },
     {
        // user: user, 
        date: new Date, 
        image:'assets/imgs/items/3.jpg',
        itemType:'fork',
        desc:'Found a fork',
        status:true
 
     },
     {
        // user: user, 
        date: new Date, 
        image:'assets/imgs/items/2.jpg',
        itemType:'Camera',
        desc:'looks like a Camera',
        status:false
 
     },
     {
        // user: user, 
        date: new Date, 
        image:'assets/imgs/items/5.jpg',
        itemType:'thumb Drive',
        desc:'HAHA! look what I found anyone missing their Thumb          drive?',
        status:false
 
     }
];

export const ITEM_LIST = itemList;