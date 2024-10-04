import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable, of } from "rxjs";
import { usuarios } from "../interfaces/users.interface";

@Injectable({ providedIn: "root" })

export class AuthServices {

<<<<<<< Updated upstream
  // Base URL backend
  private baseUrl: string = 'http://localhost:3000';
=======
  private baseUrl: string = 'https://backend-production-70c9.up.railway.app';
  // private baseUrl: string = 'http://localhost:3000';
>>>>>>> Stashed changes

  constructor ( private http: HttpClient ) { }

  // * Metodo para hacer el Login
  login(usuario: string, pass: string): Observable<usuarios | null>{
    const url = `${this.baseUrl}/login`;

    // * Datos a enviar
    const body = { usuario, pass };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<usuarios>(url, body, httpOptions)
      .pipe(
        map(response => {
          // ? Se puede guardar el token y la sesion aqui c:
          console.log(response)
          return response;

        }),
        // ! Manejo de errores
        catchError(error => {
          console.error('Error de la autenticación', error);
          return of(null);
        })
      )
  }
<<<<<<< Updated upstream
=======

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Verifica si el token existe y es válido (podrías agregar más lógica aquí)
  }
>>>>>>> Stashed changes
}
