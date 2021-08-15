import { Component } from '@angular/core';

interface DragulaModelTag {
  id: number;
  tagTitle: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngfor-assignment-review';

  trackByTag = (index: number, tag: DragulaModelTag) => tag.id;

  tags: string[] = [];
  dragulaModelTags: DragulaModelTag[] = [];

  constructor() {
    this.dragulaModelTags = this.tags.map((tag, index) => {
      return {
        id: index,
        tagTitle: tag,
      }
    });
  }

  onAddBtnClick() {
    this.tags.push('');
    this.dragulaModelTags.push({
      id: this.tags.length * Math.random(),
      tagTitle: '',
    });
  }

  onDelBtnClick(idx: number) {
    console.log(123);
    this.tags.splice(idx, 1);
    this.dragulaModelTags.splice(idx, 1);
  }

  onNgModelChange(event: string, idx: number) {
    this.dragulaModelTags[idx].tagTitle = event;
  }

  onDragulaModelChange(event: DragulaModelTag[]) {
    this.tags = event.map(t => t.tagTitle);
  }
}
