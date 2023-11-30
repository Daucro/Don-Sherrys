import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private users = [
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
    return this.users.find((user) => user.id === id);
  }
}
