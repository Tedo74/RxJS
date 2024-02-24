import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-hot-observable',
  templateUrl: './hot-observable.component.html',
  styleUrls: ['./hot-observable.component.scss']
})
export class HotObservableComponent implements AfterViewInit {
  @ViewChild('hot') hotButton!: ElementRef;

  hotObservable$!: Observable<any>;

  ngAfterViewInit(): void {
    this.hotObservable$ = new Observable(subscriber => {
      this.hotButton.nativeElement.addEventListener('click', (e: MouseEvent) => {
        subscriber.next(e.clientX);
      })
    });

    this.hotObservable$.subscribe({
      next: (e)=> console.log('hot Observable sub1:',e)
    });

    setTimeout(() => {
      this.hotObservable$.subscribe({
        next: (e)=> console.log('hot Observable sub2:',e)
      });
    }, 5000);
  }
}
