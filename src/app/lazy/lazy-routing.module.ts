import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { LazyChildComponent } from './lazy-child/lazy-child.component';

const routes: Routes = [ 
   { 
     path:'', component:LazyComponent,
     children:[
       { 
         path:':id', component:LazyChildComponent
       }
     ] 
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LazyRoutingModule { }
