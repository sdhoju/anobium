import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
    selector: 'app-register-form',
    templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

    constructor(private afAuth: AngularFireAuth){

    }

    async register(){
       const result = await this.afAuth.auth.createUserWithEmailAndPassword()
    }
}