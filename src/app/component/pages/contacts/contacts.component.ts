import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { IProcess } from 'src/app/model/process';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Input() process!:IProcess
  @Input() dropDownListData: any | undefined
  @Output() formGroupChange: EventEmitter<any> = new EventEmitter<any>();
  newContact: any = {}
  showAddnew: boolean | undefined
  typeContact: any = {}
  contactPersonsType: any = {}
  constructor(private dbService: DataService) { }

  ngOnInit(): void {

  }

  formConacts = new FormGroup({
    deliveryFlag: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.pattern(/^[\u0590-\u05ea]+$/i)]),
    type: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$"),]),
    email: new FormControl('', Validators.email)
  })

  //Add new contact
  addNewContact() {
    this.newContact = this.formConacts.value
    this.typeContact.code = this.formConacts.value.type
    let found = this.dropDownListData['contactPersonType/submitedBy'].find((f: any) => this.formConacts.value.type == f.code)
    this.typeContact.value = found.value
    this.typeContact.code = this.formConacts.value.type
    this.newContact.type = this.typeContact
    this.process.contactPersons.push(this.newContact)
    this.formConacts.reset();
    this.newContact = {}
    this.showAddnew = false
  }

  //Update parents to validitaion forms
  sendFormInformation() {
    this.formGroupChange.emit(this.formConacts);
  }

}
