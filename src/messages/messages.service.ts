import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

// mark the class for registration into tje nest DI container
@Injectable()
export class MessagesService {
  // messagesRepo: MessagesRepository;

  // constructor(messagesRepo: MessagesRepository) {
  //   this.messagesRepo = messagesRepo;
  // }

  // an equivalent to the lines above is

  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
