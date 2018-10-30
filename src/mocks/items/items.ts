import { USER_LIST } from './../profiles/profiles';
import {Item} from '../../models/lost-n-found/item.interface';

const userList = USER_LIST;

const itemList: Item [] = [
    {
        // user: user, 
        date: new Date, 
        image:'assets/imgs/items/4.jpg',
        itemType:'phone',
        desc:'Anyone missing this phone?' 
     },
     {
        // user: user, 
        date: new Date, 
        image:'assets/imgs/items/3.jpg',
        itemType:'fork',
        desc:'Did anyone lose a fork ?' 
     },
     {
        // user: user, 
        date: new Date, 
        image:'assets/imgs/items/2.jpg',
        itemType:'Camera',
        desc:'looks like a Camera' 
     },
     {
        // user: user, 
        date: new Date, 
        image:'assets/imgs/items/5.jpg',
        itemType:'thumb Drive',
        desc:'HAHA! look what I found anyone missing their Thumb          drive?' 
     }
];






// userList.forEach(user=>{
//     itemList.push({
//         // user: user, 
//         date: new Date, 
//         image:'assets/imgs/items/3.jpg',
//         itemType:'fork',
//         desc:'Did anyone lose a fork ?' 
//      })
// })


export const ITEM_LIST = itemList;