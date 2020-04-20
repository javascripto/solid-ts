import EventHandler from './EventHandler';

export default
abstract class AbstractShareButton {
  
  protected _class: string;
  protected eventhandler: EventHandler;

  constructor(eventHandler: EventHandler, _class: string) {
    this._class = _class;
    this.eventhandler = eventHandler;
  }

  abstract createAction();

  bind() {
    const action = this.createAction();
    this.eventhandler
      .addEventListenerToClass(this._class, 'click', action);
  }
}
