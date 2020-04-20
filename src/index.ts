import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';

const youtubeLink = 'https://www.youtube.com/rodrigobranas';

const twitter = new ShareButtonTwitter('.btn-twitter', youtubeLink);
const facebook = new ShareButtonFacebook('.btn-facebook', youtubeLink);
const linkedin = new ShareButtonLinkedin('.btn-linkedin', youtubeLink);

twitter.bind();
facebook.bind();
linkedin.bind();
