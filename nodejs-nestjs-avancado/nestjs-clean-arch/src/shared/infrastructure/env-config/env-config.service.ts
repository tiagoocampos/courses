import { Injectable } from '@nestjs/common';
import { EnvConfig } from './env-config.interface';
import { ConfigService } from '@nestjs/config';

//serviço responsável por fornecer as
// variáveis de ambiente da aplicação


@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private configService: ConfigService) { }
  getAppPort(): number {
    return Number(this.configService.get<number>('PORT'));
  }
  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV') as string;
  }
}
