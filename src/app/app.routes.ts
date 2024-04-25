import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
    {path: "", component: AppComponent, pathMatch: "full"},
    {path: "login", component: LoginComponent}    
];
