import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-child2-comp',
  templateUrl: './child2-comp.component.html',
  styleUrls: ['./child2-comp.component.css']
})
export class Child2CompComponent implements OnInit {
  constructor(private commService: CommunicationService){}
  ngOnInit(): void {
    this.commService.sub.subscribe((data) => this.receivedData = data)
  }
  receivedData: any;
}
