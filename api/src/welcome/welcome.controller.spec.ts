import { Test, TestingModule } from '@nestjs/testing';
import { WelcomeController } from './welcome.controller';
import { WelcomeService } from './welcome.service';

describe('WelcomeController', () => {
  let controller: WelcomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WelcomeController],
      providers: [WelcomeService],
    }).compile();

    controller = module.get<WelcomeController>(WelcomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
