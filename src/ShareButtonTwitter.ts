import AbstractLinkShareButton from './AbstractLinkShareButton';

export default
class ShareButtonTwitter extends AbstractLinkShareButton {

  constructor(_class: string, url: string) {
    super(_class, url);
  }

  createLink() {
    return `https://twitter.com/share?url=${this._url}`;
  }
}
