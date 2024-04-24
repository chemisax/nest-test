import {Controller, Get} from '@nestjs/common';
import { WelcomeService } from './welcome.service';

@Controller()
export class WelcomeController {

  constructor(private readonly welcomeService: WelcomeService) {
  }

  @Get()
  getWelcomeMessage(): object {
    return {
        message: this.welcomeService.greet()
    }
  }
}
