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

  constructor(private db: AngularFireDatabase) {
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

  update(course) {
    // this.db.object('/courses/' + course.$key)
    //   .set(course.$value + 'UPDATED');

    // we can also pass a "complex object"
    // this.db.object('/courses/' + course.$key)
    //   .set({
    //     title: course.$value + ' UPDATED',
    //     price: 150
    //   });

    // using "update"
    this.db.object('/courses/' + course.$key)
      .update({
        title: 'New Title',
        isLive: true
      });

    
    // SUMMARY
    // we can update using : .set & .update
    // what's the difference ?
    // set => the value of object will replace ENTIRELY with the object we passed her
    // update => only updates the properties we listed here, 
    //           if this property exist, they would be updated 
    //                                   otherwise they would be added.
  }

  delete(course) {
    this.db.object('/courses/' + course.$key)
      .remove()
      .then(x => console.log('DELETED'));
  }
}
