import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router){}
  open=false;
  show(){
    this.open= !this.open;
    // Obtener todos los elementos h3 con la clase 'toggleable'
    const element = document.querySelectorAll('h3.toggle');

    // Agregar un event listener a cada elemento h3
    element.forEach((element) => {
        // Toggle de la clase 'toggle' en cada elemento h3
        element.classList.toggle('show');
    });
  }
  aboutUs(){
    this.router.navigate(['/About-Us']);
  }
  user(){
    this.router.navigate(['/my-User']);
  }
  contact(){
    console.log("In contact method")
    this.router.navigate(['/connect-with-us']); 
  }
}
