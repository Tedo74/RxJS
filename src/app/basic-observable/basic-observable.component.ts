import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-basic-observable',
  templateUrl: './basic-observable.component.html',
  styleUrls: ['./basic-observable.component.scss']
})
export class BasicObservableComponent implements OnInit {
  basicObservable: Observable<string> = new Observable(
  subscriber => {
    subscriber.next('Hello');
    setTimeout(() => {
      subscriber.next('Teddy');
    }, 2500);

    setTimeout(() => {
      subscriber.next('Alice');
    }, 5500);

    /**
     * Cleanup function to be called after the observable is complete.
     */
    return () => {
      console.log('Teardown');
    }
  });

  subscription!: Subscription;

  ngOnInit(): void {
    const observer = {
      next: (message: string) => console.log(message)
    };

    this.subscription = this.basicObservable.subscribe(observer);

    setTimeout(() => {
      console.log('Unsubscribe');
      this.subscription.unsubscribe();
    }, 4500);
  }
}
