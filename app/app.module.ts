import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VideoListComponent} from './VideoList.Component';
import { VideoDetailComponent } from './VideoDetail.Component';


@NgModule({
imports: [
BrowserModule,
FormsModule
],
declarations: [
AppComponent, VideoListComponent, VideoDetailComponent
],
bootstrap: [ AppComponent ]
})
export class AppModule { }