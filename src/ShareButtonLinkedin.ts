import AbstractLinkShareButton from './AbstractLinkShareButton';

export default
class ShareButtonLinkedIn extends AbstractLinkShareButton {

  constructor(_class: string, url: string) {
    super(_class, url);
  }

  createLink() {
    return `https://linkedin.com/shareArticle?url=${this._url}`;
  }
}
