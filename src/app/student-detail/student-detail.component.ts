import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  template: `
    <p>
      student-detail works!
    </p>
    <h3>You selected student with id = {{studentId}}</h3>
  `,
  styles: [
  ]
})
export class StudentDetailComponent implements OnInit {
  studentId: number | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.route.queryParams.subscribe(
    params => {
      this.studentId =  params['this.id'];
    }
  )
}

  

}
