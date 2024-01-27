import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrl: './main-user.component.css'
})
export class MainUserComponent {
  constructor(private router: Router){}
  user='';
  login(){
    this.router.navigate(['/log-in']);
  }
  register(){
    this.router.navigate(['/register']);
  }
  // Método ngOnInit
  ngOnInit(): void {
    this.user=localStorage.getItem('user') ?? '';
    if(this.user == 'patient'){
      this.router.navigate(['/im_the_best']);
    }else if(this.user == 'psico'){
      this.router.navigate(['/i_doing_my_best']);
    }
  }
}
