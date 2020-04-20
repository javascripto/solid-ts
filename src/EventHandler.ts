export default
class EventHandler {
  addEventListenerToClass(_class: string, event: string, eventFn: (e: Event) => void) {
    const elements = document.querySelectorAll(_class);

    elements.forEach((element: HTMLElement) => {
      element.addEventListener(event, eventFn);
    });
  }
}
