import { MessagesRepository } from './messages.repository';

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
