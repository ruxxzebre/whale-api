import { v4 as uuid } from 'uuid';
import { injectable } from 'inversify';

@injectable()
export class TokenService {
  private tokenStorage = {};

  setToken(configuration: unknown): unknown {
    const token = uuid();
    this.tokenStorage[token] = configuration;
    return configuration;
  }

  getToken(token: string): unknown | null {
    return this.tokenStorage[token] || null;
  }

  removeToken(token: string): unknown | null {
    const configuration = this.tokenStorage[token];
    if (!configuration) return null;
    delete this.tokenStorage[token];
    return configuration;
  }
}
