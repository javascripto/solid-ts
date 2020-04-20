import EventHandler from './EventHandler';

export default
abstract class AbstractShareButton {
  
  protected _url: string;
  protected _class: string;
  protected eventhandler: EventHandler;

  constructor(_class: string, url: string) {
    this.eventhandler = new EventHandler();
    this._url = url;
    this._class = _class;
  }

  abstract createLink(): string;

  bind() {
    const link = this.createLink();
    this.eventhandler
      .addEventListenerToClass(this._class, 'click', () => window.open(link));
  }
}
