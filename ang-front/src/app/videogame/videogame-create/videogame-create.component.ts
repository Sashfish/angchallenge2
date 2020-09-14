import { Component, OnInit } from '@angular/core';
import { VideogameService } from 'src/app/videogame/videogame.service';
import { Videogame } from 'src/app/videogame';

@Component({
  selector: 'app-videogame-create',
  templateUrl: './videogame-create.component.html',
  styleUrls: ['./videogame-create.component.css']
})
export class VideogameCreateComponent implements OnInit {
  videogame = {
    title: '',
    features_maxplayers: null,
    features_multiplatform: null,
    features_online: null,
    metadata_genres: '',
    metadata_licensed: null,
    metadata_publishers: '',
    metadata_sequel: null,
    metrics_reviewscore: null,
    metrics_sales: null,
    metrics_usedprice: null,
    release_console: '',
    release_rating: '',
    release_rerelease: null,
    release_year: null,
    length_allplaystyles_average: null,
    length_allplaystyles_leisure: null,
    length_allplaystyles_median: null,
    length_allplaystyles_polled: null,
    length_allplaystyles_rushed: null,
    length_completionists_average: null,
    length_completionists_leisure: null,
    length_completionists_median: null,
    length_compltetionists_polled: null,
    length_completionists_rushed: null,
    length_mainplusextras_average: null,
    length_mainplusextras_leisure: null,
    length_mainplusextras_median: null,
    length_mainplusextras_polled: null,
    length_mainplusextras_rushed: null,
    length_mainstory_average: null,
    length_mainstory_leisure: null,
    length_mainstory_median: null,
    length_mainstory_polled: null,
    length_mainstory_rushed: null
  };
  submitted = false;

  constructor(private videogameService: VideogameService) { }

  ngOnInit(): void {
  }

  createVideogame(): void {
    const data = {
      title: this.videogame.title,
      features_maxplayers: this.videogame.features_maxplayers,
      features_multiplatform: this.videogame.features_multiplatform,
      features_online: this.videogame.features_online,
      metadata_genres: this.videogame.metadata_genres,
      metadata_licensed: this.videogame.metadata_licensed,
      metadata_publishers: this.videogame.metadata_publishers,
      metadata_sequel: this.videogame.metadata_sequel,
      metrics_reviewscore: this.videogame.metrics_reviewscore,
      metrics_sales: this.videogame.metrics_sales,
      metrics_usedprice: this.videogame.metrics_usedprice,
      release_console: this.videogame.release_console,
      release_rating: this.videogame.release_rating,
      release_rerelease: this.videogame.release_rerelease,
      release_year: this.videogame.release_year,
      length_allplaystyles_average: this.videogame.length_allplaystyles_average,
      length_allplaystyles_leisure: this.videogame.length_allplaystyles_leisure,
      length_allplaystyles_median: this.videogame.length_allplaystyles_median,
      length_allplaystyles_polled: this.videogame.length_allplaystyles_polled,
      length_allplaystyles_rushed: this.videogame.length_allplaystyles_rushed,
      length_completionists_average: this.videogame.length_completionists_average,
      length_completionists_leisure: this.videogame.length_completionists_leisure,
      length_completionists_median: this.videogame.length_completionists_median,
      length_compltetionists_polled: this.videogame.length_compltetionists_polled,
      length_completionists_rushed: this.videogame.length_completionists_rushed,
      length_mainplusextras_average: this.videogame.length_mainplusextras_average,
      length_mainplusextras_leisure: this.videogame.length_mainplusextras_leisure,
      length_mainplusextras_median: this.videogame.length_mainplusextras_median,
      length_mainplusextras_polled: this.videogame.length_mainplusextras_polled,
      length_mainplusextras_rushed: this.videogame.length_mainplusextras_rushed,
      length_mainstory_average: this.videogame.length_mainstory_average,
      length_mainstory_leisure: this.videogame.length_mainstory_leisure,
      length_mainstory_median: this.videogame.length_mainstory_median,
      length_mainstory_polled: this.videogame.length_mainstory_polled,
      length_mainstory_rushed: this.videogame.length_mainstory_rushed
    };

    this.videogameService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  newVideogame(): void {
    this.submitted = false;
    this.videogame = {
      title: '',
      features_maxplayers: null,
      features_multiplatform: null,
      features_online: null,
      metadata_genres: '',
      metadata_licensed: null,
      metadata_publishers: '',
      metadata_sequel: null,
      metrics_reviewscore: null,
      metrics_sales: null,
      metrics_usedprice: null,
      release_console: '',
      release_rating: '',
      release_rerelease: null,
      release_year: null,
      length_allplaystyles_average: null,
      length_allplaystyles_leisure: null,
      length_allplaystyles_median: null,
      length_allplaystyles_polled: null,
      length_allplaystyles_rushed: null,
      length_completionists_average: null,
      length_completionists_leisure: null,
      length_completionists_median: null,
      length_compltetionists_polled: null,
      length_completionists_rushed: null,
      length_mainplusextras_average: null,
      length_mainplusextras_leisure: null,
      length_mainplusextras_median: null,
      length_mainplusextras_polled: null,
      length_mainplusextras_rushed: null,
      length_mainstory_average: null,
      length_mainstory_leisure: null,
      length_mainstory_median: null,
      length_mainstory_polled: null,
      length_mainstory_rushed: null
    };
  }

}
