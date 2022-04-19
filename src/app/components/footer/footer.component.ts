import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  users:any;
  

  constructor(private userService:UserService) {}

  ngOnInit(): void {

    this.users = this.userService.getUsers();
      // .subscribe(data =>{
        // console.log(data);
        // this.users = data;
      // })
  }
  
  number:number = Math.round(Math.random()*(20000-10000)+10000);

}
