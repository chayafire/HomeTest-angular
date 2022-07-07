export interface IProcess {
    superClaim: IsuperClaim;
    insured: IInsured;
    contactPersons: IContactPerson[];
}

export interface IsuperClaim {
    superClaimNum: number;
    superClaimStatus: ICodeValue;
    superClaimType: ICodeValue;
    eventDate: number;
    claimCause: ICodeValue;
    injuryType: ICodeValue;
    submitedBy: number;
    submitionMethod: ICodeValue;
}

export interface ICodeValue {
    code: number;
    value: string;
}

export interface IInsured {
    address: IAddress;
    identityType: number;
    age: number;
    lastName: string;
    identity: number;
    firstName: string;
}

export interface IAddress {
    cityName: string;
    streetName: string;
}

export interface IContactPerson {
    id: number | undefined;
    deliveryFlag: boolean;
    type: ICodeValue;
    name: string;
    phoneNumber: number;
    email: string;
    address: string;
}
