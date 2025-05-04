import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-communication',
  templateUrl: './comp-communication.component.html',
  styleUrls: ['./comp-communication.component.css']
})
export class CompCommunicationComponent {
  receivedData!: string;
  getData(data: any){
    this.receivedData = data
  }
  

}
