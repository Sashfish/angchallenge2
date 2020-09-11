import { Component } from '@angular/core';
import { Videogame } from "./videogame/videogame.ts";
import { VideogameService } from "./videogame/videogame.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-front';

  private videogames: any;

  constructor(private videogameService: VideogameService){}

  getVideogames() {
    this.videogameService.getVideogames().subscribe(data => {
      this.videogames = data;
    });
}
ngOnInit() {
    this.getVideogames();
  }
}
