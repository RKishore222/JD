import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Validations } from '../common/validation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  contactForm: any;
  ngOnInit() {
    this.contactForm = new FormGroup({
      name : new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)])),
      email: new FormControl("", Validators.compose([Validators.required, Validators.email])),
      phone: new FormControl("", Validators.compose([Validators.required])),
      message: new FormControl("",Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(15)]))
    });
  }
  onSubmit = function (user) {
    console.log(user);
  }

}
