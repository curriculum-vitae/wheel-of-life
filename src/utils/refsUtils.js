export class RefsStore {
  store(name, value) {
    this[name] = value;
  }
}
