import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/body/components/home/home.component';
import { AboutMeComponent } from './components/body/components/about-me/about-me.component';
import { ProjectsComponent } from './components/body/components/projects/projects.component';
import { ContactsComponent } from './components/body/components/contacts/contacts.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'aboutme', component: AboutMeComponent},
  { path: 'past', component: ProjectsComponent},
  { path: 'contacts', component: ContactsComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
