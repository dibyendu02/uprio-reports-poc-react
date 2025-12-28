import { DevEnvironment } from './DevEnvironment';
import { ProdEnvironment } from './ProdEnvironment';

export class GlobalEnvironment {
  static apiBaseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL || '';
  static apiKey: string = process.env.NEXT_PUBLIC_API_KEY || '';
  static enableLogging: boolean =
    process.env.NEXT_PUBLIC_ENABLE_LOGGING?.toLowerCase() === 'true';

  static loadEnvironment(): void {
    const environment = 'development';

    if (environment === 'development') {
      DevEnvironment.load();
    } else {
      ProdEnvironment.load();
    }
  }
}
