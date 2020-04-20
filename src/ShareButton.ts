import EventHandler from './DOMEventHandler';
import DOMEventHandler from './DOMEventHandler';

/**
 *  @deprecated Não utilizar essa classe concreta.
 * Agora é necessário criar uma nova classe que 
 * extende da classe abstrata AbstractShareButton
 */
export default
class ShareButton {
  private eventhandler: EventHandler;

  constructor(private url: string) {
    this.eventhandler = new DOMEventHandler();
  }

  bind(_class: string, socialNetwork: string) {
    let link: string;

    if (socialNetwork === 'twitter') {
      link = `https://twitter.com/share?url=${this.url}`;
    }
    if (socialNetwork === 'facebook') {
      link = `https://facebook.com/sharer.php?u=${this.url}`;
    }
    if (socialNetwork === 'linkedin') {
      link = `https://linkedin.com/shareArticle?url=${this.url}`;
    }
    this.eventhandler
      .addEventListenerToClass(_class, 'click', () => window.open(link));
  }
}
