import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from "@angular/forms";
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { DialogueComponent } from './content/dialogue/dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    ContentComponent,
    DialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
