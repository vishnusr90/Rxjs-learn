import { Observable } from 'rxjs/Observable';

var observable = Observable.create((observer: any) => {
    observer.next("Hey !!!")
});

observable.subscribe((value: any) => addItem(value));


function addItem(val: any){
    var node = document.createElement("li");
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}