import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AllHeroesComponent } from './components/allHeroes/allHeroes.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MyHeroesComponent } from './components/myHeroes/myHeroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllHeroesComponent,
    SignUpComponent,
    MyHeroesComponent,
    PageNotFoundComponent,
    SignInComponent,
    FooterComponent,
    HeroesListComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
