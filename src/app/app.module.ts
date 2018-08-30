import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopComponent } from './top/top.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes =[
  {path: '',component: HomeComponent},
  { path: 'about', component: AboutComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopComponent,
    CarouselComponent,
    ContactsComponent, 
    AboutComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


