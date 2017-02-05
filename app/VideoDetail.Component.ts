import {Input, Component} from '@angular/core'
import {Video} from './video'

@Component({
selector:'video-detail',
templateUrl: 'app/videodetail.component.html',
})
export class VideoDetailComponent{
    @Input() video;
}