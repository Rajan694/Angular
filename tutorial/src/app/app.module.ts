import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Child1Component } from './child1/child1.component';
import { UsdToinrPipe } from './pipes/usd-toinr.pipe';
import { FormsComponent } from './forms/forms.component';
import { AquaElDirective } from './aqua-el.directive';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test11Component } from './test1/test1.1/test1.1.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    Child1Component,
    UsdToinrPipe,
    FormsComponent,
    AquaElDirective,
    Test1Component,
    Test2Component,
    Test11Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
