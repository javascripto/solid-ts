import AbstractLinkShareButton from './AbstractLinkShareButton';

export default
class ShareButtonFacebook extends AbstractLinkShareButton {

  constructor(_class: string, url: string) {
    super(_class, url);
  }

  createLink() {
    return `https://facebook.com/sharer.php?u=${this._url}`;
  }
}
