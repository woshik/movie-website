// handle the asynchronous function error and pass the result and error as a array

export default class ErrorHandler {
  async asyncError(handler) {
    this.result = null;
    this.error = null;
    try {
      this.result = await handler;
    } catch (e) {
      this.error = e;
    }

    return [this.result, this.error];
  }
}
