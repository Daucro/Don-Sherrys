import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {
  private customers: Customers[] = [
    {
      id: 1,
      email: 'Johnny@gmail.com',
      phone: '254-233-2363',
    },
    {
      id: 2,
      email: 'Danny@gmail.com',
      phone: '254-223-2668',
    },
    {
      id: 3,
      email: 'Joey@gmail.com',
      phone: '254-234-2323',
    },
  ];
  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }
  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getCustomers() {
    return this.customers;
  }
}
