import AbstractShareButton from './AbstractShareButton';

/**
 * Esta classe quebra o principio de substituição de Liskov pois um botão de imprimir não possui link
 */
export default
class ShareButtonPrint extends AbstractShareButton {

  constructor(_class: string, url: string) {
    super(_class, url);
  }

  createLink() {
    throw new Error('Unsuported Method Exception');
  }
}
