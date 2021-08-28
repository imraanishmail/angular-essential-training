import { Component, Input } from '@angular/core';


@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  //binding target
  //name in parentheses is an alias, not recommended
  @Input('mediaItemToWatch') mediaItem;

  onDelete() {
    console.log('deleted');
  }
}
