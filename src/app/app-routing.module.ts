import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path:"" , component: LoginComponent
  },
  {
    path:"register",component: RegisterComponent
  },
  {
    path:"sidebar", component:SidebarComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
