import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/servicess/userservices.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform:any
  constructor(private userdata:UserservicesService,private router:Router,private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.registerform = this.formBuilder.group({
      email:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]
    ],
    fullname:['',[Validators.required]
    ],
    password:['',[Validators.required, Validators.minLength(6),Validators.maxLength(10)]
    ]

    })
    
  }
  register(userdata:any){
    console.log(userdata)
    if(this.registerform.valid){
      this.userdata.userregisteration(userdata).subscribe((result)=>{
        console.log(result)
        const user = result
        // this.toastr.success(result.message);



      })
    

    }
   
  }
}
