import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideogameService } from "./videogame/videogame.service";
import { FormsModule } from '@angular/forms';
import { VideogameCreateComponent } from './videogame/videogame-create/videogame-create.component';
import { VideogameDetailsComponent } from './videogame/videogame-details/videogame-details.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameCreateComponent,
    VideogameDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [VideogameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
