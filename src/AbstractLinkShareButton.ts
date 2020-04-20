import AbstractShareButton from './AbstractShareButton';
import EventHandler from './EventHandler';

export default
abstract class AbstractLinkShareButton extends AbstractShareButton {
  
  protected _url: string;
  protected _class: string;

  constructor(eventHandler: EventHandler, _class: string, url: string) {
    super(eventHandler, _class);
    this._url = url;
  }

  abstract createLink(): string;

  createAction() {
    const link = this.createLink();
    return () => window.open(link);
  }
}
