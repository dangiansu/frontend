import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/servicess/userservices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any
  constructor(private userdata:UserservicesService,private router:Router,private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')],
    ],
    Password:['',[Validators.required, Validators.minLength(6),Validators.maxLength(10)],
  ],
    }) 
  }

  login(data:any){
    if(this.loginForm.valid){
      console.log(data)


    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text:"something  went wrong"
      });

    }
  }

}
