import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideogameService } from "src/app/videogame/videogame.service";
import { FormsModule } from '@angular/forms';
import { VideogameCreateComponent } from './videogame/videogame-create/videogame-create.component';
import { VideogameDetailsComponent } from './videogame/videogame-details/videogame-details.component';
import { VideogameListComponent } from './videogame/videogame-list/videogame-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameCreateComponent,
    VideogameDetailsComponent,
    VideogameListComponent
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
