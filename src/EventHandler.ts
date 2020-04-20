export default
interface EventHandler {
  addEventListenerToClass(
    className: string,
    eventName: string,
    handlerFunction: (e: Event) => void
  );
}
