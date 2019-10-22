import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { VideoplayComponent } from './videoplay/videoplay.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';
import { SttComponent } from './stt/stt.component';
import { TtComponent } from './tt/tt.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { HttpClientModule } from '@angular/common/http'

import { TextEditorComponent } from './text-editor/text-editor.component';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  imports:[ 
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      MatVideoModule, 
      AppRoutingModule,
      FormsModule ,
      HttpClientModule,
      NgxEditorModule , 

          ],
  declarations: [ 
    AppComponent,
    HelloComponent, 
    VideoplayComponent, 
    SttComponent, 
    TtComponent, 
    FileUploadComponent, 
    TextEditorComponent, 
    ],
  providers: [],
  bootstrap:[
     AppComponent
      ]
})
export class AppModule { }
