import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  // set property to event emitter object
  // can pass in string value to @Output to Alias property. Only use when needed
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.mediaItem);
  }
}
