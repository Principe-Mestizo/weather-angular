import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'weather-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent {
  
  @Input()
  public placelholder: string = '';


  @Output()
  public onValue = new EventEmitter<string>();


  emitValue( value: string):void {
    this.onValue.emit( value );
  }

 

}
