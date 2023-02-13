import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoWidgetsRoutingModule } from './todo-widgets-routing.module';
import { TodoWidgetsComponent } from './todo-widgets.component';


@NgModule({
  declarations: [
    TodoWidgetsComponent
  ],
  imports: [
    CommonModule,
    TodoWidgetsRoutingModule
  ]
})
export class TodoWidgetsModule { }
