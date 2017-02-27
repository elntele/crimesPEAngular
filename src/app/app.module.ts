import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { PaginaInicialComponent }  from './pagina-inicial.component';
import {LoginComponent} from './login.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [ 
  	BrowserModule,
    FormsModule,
  	RouterModule.forRoot([
  		{
  			path: '',
  			redirectTo: '/paginaInicial',
  			pathMatch: 'full'
  		},
  		{
  			path: 'paginaInicial',
  			component: PaginaInicialComponent
  		},
      {
        path: 'login',
        component:LoginComponent
      }
  	])
   ],
  declarations: [ AppComponent, PaginaInicialComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
