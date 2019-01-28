import { Observable } from 'rxjs/Observable';

var observable = Observable.create((observer: any) => {
    try{
        observer.next("Hey !!!")
        observer.next("How are you ?")
        observer.complete();
        observer.next("This will not be displayed");
    } catch(err) {
        observer.error(err)
    }
    
});

observable.subscribe(
    (value: any) => addItem(value),
    (error: any) => addItem(error),
    () => addItem("Completed")
);


function addItem(val: any){
    var node = document.createElement("li");
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}