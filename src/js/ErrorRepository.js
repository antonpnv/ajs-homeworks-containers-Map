export class ErrorRepository {
  constructor() {
    this.map = new Map();
  }

  addError(key, value) {
    this.map.set(key, value);
  }

  translate(code) {
    const description = this.map.get(code);
    return description || 'Unknown error';
  }
}