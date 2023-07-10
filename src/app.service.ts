import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { cp } from 'fs';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {
    this.getHello();
  }
  getHello(): string {
    return 'Hello World!';
  }
}
