import { v4 as uuid } from 'uuid';
import { injectable } from 'inversify';

@injectable()
export class TokenService {
  private tokenStorage = {};

  setToken(configuration: unknown) {
    const token = uuid();
    this.tokenStorage[token] = configuration;
    return configuration;
  }

  getToken(token: string) {
    return this.tokenStorage[token] || null;
  }

  removeToken(token: string) {
    const configuration = this.tokenStorage[token];
    if (!configuration) return null;
    delete this.tokenStorage[token];
    return configuration;
  }
}
