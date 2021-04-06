import { Component, OnInit } from '@angular/core';
import {Student} from './../student';
import {STUDENTS} from './../mock-student';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students = STUDENTS;
selectedStudent:Student | undefined;
  Router: any;
  id: any;
  studentId: number | undefined;
  studentName : string | undefined;
  constructor(private router: Router,private route: ActivatedRoute)
   { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params=>{
      this.studentId = this.route.snapshot.queryParams['id'];
      this.studentName = this.route.snapshot.queryParams['name'];
    });
  }
onSelect(student: Student):void{
this.selectedStudent = student;
this.router.navigate(['/students'],{queryParams: {id: this.selectedStudent.id, name:this.selectedStudent.name}});

}
}
