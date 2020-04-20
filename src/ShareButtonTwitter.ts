import AbstractLinkShareButton from './AbstractLinkShareButton';
import EventHandler from './EventHandler';

export default
class ShareButtonTwitter extends AbstractLinkShareButton {

  constructor(eventHandler: EventHandler, _class: string, url: string) {
    super(eventHandler, _class, url);
  }

  createLink() {
    return `https://twitter.com/share?url=${this._url}`;
  }
}
