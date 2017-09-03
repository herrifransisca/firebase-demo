import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: any[];

  constructor(db: AngularFireDatabase) {
    db.list('/courses')
      .subscribe(courses => {
        this.courses = courses;
        console.log(courses);
      });
  }
}
