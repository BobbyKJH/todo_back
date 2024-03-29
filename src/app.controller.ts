import { Controller, Get } from '@nestjs/common';
/** Service */
import { AppService } from 'src/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
