import { Directive, Input, OnInit } from '@angular/core';
import { GestureController, GestureDetail } from '@ionic/angular';

@Directive({
  selector: '[appSwipeGesture]'
})
export class SwipeGestureDirective implements OnInit {
  @Input('appSwipeGesture') htmlElement: HTMLElement;
  constructor(
    private gestureCtrl: GestureController,
  ) { }
  ngOnInit() {
    const gesture = this.gestureCtrl.create({
      el: this.htmlElement,
      gestureName: 'swipe',
      direction: 'x',
      gesturePriority: 32,
      onStart: (detail) => console.log({ onStart: detail }),
      onMove: (detail) => this.onSwipe(detail),
      onEnd: () => this.onRelease(),
      notCaptured: (detail) => console.log({ notCaptured: detail }),
    }, true);
    gesture.enable();
  }
  private onSwipe({ deltaX }: GestureDetail) {
    this.htmlElement.style.transform = `translateX(${ deltaX }px)`;
  }
  private onRelease() {
    this.htmlElement.style.transition = 'transform 300ms ease-in-out';
    this.htmlElement.style.transform = `translateX(0)`;
    setTimeout(() => {
      this.htmlElement.style.transition = 'unset';
    }, 300);
  }
}
