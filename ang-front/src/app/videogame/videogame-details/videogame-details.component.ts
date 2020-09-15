import { Component, OnInit } from '@angular/core';
import { VideogameService } from 'src/app/videogame/videogame.service';
//import { Videogame } from 'src/app/videogame';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-videogame-details',
  templateUrl: './videogame-details.component.html',
  styleUrls: ['./videogame-details.component.css']
})
export class VideogameDetailsComponent implements OnInit {
  currentVideogame = null;
  message = '';

  constructor(
    private videogameService: VideogameService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getVideogame(this.route.snapshot.paramMap.get('id'));
  }

  getVideogame(id): void {
    this.videogameService.read(id)
    .subscribe(
      videogame => {
        this.currentVideogame = videogame;
        console.log(videogame);
      },
      error => {
        console.log(error);
      });
  }

  updateVideogame(): void {
    this.videogameService.update(this.currentVideogame.id, this.currentVideogame)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'Videogame was updated';
      },
      error => {
        console.log(error);
      });
  }

  deleteVideogame(): void {
    this.videogameService.delete(this.currentVideogame.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/videogames']);
      },
      error => {
        console.log(error);
      });
  }
}
