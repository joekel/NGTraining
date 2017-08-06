import { StprojectPage } from './app.po';

describe('stproject App', () => {
  let page: StprojectPage;

  beforeEach(() => {
    page = new StprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
