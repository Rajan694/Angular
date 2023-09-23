import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsComponent } from './forms/forms.component';
import { RouteguardService } from './services/routeguard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contact',
    component: ContactComponent,
    canDeactivate: [RouteguardService],
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [RouteguardService],
  },
  { path: 'todo', component: TodoListComponent },
  { path: 'forms', component: FormsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
