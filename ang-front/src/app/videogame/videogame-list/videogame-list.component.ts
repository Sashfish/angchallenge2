import { Component, OnInit } from '@angular/core';
import { VideogameService } from 'src/app/videogame/videogame.service';
//import { Videogame } from 'src/app/videogame';

@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.css']
})
export class VideogameListComponent implements OnInit {

  videogames: any;
  currentVideogame = null;
  currentIndex = -1;

  constructor(private videogameService: VideogameService) { }

  ngOnInit(): void {
    this.readVideogames();
  }

  readVideogames(): void {
    this.videogameService.readAll()
    .subscribe(
      videogames => {
        this.videogames = videogames;
        console.log(videogames);
      },
      error => {
        console.log(error);
      });
  }

  refresh(): void {
    this.readVideogames();
    this.currentVideogame = null;
    this.currentIndex = -1;
  }

  setCurrentVideogame(videogame, index): void {
    this.currentVideogame = videogame;
    this.currentIndex = index;
  }
}
