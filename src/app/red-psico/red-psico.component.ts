import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-red-psico',
  templateUrl: './red-psico.component.html',
  styleUrl: './red-psico.component.css'
})
export class RedPsicoComponent {
  constructor(private http: HttpClient) {}

  psicologo: any[] = [];

  ngOnInit(): void {
    // Llama a la función que realiza la solicitud GET
    this.getPsicologoData();
  }
  solicitar(id : number){
    const paid = localStorage.getItem('id-user');
    const endpoint = `https://picti-backend.onrender.com/media/postmedia?idpaciente=${paid}&idpsicologo=${id}&status=1&precio=0`;


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
        window.alert("a beutiful coquette alert say: request made")
        console.log(response);

      }, (error) => {
        // Manejar errores según tus necesidades
        console.error('Error en la solicitud:', error);
      });
  }
  getPsicologoData() {
    const url = 'https://picti-backend.onrender.com/psicologo/getpsicologo';

    console.log(this.http)

    this.http.get(url)
      .subscribe((response: any) => {
        // Aquí puedes manejar la respuesta del servidor
        this.psicologo = response.psicologos;
      }, (error) => {
        console.error('Error:', error);
      });
  }
}
