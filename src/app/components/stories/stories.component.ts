import { Component, inject } from '@angular/core';
import { StoriesService } from '../../services/stories.service';
import { Story } from '../../models/story';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent {

  private storiesService: StoriesService = inject(StoriesService);
  public stories: Story[] = [];

  ngOnInit() {
    this.storiesService.getStories().subscribe((stories) => {
      this.stories = stories;
    });
  }

}
