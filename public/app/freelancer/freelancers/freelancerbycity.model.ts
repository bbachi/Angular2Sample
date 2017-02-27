import { Freelancer } from '../shared/freelancer.model';

export interface IFreelancerByCity{
    kind: string;
    freelancers: Freelancer;
}

export class FreelancerByCity implements IFreelancerByCity {
    kind: string = '';
    freelancers: any;
}