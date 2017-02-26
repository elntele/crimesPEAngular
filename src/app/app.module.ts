import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { PaginaInicialComponent }  from './pagina-inicial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ 
  	BrowserModule,
  	RouterModule.forRoot([
  		{
  			path: '',
  			redirectTo: '/paginaInicial',
  			pathMatch: 'full'
  		},
  		{
  			path: 'paginaInicial',
  			component: PaginaInicialComponent
  		}
  	])
   ],
  declarations: [ AppComponent, PaginaInicialComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
