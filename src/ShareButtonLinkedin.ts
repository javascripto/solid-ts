import AbstractLinkShareButton from './AbstractLinkShareButton';
import EventHandler from './EventHandler';

export default
class ShareButtonLinkedIn extends AbstractLinkShareButton {

  constructor(eventHandler: EventHandler, _class: string, url: string) {
    super(eventHandler, _class, url);
  }

  createLink() {
    return `https://linkedin.com/shareArticle?url=${this._url}`;
  }
}
