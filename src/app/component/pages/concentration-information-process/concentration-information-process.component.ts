import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { IProcess } from 'src/app/model/process';

@Component({
  selector: 'app-concentration-information-process',
  templateUrl: './concentration-information-process.component.html',
  styleUrls: ['./concentration-information-process.component.css']
})
export class ConcentrationInformationProcessComponent implements OnInit {

  public claimDetails: any = {}

  @Input() process!:IProcess
  @Input() dropDownListData: any | undefined
  @Output() formGroupChange: EventEmitter<any> = new EventEmitter<any>();

  isInContactPersons: boolean | undefined
  information: any = {}
  public str: any
  injuryTypeIsdisabled: Boolean = false

  constructor(private dbService: DataService) {
  }

  ngOnInit(): void {
    this.formInformation.valueChanges.subscribe(data => {
      this.sendFormInformation(data)
    });
  }

  formInformation = new FormGroup({
    superClaimType: new FormControl(),
    claimCause: new FormControl('', Validators.required),
    submitedBy: new FormControl('', Validators.required),
    eventDate: new FormControl('', Validators.required),
    injuryType: new FormControl({ value: '', disabled: this.injuryTypeIsdisabled }, Validators.required),
    submitionMethod: new FormControl('', Validators.required)
  })

  //Update parent if valid 
  sendFormInformation(data: any) {
    this.formGroupChange.emit(this.formInformation);
    this.process.superClaim.superClaimType = this.formInformation.value.superClaimType
    this.process.superClaim.claimCause = this.formInformation.value.claimCause
    this.process.superClaim.submitedBy = this.formInformation.value.submitedBy
    this.process.superClaim.eventDate = this.formInformation.value.eventDate
    this.process.superClaim.injuryType = this.formInformation.value.injuryType
    this.process.superClaim.submitionMethod = this.formInformation.value.submitionMethod

  }



}

