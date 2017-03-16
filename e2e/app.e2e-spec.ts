import { AngCliRoutePage } from './app.po';

describe('ang-cli-route App', () => {
  let page: AngCliRoutePage;

  beforeEach(() => {
    page = new AngCliRoutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
