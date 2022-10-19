import { Base } from '../base'
import { Auth } from './types'

export class Scope extends Base {
  async getOrganisationId (): Promise<string> {
    return await this.invoke('/v1/api-keys/scope').then((p: Auth) => p.scope[0])
  }
}
