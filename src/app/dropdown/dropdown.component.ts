import { Component, EventEmitter, Output,  } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent  {
  @Output('sendEvent')sendEvent = new EventEmitter<string>();
  users: string[];
  constructor(private messageService:MessageService) {
    this.users= messageService.getuser();
   }
   handleChange(value:string){
     this.sendEvent.emit(value);
   }
}
