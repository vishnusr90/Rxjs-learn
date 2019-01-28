import { Observable } from "rxjs/Observable";

var observable = Observable.create((observer: any) => {
    observer.next('Hey !');
});


 observable.subscribe((x:any) => console.log(x));