import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { USUARIO  } from './Json-usuario';

@Injectable()
export class UsuarioService{

	getUsuarios() : Promise<Usuario[]>{
		return Promise.resolve(USUARIO);
	}

	getUsuario(nome: string) : Promise<Usuario>{
		return this.getUsuarios().then(usuarios => 
			usuarios.find(usuarios => usuarios.nome === nome));
	}

	validaUsuario(nome: string, senha: number): boolean{
	if (this.getUsuario(nome).then(usuarios=> usuarios.senha===senha)){
		   return true;
	} else {
	  return false;
	}		
		
	}
}