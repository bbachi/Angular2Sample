export interface IPayment {
    firstName: string;
    lastName: string;
    email: string;
    ccNumber: number;
    billingAddress1: string;
    expiryMonth: string;
    expiryYear: string;
    city: string;
    billingZipcode: string;
}

export class Payment implements IPayment {

    firstName: string;
    lastName: string;
    email: string;
    ccNumber: number;
    billingAddress1: string;
    expiryMonth: string;
    expiryYear: string;
    city: string;
    billingZipcode: string;

}