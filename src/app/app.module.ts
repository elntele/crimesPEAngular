import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppComponent }  from './app.component';
import { PaginaInicialComponent }  from './pagina-inicial.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [  PaginaInicialComponent ],
  bootstrap:    [ PaginaInicialComponent ]
})
export class AppModule { }
