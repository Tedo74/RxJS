import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-basic-observable',
  templateUrl: './basic-observable.component.html',
  styleUrls: ['./basic-observable.component.scss']
})
export class BasicObservableComponent implements OnInit {
  basicObservable: Observable<string> = new Observable(subscriber => {
    subscriber.next('Teddy');
  });

  ngOnInit(): void {
    const observer = {
      next: (message: string) => console.log(message)
    };

    this.basicObservable.subscribe(observer);
  }
}
