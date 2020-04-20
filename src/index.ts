import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonPrint from './ShareButtonPrint';
import AbstractShareButton from './AbstractShareButton';
import EventHandler from './EventHandler';
import DOMEventHandler from './DOMEventHandler';

const youtubeLink = 'https://www.youtube.com/rodrigobranas';

const eventHandler: EventHandler = new DOMEventHandler();

/**
 * Posso dizer que cada um dos botões (é um) AbstractShareButton
 */
const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, '.btn-twitter', youtubeLink);
const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, '.btn-facebook', youtubeLink);
const linkedin: AbstractShareButton = new ShareButtonLinkedin(eventHandler, '.btn-linkedin', youtubeLink);
const print: AbstractShareButton = new ShareButtonPrint(eventHandler, '.btn-print');

twitter.bind();
facebook.bind();
linkedin.bind();
print.bind();
