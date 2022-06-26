import { Controller, Get, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'hello';
  }

  @Post()
  createMessage() {

  }

  @Get('/:id')
  getMessage() {
    return 'hello this is the specific message';
  }
}
