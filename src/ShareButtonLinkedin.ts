import AbstractShareButton from './AbstractShareButton';

export default
class ShareButtonLinkedIn extends AbstractShareButton {

  constructor(_class: string, url: string) {
    super(_class, url);
  }

  createLink() {
    return `https://linkedin.com/shareArticle?url=${this._url}`;
  }
}
