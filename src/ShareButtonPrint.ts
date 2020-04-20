import AbstractShareButton from './AbstractShareButton';
import EventHandler from './EventHandler';

/**
 * 
 */
export default
class ShareButtonPrint extends AbstractShareButton {

  constructor(eventHandler: EventHandler, _class: string) {
    super(eventHandler, _class);
  }

  createAction() {
    return () => window.print();
  }
}
