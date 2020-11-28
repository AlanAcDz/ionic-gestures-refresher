import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipeGestureDirective } from './swipe-gesture.directive';



@NgModule({
  declarations: [SwipeGestureDirective],
  exports: [SwipeGestureDirective],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
