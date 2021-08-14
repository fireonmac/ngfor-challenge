import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngfor-assignment-review';

  trackByTag = (index: number, tag: any) => tag.id;

  tags: string[] = [];
  dragulaModelTags: any[] = [];

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

  onNgModelChange(event: any, idx: number) {
    this.dragulaModelTags[idx].tagTitle = event;
  }

  onDragulaModelChange(event: any) {
    this.tags = event.map((t: any) => t.tagTitle);
  }
}
