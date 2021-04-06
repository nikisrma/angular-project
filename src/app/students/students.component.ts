import { Component, OnInit } from '@angular/core';
import {Student} from './../student';
import {STUDENTS} from './../mock-student';
import {Router} from '@angular/router';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students = STUDENTS;
selectedStudent:Student | undefined;
  id: number | undefined;

  constructor(private router: Router)
   { }

  ngOnInit(): void {
  }
onSelect(student: Student):void{
this.selectedStudent = student;
this.id = student.id;
this.router.navigate(['/students',this.id])
}
}
