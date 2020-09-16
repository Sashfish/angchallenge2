import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideogameCreateComponent } from './videogame/videogame-create/videogame-create.component';
import { VideogameDetailsComponent } from './videogame/videogame-details/videogame-details.component';
import { VideogameListComponent } from './videogame/videogame-list/videogame-list.component';
import { VideogameGraphsComponent } from './videogame/videogame-graphs/videogame-graphs.component';
const routes: Routes = [
    { path: '', redirectTo: 'videogames', pathMatch: 'full' },
    { path: 'videogames', component: VideogameListComponent },
    { path: 'videogames/:id', component: VideogameDetailsComponent },
    { path: 'create', component: VideogameCreateComponent },
    { path: 'graphs', component: VideogameGraphsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
