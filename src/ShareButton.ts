export default class ShareButton {
  
  constructor(public url: string) {}

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
    const elements = document.querySelectorAll(_class);

    elements.forEach((element: HTMLElement) => {
      element.addEventListener('click', () => window.open(link));
    });
  }
}
