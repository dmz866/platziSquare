import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive(
{
  selector: '[contar-clicks]' //ONLY for links
})

export class ContarClicksDirective
{
  clickN = 0;
  @HostBinding('style.opacity') opacidad = 0.1;
  @HostListener('click', ['$event.target']) onClick(btn)
  {
    //console.log('a', btn, 'Num de clicks: ', this.clickN++);
    this.clickN++;
    this.opacidad += 0.1;
  }
}
