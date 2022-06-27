// example of inversion of control

const repo = new MessagesRepository();
const service = new MessagesService(repo);
const controller = new MessagesController(service);

// downsides, it has too many lines of code to make a single controller.
// sometimes we need multiple services and will need their own dependencies too.
