import { Component, Input, OnInit } from '@angular/core';
import { Server } from '../shared/Server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  color: string | any;
  buttonText: string | any;

  @Input()
  serverInput!: Server;


  ngOnInit(): void {
    this.setServerStatus(this.serverInput.isOnline);
  }



  setServerStatus(isOnline: boolean){
    if (isOnline) {
      this.serverInput.isOnline = true;
      this.color = '#66BB6A';
      this.buttonText = 'Shut Down';
    } else {
      this.serverInput.isOnline = false;
      this.color = '#FF6B6B';
      this.buttonText = 'Start'
    }
  }


  toogleStatus(onlineStatus: boolean) {
    console.log(this.serverInput.name, ': ', onlineStatus);
    this.setServerStatus(!onlineStatus);
  }

}
