import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonPrint from './ShareButtonPrint';
import AbstractShareButton from './AbstractShareButton';

const youtubeLink = 'https://www.youtube.com/rodrigobranas';

/**
 * Posso dizer que cada um dos botões (é um) AbstractShareButton
 */
const twitter: AbstractShareButton = new ShareButtonTwitter('.btn-twitter', youtubeLink);
const facebook: AbstractShareButton = new ShareButtonFacebook('.btn-facebook', youtubeLink);
const linkedin: AbstractShareButton = new ShareButtonLinkedin('.btn-linkedin', youtubeLink);
const print: AbstractShareButton = new ShareButtonPrint('.btn-print');

twitter.bind();
facebook.bind();
linkedin.bind();
print.bind();
