import { AngularWishlistPage } from './app.po';

describe('angular-wishlist App', () => {
  let page: AngularWishlistPage;

  beforeEach(() => {
    page = new AngularWishlistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
