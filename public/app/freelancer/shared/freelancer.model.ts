export interface IFreelancer {
    firstName: string;
    lastName: string;
    email: string;
    location: string;
    type: string;
    hourlyRate: string;
    description: string;
    city: string;
}

export class Freelancer implements IFreelancer {
    firstName: string;
    lastName: string;
    email: string;
    location: string;
    type: string;
    hourlyRate: string;
    description: string;
    city: string;
}

