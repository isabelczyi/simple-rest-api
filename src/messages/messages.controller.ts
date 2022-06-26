import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'hello';
  }

  @Post()
  createMessage(@Body() body: string) {
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
