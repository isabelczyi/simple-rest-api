import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'hello';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
