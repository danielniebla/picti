import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainUserComponent } from './main-user/main-user.component';
import { RedPsicoComponent } from './red-psico/red-psico.component';
import { RegisterComponent } from './register/register.component';
import { PsicoComponent } from './psico/psico.component';
import { UserComponent } from './user/user.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'About-Us', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'About-Us', component:AboutUsComponent },
  { path: 'my-User', component:MainUserComponent },
  { path: 'connect-with-us', component:RedPsicoComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'im_the_best', component: UserComponent },
  { path: 'i_doing_my_best', component: PsicoComponent },
  { path: 'log-in', component:LogInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
