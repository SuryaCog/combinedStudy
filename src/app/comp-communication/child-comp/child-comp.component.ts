import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { OutletContext } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  data!: string;

  constructor(private commService: CommunicationService){}
  ngOnDestroy(): void {
    console.log("des")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnchange");
  }
  ngDoCheck(): void {
    console.log("ngDOCH");
  }


  @Output() eData = new EventEmitter 
  @Input() pData: any
  getData(data: string){
    this.eData.emit(data)
  }
  getUrData(data: string){
    this.commService.getData(data)
  }
}
