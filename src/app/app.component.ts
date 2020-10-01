import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:string[];
  constructor(private messageService : MessageService , private ac:ActivatedRoute,private router:Router){

  }
  handleEvent(value:string){
    this.messageService.setUser(value);
    this.router.navigate(['/','message'],{queryParams:{user:value?value:undefined}})
  }
  handleClick(value:string ){
    this.router.navigate(['/',value]);
  }
}
