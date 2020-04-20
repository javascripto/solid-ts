import AbstractShareButton from './AbstractShareButton';

export default
class ShareButtonTwitter extends AbstractShareButton {

  constructor(_class: string, url: string) {
    super(_class, url);
  }

  createLink() {
    return `https://twitter.com/share?url=${this._url}`;
  }
}
