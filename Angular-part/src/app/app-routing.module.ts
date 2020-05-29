import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:"", redirectTo:"details" , pathMatch:"full"},
  {path:"details", component:DetailsComponent},
  {path:"update", component:UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingModules =[DetailsComponent,UpdateComponent]
