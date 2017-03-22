import { Chapter2XPage } from './app.po';

describe('chapter2-x App', () => {
  let page: Chapter2XPage;

  beforeEach(() => {
    page = new Chapter2XPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
