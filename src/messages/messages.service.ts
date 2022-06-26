import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;
  constructor() {
    // Service is creating its own dependencies
    // Don't do this in any real apps, dependency injection is used in Nest js usually this is just for exploration
    this.messagesRepo = new MessagesRepository();
  }
}
