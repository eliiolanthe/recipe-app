import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  // toggleOpen() {
  //   if (this.element.nativeElement.classList.contains('open')) {
  //     this.renderer.removeClass(this.element.nativeElement, 'open');
  //   } else {
  //     this.renderer.addClass(this.element.nativeElement, 'open');
  //   }
  // }
}
