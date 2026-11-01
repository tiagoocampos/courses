import { Module } from '@nestjs/common';
import { EnvConfigService } from './env-config.service';

//modulo responsavel por facilitar o uso de variaveis de
// ambiente, injetando o EnvConfigService em qualquer lugar
// da aplicação

@Module({
  providers: [EnvConfigService]
})
export class EnvConfigModule { }
