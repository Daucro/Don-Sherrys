import {
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Req,
  Res,
  HttpStatus,
  Post,
  Body,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    //console.log(id);
    const customer = this.customersService.findCustomerById(id);
    //console.log(customer, req, res);
    if (customer) {
      //console.log(customer);
      res.send(customer);
    } else {
      res.status(400).send({ msg: ' Not found' });
    }
  }

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) return customer;
    else throw new HttpException('Customer Not Found!', HttpStatus.BAD_REQUEST);
  }
  @Get('')
  getAllCustomers() {
    return this.customersService.createCustomer.getCustomers();
  }
  @Post('create')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    console.log(createCustomerDto);
    this.customersService.createCustomer(createCustomerDto);
  }
}
