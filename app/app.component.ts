import {Component} from '@angular/core'
import {Config} from './config.service'
import {Video} from './video'
import {VideoListComponent} from './VideoList.Component'

@Component({
selector: 'my-app',
templateUrl: 'app/app.component.html'
})
export class AppComponent {
title = Config.TITLE_PAGE;
videos : Array<Video>;
selectedVideo: Video;
    
constructor(){
this.videos = [
new Video(1,"Test","www.test.com","Test Description"),
new Video(2,"Test 2","www.test2.com","Test Description")
]
}

onSelectVideo(video){
console.log(JSON.stringify(video));
//this.selectedVideo = video;
}
}