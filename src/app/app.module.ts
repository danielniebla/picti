import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { LogInComponent } from './log-in/log-in.component';
import { PsicoComponent } from './psico/psico.component';
import { MainUserComponent } from './main-user/main-user.component';
import { RegisterComponent } from './register/register.component';
import { RedMidComponent } from './red-mid/red-mid.component';
import { RedPsicoComponent } from './red-psico/red-psico.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    LogInComponent,
    PsicoComponent,
    MainUserComponent,
    RegisterComponent,
    RedMidComponent,
    RedPsicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
