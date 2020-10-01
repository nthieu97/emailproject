import { Component, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-emailbox',
  templateUrl: './emailbox.component.html',
  styleUrls: ['./emailbox.component.css']
})
export class EmailboxComponent  {
  listItem:string[]=[];
  listMessage:Message[];
  folder:string;
  constructor(private messageService:MessageService,private ac:ActivatedRoute,private router:Router) {
    this.listItem = this.messageService.getFolder();
  }
  handleClick(value:string){
    this.router.navigate(['/','message',value]);

  }
}
