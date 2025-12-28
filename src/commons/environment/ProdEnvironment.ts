import { GlobalEnvironment } from './GlobalEnvironment';

export class ProdEnvironment {
  static load(): void {
    // Ensure this method exists
    GlobalEnvironment.apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
    GlobalEnvironment.apiKey = process.env.NEXT_PUBLIC_API_KEY || '';
    GlobalEnvironment.enableLogging =
      process.env.NEXT_PUBLIC_ENABLE_LOGGING?.toLowerCase() === 'true';
  }
}
