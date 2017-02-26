import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#"><b>Crimes PE</b></a>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="formInserirCrimes.php">Denunciar Crimes<span class="sr-only">(current)</span></a></li>
                <li><a href="formPreConsultarCrime.php">Pesquisar Crimes</a></li>
                <li><a href="formlogin.php">Login</a></li>
              </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-xs-12">
            <div class="jumbotron">
              <img src="C:/xampp/htdocs/crimesPEAngular/CrimesImg.jpg" class="img-responsive center-block" alt="Imagem Responsiva">
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="section section-primary">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h1>Sistema de denúncia de crimes</h1>
            <p>Todos os direitos reservados</p>
          </div>
          <div class="col-sm-6">
            <p class="text-info text-right"><br><br></p>
            <div class="row"> 
              <div class="col-md-12 hidden-lg hidden-md hidden-sm text-left">
                <a href="#"><i class="fa fa-3x fa-fw text-inverse fa-apple"></i></a> 
                <a href="#"><i class="fa fa-3x fa-fw text-inverse fa-android"></i></a>
                <a href="#"><i class="fa fa-3x fa-fw text-inverse fa-windows"></i></a>
                <a href="#"><i class="fa fa-3x fa-fw hub text-inverse fa-linux"></i></a>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 hidden-xs text-right">
                <a href="#"><i class="fa fa-3x fa-fw text-inverse fa-apple"></i></a>
                <a href="#"><i class="fa fa-3x fa-fw text-inverse fa-android"></i></a>
                <a href="#"><i class="fa fa-3x fa-fw text-inverse fa-windows"></i></a>
                <a href="#"><i class="fa fa-3x fa-fw hub text-inverse fa-linux"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>`
})
export class PaginaInicialComponent  { name = 'Angular'; }
