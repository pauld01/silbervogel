import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { cp } from 'fs';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {
    console.log(process.env.DB_URL_VOL);
    console.log(configService.get('DB_URL_VOL'));
    this.getHello();
  }
  getHello(): string {
    return 'Hello World!';
  }
}
