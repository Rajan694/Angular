import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Child1Component } from './child1/child1.component';
import { UsdToinrPipe } from './pipes/usd-toinr.pipe';

@NgModule({
  declarations: [AppComponent, TodoListComponent, Child1Component, UsdToinrPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
