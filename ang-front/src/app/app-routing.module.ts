import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideogameCreateComponent } from './videogame-create/videogame-create.component';
import { VideogameDetailsComponent } from './videogame-details/videogame-details.component';

const routes: Routes = [
    {path: 'videogames/:id', component: VideogameDetailsComponent},
    {path: 'create', component: VideogameCreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
