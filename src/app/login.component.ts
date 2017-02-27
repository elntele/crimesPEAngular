import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
	moduleId: module.id,
	selector: 'my-login',
	templateUrl:'login-form.component.html'
})
export class LoginComponent{

	cadastrarUsuario(form: NgForm){
		console.log(form.value);
	}
}