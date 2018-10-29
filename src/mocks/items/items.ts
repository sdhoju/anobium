import { USER_LIST } from './../profiles/profiles';
import {Item} from '../../models/lost-n-found/item.interface';

const userList = USER_LIST;

const itemList: Item [] = [];

userList.forEach(user=>{
    itemList.push({
        user: user, 
        date: new Date, 
        image:'assets/imgs/items/1.jpg',
        title:'Found a Coffee mug',
        desc:'I found this at the Union' 
     })
})


export const ITEM_LIST = itemList;