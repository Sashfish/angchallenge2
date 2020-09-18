import { Component, OnInit } from '@angular/core';
import { VideogameService } from 'src/app/videogame/videogame.service';


@Component({
  selector: 'app-videogame-graphs',
  templateUrl: './videogame-graphs.component.html',
  styleUrls: ['./videogame-graphs.component.css']
})
export class VideogameGraphsComponent implements OnInit {

  videogames: any;
  releaseYears: any;

  constructor(private videogameService: VideogameService) { }

  public barChartOptions = { scaleShowVerticalLines: false, responsive: true };
  public barChartLabels: any[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any[];

  //public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  //public doughnutChartData = [120, 150, 180, 90];
  //public doughnutChartType = 'doughnut';
//
  //public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  //public radarChartData = [
  //  {data: [120, 130, 180, 70], label: '2017'},
  //  {data: [90, 150, 200, 45], label: '2018'}
  //];
  //public radarChartType = 'radar';
//
  //public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  //public pieChartData = [120, 150, 180, 90];
  //public pieChartType = 'pie';

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

}
