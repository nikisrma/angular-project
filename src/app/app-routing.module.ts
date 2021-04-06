import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import {StudentDetailComponent} from './student-detail/student-detail.component'
const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'students',component:StudentsComponent},
  {path:'students/:id',component:StudentDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }