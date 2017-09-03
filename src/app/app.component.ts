import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$: FirebaseListObservable<any[]>;
  course$;
  author$;

  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/courses');
    this.course$ = db.object('/courses/1');
    this.author$ = db.object('/authors/1');
  }

  add(course: HTMLInputElement) {
    // save a string
    // this.courses$.push(course.value);

    // save an object
    this.courses$.push({
      name: 'course5',
      price: 150,
      isLive: true,
      sections: [
        { title: 'components'},
        { title: 'directives'},
        { title: 'template'},
      ]
    });

    course.value = '';
  }
}
