"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var create_freelancer_component_1 = require("./createfreelancer/create-freelancer.component");
exports.CreateFreelancerComponent = create_freelancer_component_1.CreateFreelancerComponent;
var freelancer_component_1 = require("./freelancers/freelancer.component");
exports.FreelancerComponent = freelancer_component_1.FreelancerComponent;
var freelancer_profile_component_1 = require("./profile/freelancer-profile.component");
exports.FreelancerProfileComponent = freelancer_profile_component_1.FreelancerProfileComponent;
__export(require("./shared/freelancer.model"));
var freelancer_service_1 = require("./shared/freelancer.service");
exports.FreelancerService = freelancer_service_1.FreelancerService;
//# sourceMappingURL=index.js.map