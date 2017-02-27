export interface IAddress{
    streetNumber: string;
    streetName: string;
    city: string;
    state: string;
    zipcode: string;
    lat: string;
    lng: string;
}

export class Address implements IAddress {
    streetNumber: string;
    streetName: string;
    city: string;
    state: string;
    zipcode: string;
    lat: string;
    lng: string;
}