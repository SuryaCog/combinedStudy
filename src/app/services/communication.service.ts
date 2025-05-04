import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  sub = new Subject();
  getData(data: string){
    this.sub.next(data)
  }
}
