import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface Cats {
  numberOfCats: number;
  nameOfGroup: string;
}
interface Hello {
  message: number;
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  findHello(): Hello {
    const hello: Hello = {
      message: 112,
      name: 'Wandering Hello',
    };
    return hello;
  }

  @Get('cat')
  findAll(): Cats {
    const cats: Cats = {
      numberOfCats: 150,
      nameOfGroup: 'FelisCatus',
    };
    return cats;
  }
}
