import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { VideogameService } from './videogame/videogame.service';
//import { Videogame } from './videogame';
import { ChartsModule } from 'ng2-charts';

import { VideogameCreateComponent } from './videogame/videogame-create/videogame-create.component';
import { VideogameDetailsComponent } from './videogame/videogame-details/videogame-details.component';
import { VideogameListComponent } from './videogame/videogame-list/videogame-list.component';
import { VideogameGraphsComponent } from './videogame/videogame-graphs/videogame-graphs.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameCreateComponent,
    VideogameDetailsComponent,
    VideogameListComponent,
    VideogameGraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [VideogameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
