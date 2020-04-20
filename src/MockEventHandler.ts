import EventHandler from './EventHandler';

export default
class MockEventHandler implements EventHandler {
  addEventListenerToClass(
    className: string,
    eventName: string,
    handlerFunction: (e: Event) => void
  ) {
    console.log({
      className,
      eventName,
      handlerFunction: handlerFunction.toString()
    });
  }
}
