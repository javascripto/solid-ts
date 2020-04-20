import AbstractShareButton from './AbstractShareButton';

/**
 * 
 */
export default
class ShareButtonPrint extends AbstractShareButton {

  constructor(_class: string) {
    super(_class);
  }

  createAction() {
    return () => window.print();
  }
}
