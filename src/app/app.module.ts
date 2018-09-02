import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopComponent } from './top/top.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { ParentsComponent } from './parents/parents.component';
import { FriendsComponent } from './friends/friends.component';
import { RequisitesComponent } from './requisites/requisites.component';
import { ProgrammsComponent } from './programms/programms.component';
import { AnketaComponent } from './anketa/anketa.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {Carousel2Component} from './carousel2/carousel2.component';




const appRoutes: Routes =[
  {path: '', component: HomeComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'parents', component: ParentsComponent}, 
  { path: 'friends', component: FriendsComponent}, 
  { path: 'requisites', component: RequisitesComponent},
  { path: 'programms', component: ProgrammsComponent},
  { path: 'anketa', component: AnketaComponent}, 
  { path: 'about', component: AboutComponent},
  { path: 'contact' , component: ContactComponent}, 
  { path: '**', redirectTo: '/'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopComponent,
    CarouselComponent,
    ContactsComponent, 
    HistoryComponent, 
    HomeComponent, 
    ParentsComponent, 
    FriendsComponent, 
    RequisitesComponent, 
    ProgrammsComponent, 
    AnketaComponent, 
    AboutComponent, 
    ContactComponent, 
    Carousel2Component
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


