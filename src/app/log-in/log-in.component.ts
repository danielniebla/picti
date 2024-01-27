import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  constructor(private http: HttpClient, private router: Router) {}

  patient=true;
  cel = '';
  pat(){
    this.patient = !this.patient;
  }
  logIn(){
    if(this.patient){
      const url = `https://picti-backend.onrender.com/paciente/getsearch?celular=${this.cel}`;

      console.log(this.http)

      this.http.get(url)
        .subscribe((response: any) => {
          // Aquí puedes manejar la respuesta del servidor
          response;
          localStorage.setItem('user', 'patient');
          localStorage.setItem('celphone', `${this.cel}`);
          this.router.navigate(['/im_the_best']);

        }, (error) => {
          console.error('Error:', error);
        });
    }else{
      const url = `https://picti-backend.onrender.com/paciente/getsearch?celular=${this.cel}`;

      console.log(this.http)

      this.http.get(url)
        .subscribe((response: any) => {
          // Aquí puedes manejar la respuesta del servidor
          response;
          localStorage.setItem('celphone', `${this.cel}`);
          localStorage.setItem('user', 'psico');
          this.router.navigate(['/i_doing_my_best']);
        }, (error) => {
          console.error('Error:', error);
        });
    }
  }
}
