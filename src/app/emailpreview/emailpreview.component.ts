import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-emailpreview',
  templateUrl: './emailpreview.component.html',
  styleUrls: ['./emailpreview.component.css']
})
export class EmailpreviewComponent{
  listPreview:Message[];
  constructor(private messageService : MessageService,private ac :ActivatedRoute) {
    ac.params.subscribe((param)=>{
      this.listPreview=this.messageService.getMessageByFolder(param.folder);
    })
  }
}
