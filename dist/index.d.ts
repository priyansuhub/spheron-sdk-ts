import { Domain } from './domains';
import { Base } from './base';
import { CouponsClass } from './coupons';
import { Deployment } from './deployment';
import { DeploymentEnvironment } from './deployment-environment';
import { GetOrganization, GetProject, OrganizationUpdate } from './organization';
import { ConfigurationProject, DeploymentInfo, ProjectDetails, State } from './project';
import { Scope } from './scope';
import { InviteClass } from './invites';
declare class Spheron extends Base {
}
interface Spheron extends Scope {
}
interface Spheron extends GetOrganization {
}
interface Spheron extends ProjectDetails {
}
interface Spheron extends DeploymentInfo {
}
interface Spheron extends State {
}
interface Spheron extends ConfigurationProject {
}
interface Spheron extends GetProject {
}
interface Spheron extends CouponsClass {
}
interface Spheron extends Deployment {
}
interface Spheron extends DeploymentEnvironment {
}
interface Spheron extends Domain {
}
interface Spheron extends OrganizationUpdate {
}
interface Spheron extends InviteClass {
}
export default Spheron;
