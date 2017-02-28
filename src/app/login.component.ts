import {Component,Input} from '@angular/core';
import {NgForm} from '@angular/forms';
import {OnInit} from'@angular/core';
import {Usuario} from './usuario';
import {UsuarioService} from'./usuario.service'


@Component({
	moduleId: module.id,
	selector: 'my-login',
	templateUrl:'login.component.html'
})
export class LoginComponent implements OnInit{
@Input()
NovoUsuario:Usuario;
UsuarioArray:Usuario[];	

	
	cadastrarUsuario(form: NgForm){
		//console.log("este é o ",form.value.senha);
		//console.log("este é o ",form.value.nome);

		this.valida(form.value.nome,form.value.senha);

	}

	constructor (private usuarioService: UsuarioService) {}

	// getUsuarios():void{

	// 	this.usuarioService.getUsuarios()
	// 		.then(Usuarios => this.UsuarioArray = Usuarios);

	// }

	valida(nome:string,senha:number):boolean{
		console.log("vai imprimir o metodo")
		console.log(this.usuarioService.validaUsuario(nome,senha))
		console.log("ja imprimeiu o metodo agora vai dar o retorno")
		return this.usuarioService.validaUsuario(nome,senha);
		 
	}


	
	ngOnInit(): void {}




}