import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'project/:id',
    component: ProjectComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled", anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
