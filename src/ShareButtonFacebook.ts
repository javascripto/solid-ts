import AbstractLinkShareButton from './AbstractLinkShareButton';
import EventHandler from './EventHandler';

export default
class ShareButtonFacebook extends AbstractLinkShareButton {

  constructor(eventHandler: EventHandler, _class: string, url: string) {
    super(eventHandler, _class, url);
  }

  createLink() {
    return `https://facebook.com/sharer.php?u=${this._url}`;
  }
}
