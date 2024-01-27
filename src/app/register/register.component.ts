import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private http: HttpClient, private router: Router) {}

  patient=true;
  nombre= '';
  celular= '';
  socioeconomic= '';
  pnombre = '';
  pcelular = '';
  cedula = '';
  precio = '';
  pat(){
    this.patient = !this.patient;
  }
  signUpPatient(){
    const endpoint = `https://picti-backend.onrender.com/paciente/postpaciente?nombre=${this.nombre}&celular=${this.celular}&socioeconomic=${this.socioeconomic}`;


    // Encabezados para la solicitud POST
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };

    // Realizar la solicitud POST para enviar datos al servidor
    this.http.post(endpoint, httpOptions)
      .subscribe((response: any) => {
        // Aquí puedes manejar la respuesta del servidor
        console.log('Respuesta del servidor:', response);
        localStorage.setItem('celphone', `${this.celular}`);
        localStorage.setItem('user', 'patient');
        this.router.navigate(['/im_the_best']);
      }, (error) => {
        // Manejar errores según tus necesidades
        console.error('Error en la solicitud:', error);
      });

  }
  signUpPsycho(){
    const endpoint = `https://picti-backend.onrender.com/psicologo/postpsicologo?nombre=${this.pnombre}&celular=${this.pcelular}&cedula=${this.cedula}&rango=${this.precio}`;


    // Encabezados para la solicitud POST
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };

    // Realizar la solicitud POST para enviar datos al servidor
    this.http.post(endpoint, httpOptions)
      .subscribe((response: any) => {
        // Aquí puedes manejar la respuesta del servidor
        console.log('Respuesta del servidor:', response);
        localStorage.setItem('celphone', `${this.pcelular}`);
        localStorage.setItem('user', 'psico');
        this.router.navigate(['/i_doing_my_best']);

      }, (error) => {
        // Manejar errores según tus necesidades
        console.error('Error en la solicitud:', error);
      });

  }
}
