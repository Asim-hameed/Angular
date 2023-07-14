import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray,FormGroup,FormControl,Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'REACTIVEFORMS';
  reactiveForm: FormGroup;
  formStatus;

  ngOnInit(){
    this.reactiveForm=new FormGroup({
      personDetails: new FormGroup({
        firstname: new FormControl(null,[Validators.required,this.noSpaceAllowed]),
        lastname: new FormControl(null,[Validators.required,this.noSpaceAllowed]),
        email :new FormControl(null,[Validators.required,Validators.email], this.emailNotAllowed)
      }),
      
      gender: new FormControl('male'),
      country: new FormControl('usa'),
      hobbies: new FormControl(null),
      skills: new FormArray([
        new FormControl(null, Validators.required)
      ])

    })

    // this.reactiveForm.get('personDetails.firstname').valueChanges.subscribe((value)=>{
    //   console.log(value);
    // })

    // this.reactiveForm.valueChanges.subscribe((value)=>{
    //   console.log(value);
    // })
    this.reactiveForm.statusChanges.subscribe((value)=>{
      console.log(value);
      this.formStatus =value;
    })

    // setTimeout(()=>{
    //   this.reactiveForm.setValue({
    //     personDetails:{
    //       firstname: '',
    //       lastname: '',
    //       email: 'abc@example.com'
    //     },
    //     gender: '',
    //     country: '',
    //     hobbies: '',
    //     skills: []
    //   })
    // },4000)

    setTimeout(()=>{
      this.reactiveForm.patchValue({
        personDetails:{
          email: 'abc@example.com'
        }
      })
    },4000)
    
  }

  onSubmit(){
    console.log(this.reactiveForm);
    this.reactiveForm.reset({
      personDetails:{
              firstname: '',
              lastname: '',
              email: 'abc@example.com'
            },
            gender: 'male',
            country: 'usa',
            hobbies: '',
            skills: []
    });
  }
  addSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  }

  noSpaceAllowed(control: FormControl){
    if(control.value !=null && control.value.indexOf(' ')!= -1){
      return {noSpaceAllowed: true}
    }
    return null;
  }

  //async Validator
  emailNotAllowed(control: FormControl): Promise<any> | Observable<any>{
    const response =new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value ==='proacademy@gmail.com'){
          resolve({emailNotAllowed: true})
        }else{
          resolve(null)
        }
      },5000)
    });
    return response;
  }
}
