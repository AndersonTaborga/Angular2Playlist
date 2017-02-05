import {Output, Input, Component, EventEmitter} from '@angular/core'
import {Video} from './video';
import { VideoDetailComponent } from './VideoDetail.Component';

@Component({
    selector: 'video-list',
    templateUrl: 'app/videolist.component.html',
    
})
export class VideoListComponent{
   @Input() videos;

   @Output() selectVideo = new EventEmitter(); 

onSelect(vid: Video) {
console.log(JSON.stringify(vid));
}

}