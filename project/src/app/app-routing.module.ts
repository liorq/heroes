import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHeroesComponent } from './components/myHeroes/myHeroes.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AllHeroesComponent } from './components/allHeroes/allHeroes.component';
const routes: Routes = [
  { path: 'signUp', component: SignUpComponent },
  { path: 'myHeroes', component: MyHeroesComponent },
  { path: 'allHeroes', component: AllHeroesComponent },
  { path: 'signIn', component: SignInComponent },
  { path: '', component: SignInComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
