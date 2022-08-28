import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  username  :string =""
  password  :string =""
  ngOnInit(): void {
  }
  login(){
    if(this.username == "66d35bd3-e4a8-4799-baa7-1000fd8ab649"){

      this.router.navigate(["designation"] ,{ queryParams: {guid : this.password.toString()}});
    }
    else
    {
      alert("Hatali bilgiler.")
    }
  }
}
