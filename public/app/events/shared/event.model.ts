import { IAddress } from './address.model';

export interface IEvent {
    eventId: number;
    title: string;
    host: string;
    latitude: string;
    longitude: string;
    description: string;
    fee: string;
    venue: string;
    date: string;
    type: string;
    phone: string;
    email: string;
    address: IAddress;
    startTimeHour: string;
    startTimeMin: string;
}

export class Event implements IEvent {
    eventId: number;
    title: string;
    host: string;
    latitude: string;
    longitude: string;
    description: string;
    fee: string;
    venue: string;
    date: string;
    type: string;
    phone: string;
    email: string;
    address: IAddress;
    streetNumber: string;
    streetName: string;
    city: string;
    state: string;
    zipcode: string;
    startTimeHour: string;
    startTimeMin: string;
}