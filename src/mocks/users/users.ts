import {User} from '../../models/user/user.interface';

const userList: User[]=[
    {firstName: 'Sameer', lastName: 'Dhoju', email: 'samee.dhoju@gmail.com', avatar: 'assets/imgs/avatars/sameer.jpg'},
    {firstName: 'Xavier', lastName: 'Buchanan', email: 'xbuchanan@test.com', avatar: 'assets/imgs/avatars/ninja.jpg'},
    {firstName: 'Selena', lastName: 'Gomez', email: 'sgomez@test.com', avatar: 'assets/imgs/avatars/halloween.png'},
    {firstName: 'Cristiano', lastName: 'Ronaldo', email: 'cronaldo@test.com', avatar: 'assets/imgs/avatars/smile.png'},
    {firstName: 'Ariana', lastName: 'Grande', email: 'agrande@test.com', avatar: 'assets/imgs/avatars/link.png'},
    {firstName: 'Ed', lastName: 'Sheeran', email: 'esheeran@test.com', avatar: 'assets/imgs/avatars/swag.jpg'}

];

export const USER_LIST = userList;