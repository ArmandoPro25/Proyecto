import { Component } from '@angular/core';
import { AdministradorServices } from '../../services/administrador.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  usuario: string = '';
  email: string = '';
  pass: string = '';

  constructor(
    private administradorServices: AdministradorServices
  ) {
  }


  onRegister() {
    this.administradorServices.register(this.usuario, this.email, this.pass)
    .subscribe(response => {
      if (response) {
      } else {
        // ! Mostrar un mensaje de error si la autenticación falla
        alert('Usuario o contraseña incorrectos');
      }
    });
  }

}
