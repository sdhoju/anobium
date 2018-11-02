import { NgModule, Component } from '@angular/core';
import { IonicModule} from 'ionic-angular';
import {LoginFormComponent} from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ItemsListComponent } from './items-list/items-list';
import { MenuComponent } from './menu/menu.component';



@NgModule({
    declarations: [
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent,
        ProfileViewComponent,
        ItemsListComponent,
    MenuComponent
    ],
    imports: [IonicModule],
    exports: [
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent,
        ProfileViewComponent,
        ItemsListComponent,
        MenuComponent    
]

})
export class ComponentsModule{
    
}