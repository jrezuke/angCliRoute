import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeChildComponent } from './home/home-child/home-child.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './people/person/person.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'home', component: HomeComponent,
        children:[
          { 
            path:':id', component: HomeChildComponent,
            children:[
              {
                path:'people', component: PeopleComponent,
                children:[
                  {path: ':id' , component: PersonComponent}
                ]
              }
            ]
          }
        ]
      },
      {
        path:'lazy', loadChildren:'app/lazy/lazy.module#LazyModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
