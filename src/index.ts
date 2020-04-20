import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonPrint from './ShareButtonPrint';

const youtubeLink = 'https://www.youtube.com/rodrigobranas';

const twitter = new ShareButtonTwitter('.btn-twitter', youtubeLink);
const facebook = new ShareButtonFacebook('.btn-facebook', youtubeLink);
const linkedin = new ShareButtonLinkedin('.btn-linkedin', youtubeLink);
const print = new ShareButtonPrint('.btn-print');

twitter.bind();
facebook.bind();
linkedin.bind();
print.bind();
