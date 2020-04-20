import EventHandler from './EventHandler';

export default
class DOMEventHandler implements EventHandler {
  addEventListenerToClass(
    className: string,
    eventName: string,
    handlerFunction: (e: Event) => void
  ) {
    const elements = document.querySelectorAll(className);
    elements.forEach((element: HTMLElement) => {
      element.addEventListener(eventName, handlerFunction);
    });
  }
}
