import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private http: HttpClient, private router: Router) {}
  name='';
  number='';
  study='';
  idUser=0;
  filteredMediaData: any[] = [];
  logOut(){
    localStorage.clear();
    this.router.navigate(['/my-User']);
  }
  ngOnInit(): void {
    this.number=localStorage.getItem('celphone')??'';
    const url = `https://picti-backend.onrender.com/paciente/getsearch?celular=${this.number}`;

      console.log(this.http)

      this.http.get(url)
        .subscribe((response: any) => {
          // Aquí puedes manejar la respuesta del servidor
          response;
          this.idUser=response.pacientes[0].id;
          localStorage.setItem('id-user', response.pacientes[0].id);
          this.name = response.pacientes[0].nombre;
          this.study = response.pacientes[0].socioeconomic;          
        }, (error) => {
          console.error('Error:', error);
        });

        const url2 = 'https://picti-backend.onrender.com/media/getmedia';

        console.log(this.http)

        this.http.get(url2)
          .subscribe((response: any) => {
            // Aquí puedes manejar la respuesta del servidor
            this.filteredMediaData = response.medias;
            this.filteredMediaData = this.filteredMediaData.filter(media => media.idpaciente === this.idUser);

          }, (error) => {
            console.error('Error:', error);
          });
    
  }
  status(id:number):string{
    if(id==1){
      return 'waiting for the psychologist';
    }else if(id==0){
      return 'refused';
    }else if(id==2){
      return `accepted awaits the professional's message `;
    }
    return '';
  }
}
