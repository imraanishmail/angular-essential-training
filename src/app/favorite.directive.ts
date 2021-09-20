import { Directive, HostBinding } from "@angular/core";

@Directive({
    //square bracket used because match need to be found on element attribute
    selector: '[mwFavorite]'
})
export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true;
}
