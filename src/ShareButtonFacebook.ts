import AbstractShareButton from './AbstractShareButton';

export default
class ShareButtonFacebook extends AbstractShareButton {

  constructor(_class: string, url: string) {
    super(_class, url);
  }

  createLink() {
    return `https://facebook.com/sharer.php?u=${this._url}`;
  }
}
