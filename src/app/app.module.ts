import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAddComponent } from './shared/todo-add/todo-add.component';
import { TodoItemComponent } from './shared/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
