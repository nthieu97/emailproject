import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-emaildetail',
  templateUrl: './emaildetail.component.html',
  styleUrls: ['./emaildetail.component.css']
})
export class EmaildetailComponent implements OnInit {
  detailMessage:Message;
  constructor(private messageService:MessageService) {
    this.detailMessage
  }

  ngOnInit(): void {
  }

}
