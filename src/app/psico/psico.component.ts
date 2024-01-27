import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-psico',
  templateUrl: './psico.component.html',
  styleUrls: ['./psico.component.css']
})
export class PsicoComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  filteredMediaData: any[] = [];
  name = '';
  number = '';
  study = '';
  priceRange = '';
  id = '';


  logOut(){
    localStorage.clear();
    this.router.navigate(['/my-User']);
  }

  ngOnInit(): void {
    this.number = localStorage.getItem('celphone') || '';
    const url = `https://picti-backend.onrender.com/psicologo/getsearch?celular=${this.number}`;

    this.http.get(url)
      .subscribe((response: any) => {
        // Aquí puedes manejar la respuesta del servidor
        response.psicologos;
        this.name = response.psicologos[0].nombre;
        this.study = response.psicologos[0].cedula;
        this.priceRange = response.psicologos[0].rango;
        this.id = response.psicologos[0].id;
      }, (error) => {
        console.error('Error:', error);
      });

      const url2 = 'https://picti-backend.onrender.com/media/getmedia';

        console.log(this.http)

        this.http.get(url2)
          .subscribe((response: any) => {
            // Aquí puedes manejar la respuesta del servidor
            this.filteredMediaData = response.medias;
            setTimeout(() => {
              this.filteredMediaData = this.filteredMediaData.filter(media => media.idpsicologo === this.id);

              console.log(this.filteredMediaData);
  
            }, 200);
          }, (error) => {
            console.error('Error:', error);
          });
  }
  status(id:number):string{
    if(id=1){
      return 'waiting for the psychologist';
    }else if(id=0){
      return 'refused';
    }else if(id=2){
      return `accepted awaits the professional's message `;
    }
    return '';
  }
  actualizar(a : any, b:number){
    const url2 = `https://picti-backend.onrender.com/media/updatemedia?idmedia=${a.id}&status=${b}&precio=${a.precio}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };

        this.http.put(url2, httpOptions)
          .subscribe((response: any) => {
            // Aquí puedes manejar la respuesta del servidor
            this.filteredMediaData = response.medias;
            setTimeout(() => {
              this.filteredMediaData = this.filteredMediaData.filter(media => media.idpsicologo === this.id);

              console.log(this.filteredMediaData);

            }, 200);
        }, (error) => {
          console.error('Error:', error);
        });

  }
}