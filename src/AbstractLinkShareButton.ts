import AbstractShareButton from './AbstractShareButton';

export default
abstract class AbstractLinkShareButton extends AbstractShareButton {
  
  protected _url: string;
  protected _class: string;

  constructor(_class: string, url: string) {
    super(_class);
    this._url = url;
  }

  abstract createLink(): string;

  createAction() {
    const link = this.createLink();
    return () => window.open(link);
  }
}
