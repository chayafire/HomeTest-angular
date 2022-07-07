import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-concentration-contacts',
  templateUrl: './concentration-contacts.component.html',
  styleUrls: ['./concentration-contacts.component.css']
})
export class ConcentrationContactsComponent implements OnInit {
  @Input() process: any | undefined
  @Input() dropDownListData: any | undefined
  typeContact: any = {}


  constructor(private dbService: DataService) { }
  ngOnInit(): void {
  }

  //Add insured to contacts
  addInsured() {
    let found = this.dropDownListData['contactPersonType/submitedBy'].find((f: any) => this.process.superClaim.submitedBy == f.code)
    this.typeContact.value = found.value
    this.typeContact.code = this.process.superClaim.submitedBy

    let newContact = {
      name: this.process.insured.firstName + " " + this.process.insured.lastName,
      address: this.process.insured.address.cityName + " " + this.process.insured.address.streetName,
      type: this.typeContact
    }
    this.process.contactPersons.push(newContact)
  }

  //Remove all insuredes to contacts
  removeAllInsuredes() {
    this.process.contactPersons = []
  }

  //Partial reset from contacts
  partialReset() {
    console.log(this.process);
    this.process.contactPersons = this.process.contactPersons.filter(function (item: any) {
      return item.deliveryFlag == true
    })


  }

}
