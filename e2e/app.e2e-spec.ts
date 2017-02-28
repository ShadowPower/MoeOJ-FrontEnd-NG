import { MoeOJFrontEndNGPage } from './app.po';

describe('moe-oj-front-end-ng App', () => {
  let page: MoeOJFrontEndNGPage;

  beforeEach(() => {
    page = new MoeOJFrontEndNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
